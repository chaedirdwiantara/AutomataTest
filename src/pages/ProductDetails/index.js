import React from 'react';
import {StyleSheet, View} from 'react-native';
import {DetailRuma} from '../../components';

const ProductDetail = props => {
  const item = props.route.params.item;
  return (
    <View style={styles.pages}>
      <DetailRuma DetailRuma={item} />
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
  },
});
