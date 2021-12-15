import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getDataRuma} from '../../actions/getData';
import {SearchData} from '../../components';
import {sortDateASC, sortNameASC, sortNameDSC} from '../../utils';

const ProductList = props => {
  const dispatch = useDispatch();
  const DataRumaReducer = useSelector(
    state => state.DataRumaReducer.getDataRumaResult,
  );
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState(0);

  useEffect(() => {
    if (DataRumaReducer != false) {
      if (sort == 1) {
        return sortNameASC(DataRumaReducer);
      } else if (sort == 2) {
        return sortNameDSC(DataRumaReducer);
      }
    }
  }, [sort, DataRumaReducer]);

  useEffect(() => {
    dispatch(getDataRuma());
  }, []);

  const changeIt = item => {
    setSort(item);
  };

  return (
    <View style={styles.pages}>
      <SearchData
        onChange={text => setSearch(text)}
        nameAZ={() => changeIt(1)}
        nameZA={() => changeIt(2)}
      />
      <FlatList
        data={
          DataRumaReducer !== false
            ? DataRumaReducer?.filter(items => {
                if (search == '') {
                  return items;
                } else if (
                  items.name?.toLowerCase().includes(search.toLowerCase())
                ) {
                  return items;
                } else if (
                  items.date_created
                    ?.toLowerCase()
                    .includes(search.toLowerCase())
                ) {
                  return items;
                }
              })
            : []
        }
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('ProductDetail', {item});
            }}
            style={styles.touchable}>
            <Text style={{color: 'grey', fontWeight: 'bold'}}>
              {item.name.toUpperCase()}, {item.date_created.split('T')[0]}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
