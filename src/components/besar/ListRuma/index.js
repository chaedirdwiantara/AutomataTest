import React, {useEffect, useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import {SearchData} from '..';
import {IconRuang, Jarak} from '../..';
import {
  responsiveHeight,
  sortDateASC,
  sortNameASC,
  sortNameDSC,
  sortDateDSC,
  fonts,
  colors,
} from '../../../utils';

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

const ListRuma = ({navigation, DataRuma, DataLoading, DataError}) => {
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState(0);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(500).then(() => setRefreshing(false));
  }, []);

  useEffect(() => {
    if (DataRuma) {
      switch (sort) {
        case 1:
          return sortNameASC(DataRuma);
        case 2:
          return sortNameDSC(DataRuma);
        case 3:
          return sortDateASC(DataRuma);
        case 4:
          return sortDateDSC(DataRuma);
        default:
          DataRuma;
      }
    }
  }, [sort, DataRuma]);

  const changeIt = item => {
    setSort(item);
    onRefresh();
  };
  return (
    <View style={styles.container}>
      <SearchData
        onChange={text => setSearch(text)}
        nameAZ={() => changeIt(1)}
        nameZA={() => changeIt(2)}
        dateAZ={() => changeIt(3)}
        dateZA={() => changeIt(4)}
      />
      <Jarak height={10} />
      {DataRuma ? (
        <FlatList
          data={DataRuma?.filter(items => {
            if (search == '') {
              return items;
            } else if (
              items.name?.toLowerCase().includes(search.toLowerCase())
            ) {
              return items;
            } else if (
              items.date_created?.toLowerCase().includes(search.toLowerCase())
            ) {
              return items;
            }
          })}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          renderItem={({item}) => (
            <>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('ProductDetail', {item});
                }}
                style={styles.cardContainer}>
                <View style={styles.imgContainer}>
                  <Image
                    source={{uri: item.images[0].src}}
                    style={styles.gambar}
                  />
                </View>
                <View style={styles.desc}>
                  <Text numberOfLines={1} style={styles.textTitle}>
                    {item.name}
                  </Text>
                  <Text style={styles.text}>
                    {item.date_created.split('T')[0]}
                  </Text>
                  <Jarak height={30} />
                  <IconRuang />
                </View>
              </TouchableOpacity>
              <Jarak height={30} />
            </>
          )}
        />
      ) : DataLoading ? (
        <View style={styles.loading}>
          <ActivityIndicator color={'black'} />
        </View>
      ) : DataError ? (
        <Text>{DataError}</Text>
      ) : (
        <Text>Data Kosong</Text>
      )}
    </View>
  );
};

export default ListRuma;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    marginTop: 10,
  },
  cardContainer: {
    marginHorizontal: 5,
    height: responsiveHeight(400),
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  imgContainer: {
    marginHorizontal: responsiveHeight(7),
    alignItems: 'center',
    alignSelf: 'center',
    width: '100%',
  },
  gambar: {
    width: '100%',
    height: responsiveHeight(250),
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  desc: {
    position: 'absolute',
    bottom: 0,
    height: responsiveHeight(180),
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    width: '100%',
    backgroundColor: colors.primary,
    alignItems: 'flex-start',
    padding: 20,
  },
  textTitle: {
    color: 'black',
    fontSize: 24,
    fontFamily: fonts.primary.semibold,
  },
  text: {color: 'black', fontFamily: fonts.primary.regular},
});
