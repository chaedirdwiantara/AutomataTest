import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import {IconRuang, Jarak, Line} from '../..';
import {responsiveHeight} from '../../../utils';

const DetailRuma = ({DetailRuma}) => {
  return (
    <View style={styles.container}>
      {DetailRuma !== false ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <View style={styles.imgContainer}>
              <Image
                source={{uri: DetailRuma.images[0].src}}
                style={styles.gambar}
              />
            </View>
            <View style={styles.desc}>
              <Text
                numberOfLines={1}
                style={{color: 'grey', fontWeight: 'bold', fontSize: 20}}>
                {DetailRuma.name.toUpperCase()}
              </Text>
              <Text style={{color: 'grey', fontWeight: 'bold'}}>
                {DetailRuma.date_created.split('T')[0]}
              </Text>
              <Jarak height={20} />
              <Line />
              <Jarak height={20} />
              <Text style={styles.subTitle}>Price</Text>
              <Text style={styles.bigFont}>IDR {DetailRuma.price}</Text>
              <Jarak height={10} />
              <IconRuang />
              <Jarak height={20} />
              <Line />
              <Jarak height={20} />
              <Text style={styles.subTitle}>Details</Text>
              <Jarak height={20} />
              <Text style={styles.subCategory}>Type</Text>
              <Text style={styles.dataCategory}>{DetailRuma.type}</Text>
              <Jarak height={20} />
              <Text style={styles.subCategory}>Luas Bangunan</Text>
              <Text style={styles.dataCategory}>
                {DetailRuma.dimensions.length * DetailRuma.dimensions.length} m2
              </Text>
              <Jarak height={20} />
              <Text style={styles.subCategory}>Luas Tanah</Text>
              <Text style={styles.dataCategory}>
                {DetailRuma.dimensions.length * DetailRuma.dimensions.length} m2
              </Text>
            </View>
          </View>
        </ScrollView>
      ) : (
        <Text>Data Kosong</Text>
      )}
    </View>
  );
};

export default DetailRuma;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    width: '100%',
    height: responsiveHeight(950),
  },
  imgContainer: {
    alignItems: 'center',
    alignSelf: 'center',
    width: '100%',
  },
  gambar: {
    width: '100%',
    height: responsiveHeight(250),
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  desc: {
    marginTop: -20,
    height: responsiveHeight(730),
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    width: '100%',
    backgroundColor: '#F5F5F5',
    alignItems: 'flex-start',
    padding: 20,
  },
  subTitle: {
    fontWeight: 'bold',
    fontSize: 17,
  },
  bigFont: {
    fontWeight: 'bold',
    fontSize: 26,
  },
  subCategory: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  dataCategory: {
    fontSize: 15,
  },
});
