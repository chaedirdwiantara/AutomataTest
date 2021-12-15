import React, {useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {API} from '../../utils/constant';

const ProductList = props => {
  useEffect(() => {
    API.get('products', {per_page: 30})
      .then(data => {
        console.log(data, 'products');
      })
      .catch(error => {
        console.log(error);
      });
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
