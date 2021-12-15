import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Jarak} from '..';
import {IconBathroom, IconBed, IconFloor} from '../../../assets';

const iconRuang = () => {
  return (
    <>
      <View style={styles.icons}>
        <View style={styles.iconsSub}>
          <IconFloor />
          <Jarak width={5} />
          <Text>0 m2</Text>
        </View>
        <View style={styles.iconsSub}>
          <IconBed />
          <Jarak width={5} />
          <Text>0</Text>
        </View>
        <View style={styles.iconsSub}>
          <IconBathroom />
          <Jarak width={5} />
          <Text>0</Text>
        </View>
      </View>
    </>
  );
};

export default iconRuang;

const styles = StyleSheet.create({
  icons: {
    flexDirection: 'row',
  },
  iconsSub: {
    flexDirection: 'row',
    marginRight: 15,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
});
