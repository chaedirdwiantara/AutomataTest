import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Splash = props => {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.replace('ProductList');
    }, 300);
  }, []);
  return (
    <View style={styles.pages}>
      <Text>Yo wassap ini splash</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});
