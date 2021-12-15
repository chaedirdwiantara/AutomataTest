import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Modal, Button} from '@ui-kitten/components';
import {Jarak} from '../..';

const ModalFilter = ({open, onClose, sortNameAZ, sortNameZA}) => {
  const [colorButton, setColorButton] = useState('');

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
          setColorButton(1);
        }}
        status={colorButton == 1 ? 'success' : 'primary'}>
        Name A-Z
      </Button>
      <Jarak height={15} />
      <Button
        onPress={() => {
          sortNameZA();
          onClose();
          setColorButton(2);
        }}
        status={colorButton == 2 ? 'success' : 'primary'}>
        Name Z-A
      </Button>
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
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
});
