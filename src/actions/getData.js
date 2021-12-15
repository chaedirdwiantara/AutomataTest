import {dispatchError, dispatchLoading, dispatchSuccess} from '../utils';

export const GET_DATA_RUMA = 'GET_DATA_RUMA';

export const getDogLists = () => {
  return dispatch => {
    // LOADING
    dispatchLoading(dispatch, GET_DATA_RUMA);

    // fetch(API)
    //   .then((response) => response.json())

    //   .catch((error) => {
    //     // ERROR
    //     dispatchError(dispatch, GET_DATA_RUMA, error);

    //     alert(error);
    //   });
  };
};
