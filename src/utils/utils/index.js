import {Dimensions} from 'react-native';

const heightMobileUI = 896;
const widthMobileUI = 414;

export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;

export const responsiveWidth = width => {
  return (windowWidth * width) / widthMobileUI;
};

export const responsiveHeight = height => {
  return (windowHeight * height) / heightMobileUI;
};

export const sortDateASC = date => {
  return date.sort((date1, date2) => date2 - date1);
};

export const sortNameASC = name => {
  name.sort((a, b) => {
    let x = a.name.toLowerCase();
    let y = b.name.toLowerCase();
    if (x < y) {
      return 1;
    }
    if (x > y) {
      return -1;
    }
    return 0;
  });
  console.log(name, 'NAME ASC');
};

export const sortNameDSC = name => {
  name.sort((a, b) => {
    let x = a.name.toLowerCase();
    let y = b.name.toLowerCase();
    if (x < y) {
      return -1;
    }
    if (x > y) {
      return 1;
    }
    return 0;
  });
  console.log(name, 'NAME DSC');
};
