import React from 'react';
import {StyleSheet, View} from 'react-native';

const Line = () => {
  return <View style={styles.line}></View>;
};

export default Line;

const styles = StyleSheet.create({
  line: {
    borderBottomColor: 'black',
    width: '100%',
    borderBottomWidth: 1,
  },
});
