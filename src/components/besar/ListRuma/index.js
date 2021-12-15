import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {SearchData} from '..';
import {sortNameASC, sortNameDSC} from '../../../utils';

const ListRuma = ({navigation, DataRuma}) => {
  // console.log(DataRuma, 'yo ruma');
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
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ProductDetail', {item});
              }}
              style={styles.touchable}>
              <Text style={{color: 'grey', fontWeight: 'bold'}}>
                {item.name.toUpperCase()}, {item.date_created.split('T')[0]}
              </Text>
            </TouchableOpacity>
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
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    flex: 1,
    paddingHorizontal: 16,
    marginTop: 10,
  },
  loading: {
    flex: 1,
    marginTop: 10,
    marginBottom: 30,
  },
});
