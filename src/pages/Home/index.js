import React, {useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getDataRuma} from '../../actions/getData';

const ProductList = props => {
  const dispatch = useDispatch();
  const DataRumaReducer = useSelector(
    state => state.DataRumaReducer.getDataRumaResult,
  );
  console.log(DataRumaReducer, 'DataRumaReducer');

  useEffect(() => {
    dispatch(getDataRuma());
  }, []);

  return (
    <View style={styles.pages}>
      <Text onPress={() => props.navigation.navigate('ProductDetail')}>
        Product List Page
      </Text>
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
