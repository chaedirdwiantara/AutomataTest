import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Line = () => {
  return <View style={styles.line} />;
};

export default Line;

const styles = StyleSheet.create({
  line: {
    borderTopWidth: 1,
    borderTopColor: 'red',
  },
});
