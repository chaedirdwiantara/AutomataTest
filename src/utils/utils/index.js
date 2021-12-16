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
  date.sort((a, b) => {
    const dateA = new Date(a.date_created),
      dateB = new Date(b.date_created);
    return dateB - dateA;
  });
  console.log(date, 'DATE ASC');
};

export const sortDateDSC = date => {
  date.sort((a, b) => {
    const dateA = new Date(a.date_created),
      dateB = new Date(b.date_created);
    return dateA - dateB;
  });
  console.log(date, 'DATE DSC');
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
