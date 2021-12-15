import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {Modal} from '@ui-kitten/components';

const ModalFilter = ({open, onClose, sortNameAZ, sortNameZA}) => {
  const ditekan = item => {
    console.log('haiii', item);
  };
  return (
    <Modal
      visible={open}
      onRequestClose={onClose}
      style={styles.modalStyle}
      onBackButtonPress={onClose}
      onBackdropPress={onClose}
      backdropStyle={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
      <Button
        onPress={() => {
          sortNameAZ();
          onClose();
        }}
        title="Name A-Z"
      />
      <Button
        onPress={() => {
          sortNameZA();
          onClose();
        }}
        title="Name Z-A"
      />
    </Modal>
  );
};

export default ModalFilter;

const styles = StyleSheet.create({
  modalStyle: {
    backgroundColor: 'white',
    height: '70%',
    width: '92%',
    borderRadius: 20,
    alignItems: 'center',
    padding: 15,
  },
});
