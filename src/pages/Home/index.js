import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getDataRuma} from '../../actions/getData';
import {ListRuma} from '../../components';

const ProductList = props => {
  const dispatch = useDispatch();
  const DataRumaReducer = useSelector(
    state => state.DataRumaReducer.getDataRumaResult,
  );

  useEffect(() => {
    dispatch(getDataRuma());
  }, []);

  return (
    <View style={styles.pages}>
      <ListRuma DataRuma={DataRumaReducer} navigation={props.navigation} />
    </View>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});
