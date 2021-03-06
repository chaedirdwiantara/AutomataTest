import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  BackHandler,
  TouchableOpacity,
} from 'react-native';
import {ModalFilter} from '..';
import {IconFilter, IconSearch} from '../../../assets/icons';
import {colors, responsiveHeight} from '../../../utils';

const SearchData = ({onChange, nameAZ, nameZA, dateZA, dateAZ}) => {
  //MODAL SETUP
  const [modalVisible, setModalVisible] = useState(false);
  const closeModalBack = () => {
    if (modalVisible != false) {
      setModalVisible(!modalVisible);
      return true;
    }
    return false;
  };
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', closeModalBack);

    return () =>
      BackHandler.removeEventListener('hardwareBackPress', closeModalBack);
  }, [modalVisible]);
  //END OF MODAL SETUP

  return (
    <View style={styles.container}>
      <View style={styles.searchSection}>
        <IconSearch width={20} height={20} />
        <TextInput
          placeholder="Search..."
          onChangeText={onChange}
          style={styles.input}
        />
      </View>
      <TouchableOpacity
        style={styles.filter}
        onPress={() => {
          setModalVisible(!modalVisible);
        }}>
        <IconFilter width={35} height={35} />
      </TouchableOpacity>
      <ModalFilter
        open={modalVisible}
        onClose={() => setModalVisible(!modalVisible)}
        sortNameAZ={nameAZ}
        sortNameZA={nameZA}
        sortDateAZ={dateAZ}
        sortDateZA={dateZA}
      />
    </View>
  );
};

export default SearchData;

const styles = StyleSheet.create({
  container: {
    height: responsiveHeight(60),
    marginTop: 15,
    marginBottom: 20,
    width: '100%',
    flexDirection: 'row',
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  searchSection: {
    flex: 8,
    backgroundColor: colors.primary,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    paddingVertical: 5,
    paddingLeft: 15,
    alignItems: 'center',
    flexDirection: 'row',
  },
  input: {
    marginLeft: 5,
    fontSize: 16,
    color: 'black',
    width: '90%',
  },
  filter: {
    flex: 2,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    borderColor: colors.border,
    borderLeftWidth: 1,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
