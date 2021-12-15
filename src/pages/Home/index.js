import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getDataRuma} from '../../actions/getData';
import {SearchData} from '../../components';

const ProductList = props => {
  const dispatch = useDispatch();
  const DataRumaReducer = useSelector(
    state => state.DataRumaReducer.getDataRumaResult,
  );
  console.log(DataRumaReducer, 'DataRumaReducer');

  const [search, setSearch] = useState('');

  useEffect(() => {
    dispatch(getDataRuma());
  }, []);

  return (
    <View style={styles.pages}>
      <SearchData onChange={text => setSearch(text)} />
      <FlatList
        data={
          DataRumaReducer !== false
            ? DataRumaReducer.filter(items => {
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
              {item.name.toUpperCase()}
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
