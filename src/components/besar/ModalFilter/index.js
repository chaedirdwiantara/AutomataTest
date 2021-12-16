import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Modal, Button} from '@ui-kitten/components';

const ModalFilter = ({
  open,
  onClose,
  sortNameAZ,
  sortNameZA,
  sortDateAZ,
  sortDateZA,
}) => {
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
        status={colorButton == 1 ? 'success' : 'primary'}
        style={styles.button}>
        Name A-Z
      </Button>
      <Button
        onPress={() => {
          sortNameZA();
          onClose();
          setColorButton(2);
        }}
        status={colorButton == 2 ? 'success' : 'primary'}
        style={styles.button}>
        Name Z-A
      </Button>
      <Button
        onPress={() => {
          sortDateAZ();
          onClose();
          setColorButton(3);
        }}
        status={colorButton == 3 ? 'success' : 'primary'}
        style={styles.button}>
        Date A-Z
      </Button>
      <Button
        onPress={() => {
          sortDateZA();
          onClose();
          setColorButton(4);
        }}
        status={colorButton == 4 ? 'success' : 'primary'}
        style={styles.button}>
        Date Z-A
      </Button>
    </Modal>
  );
};

export default ModalFilter;

const styles = StyleSheet.create({
  modalStyle: {
    backgroundColor: 'white',
    height: '50%',
    width: '92%',
    borderRadius: 20,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 15,
  },
  button: {
    width: 110,
  },
});
