import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  BackHandler,
  TouchableOpacity,
} from 'react-native';
import {ModalFilter} from '..';
import {responsiveHeight} from '../../../utils';

const SearchData = ({onChange, nameAZ, nameZA}) => {
  //MODAL SETUP
  const [modalVisible, setModalVisible] = useState(false);
  //  const [sentDataToModal, setSentDataToModal] = useState("");
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
          // setSentDataToModal(item);
        }}></TouchableOpacity>
      <ModalFilter
        open={modalVisible}
        onClose={() => setModalVisible(!modalVisible)}
        sortNameAZ={nameAZ}
        sortNameZA={nameZA}
        // data={sentDataToModal}
      />
    </View>
  );
};

export default SearchData;

const styles = StyleSheet.create({
  container: {
    height: responsiveHeight(60),
    marginTop: 15,
    // marginHorizontal: 30,
    marginBottom: 20,
    width: '100%',
    backgroundColor: 'green',
    flexDirection: 'row',
    borderRadius: 30,
    borderColor: '#60AF20',
    borderWidth: 1,
  },
  searchSection: {
    flex: 8,
    backgroundColor: '#F7F9FC',
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    paddingVertical: 5,
    paddingLeft: 15,
    alignItems: 'center',
  },
  input: {
    fontSize: 16,
    color: 'black',
    width: '90%',
  },
  filter: {
    flex: 2,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    borderColor: '#60AF20',
    borderLeftWidth: 1,
    backgroundColor: 'yellow',
  },
});
