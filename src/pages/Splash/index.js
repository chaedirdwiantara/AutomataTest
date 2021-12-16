import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IconAppTitle, IconLogo} from '../../assets';
import {Jarak} from '../../components';
import {fonts} from '../../utils';

const Splash = props => {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.replace('ProductList');
    }, 1000);
  }, []);
  return (
    <View style={styles.pages}>
      <Jarak height={120} />
      <IconAppTitle />
      <View style={styles.footScr}>
        <Text style={styles.text}>Powered by</Text>
        <Jarak width={10} />
        <IconLogo />
      </View>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#3985AD',
    paddingBottom: 80,
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontFamily: fonts.primary.bold,
  },
  footScr: {
    flexDirection: 'row',
  },
});
