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
      <Text style={styles.text}>Powered by</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3985AD',
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
