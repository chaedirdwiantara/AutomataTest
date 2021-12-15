import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {responsiveHeight} from '../../../utils';

const SearchData = ({onChange}) => {
  return (
    <View style={styles.container}>
      <View style={styles.searchSection}>
        <TextInput
          placeholder="Search..."
          onChangeText={onChange}
          style={styles.input}
        />
      </View>
    </View>
  );
};

export default SearchData;

const styles = StyleSheet.create({
  container: {
    height: responsiveHeight(60),
    marginTop: 15,
    marginHorizontal: 30,
    marginBottom: 20,
    width: '90%',
    // backgroundColor: 'green',
  },
  searchSection: {
    flex: 1,
    backgroundColor: '#F7F9FC',
    borderRadius: 30,
    borderColor: '#60AF20',
    borderWidth: 1,
    paddingVertical: 5,
    paddingLeft: 15,
    alignItems: 'center',
  },
  input: {
    fontSize: 16,
    color: 'black',
    width: '100%',
  },
});
