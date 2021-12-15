import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const ProductList = props => {
  return (
    <TouchableOpacity
      style={styles.pages}
      onPress={() => props.navigation.navigate('ProductDetail')}>
      <Text>Product List Page</Text>
    </TouchableOpacity>
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
