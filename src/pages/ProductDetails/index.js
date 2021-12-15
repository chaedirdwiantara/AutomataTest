import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ProductDetail = props => {
  const item = props.route.params.item;
  return (
    <View style={styles.pages}>
      <Text>Product DETAIL Page</Text>
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
