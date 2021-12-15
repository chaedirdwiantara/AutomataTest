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
  // const nameAsc = DataRumaReducer != false ? sortNameASC(DataRumaReducer) : '';
  // console.log(nameAsc, 'namae');

  const [search, setSearch] = useState('');
  const [sort, setSort] = useState(0);

  const [showData, setShowData] = useState(false);
  console.log(showData, 'showData');

  useEffect(() => {
    dispatch(getDataRuma());
  }, []);

  useEffect(() => {
    if (sort == 0 && DataRumaReducer !== false) {
      //original
      DataRumaReducer;
    } else if (sort == 1 && DataRumaReducer !== false) {
      //sort Name ASC
      sortNameASC(DataRumaReducer);
    } else if (sort == 2 && DataRumaReducer !== false) {
      //sort Name DSC
      sortNameDSC(DataRumaReducer);
    } else if (sort == 3) {
      //sort Date ASC
    } else if (sort == 4) {
      //sort Date DSC
    }
    console.log(sort, 'sort');
  }, [sort, showData, DataRumaReducer]);

  return (
    <View style={styles.pages}>
      <SearchData onChange={text => setSearch(text)} />
      <Text
        onPress={() => {
          setSort(1);
        }}>
        Name ASC
      </Text>
      <Text
        onPress={() => {
          setSort(2);
        }}>
        Name DSC
      </Text>
      <Text
        onPress={() => {
          setSort(3);
        }}>
        Date ASC
      </Text>
      <Text
        onPress={() => {
          setSort(4);
        }}>
        Date DSC
      </Text>
      <Text
        onPress={() => {
          setSort(0);
        }}>
        Delete Filter
      </Text>
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
