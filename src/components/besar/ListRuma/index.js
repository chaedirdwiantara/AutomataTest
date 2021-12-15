import React, {useEffect, useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import {SearchData} from '..';
import {Jarak} from '../..';
import {responsiveHeight, sortNameASC, sortNameDSC} from '../../../utils';

const ListRuma = ({navigation, DataRuma}) => {
  console.log(DataRuma, 'yo ruma');
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState(0);

  useEffect(() => {
    if (DataRuma != false) {
      if (sort == 1) {
        return sortNameASC(DataRuma);
      } else if (sort == 2) {
        return sortNameDSC(DataRuma);
      }
    }
  }, [sort, DataRuma]);

  const changeIt = item => {
    setSort(item);
  };
  return (
    <View style={styles.container}>
      <SearchData
        onChange={text => setSearch(text)}
        nameAZ={() => changeIt(1)}
        nameZA={() => changeIt(2)}
      />
      {DataRuma !== false ? (
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
                  <Text
                    numberOfLines={1}
                    style={{color: 'grey', fontWeight: 'bold', fontSize: 20}}>
                    {item.name.toUpperCase()}
                  </Text>
                  <Text style={{color: 'grey', fontWeight: 'bold'}}>
                    {item.date_created.split('T')[0]}
                  </Text>
                </View>
              </TouchableOpacity>
              <Jarak height={30} />
            </>
          )}
        />
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
    backgroundColor: '#F5F5F5',
    // justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 20,
  },
});
