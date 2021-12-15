import {dispatchError, dispatchLoading, dispatchSuccess} from '../utils';
import {API} from '../utils';

export const GET_DATA_RUMA = 'GET_DATA_RUMA';

export const getDataRuma = () => {
  return dispatch => {
    // LOADING
    dispatchLoading(dispatch, GET_DATA_RUMA);

    API.get('products', {per_page: 30})
      .then(response => {
        // BERHASIL
        let filterResult = [];
        for (let i = 0; i < response.length; i++) {
          if (response[i].categories[0].id == 118) {
            filterResult.push(response[i]);
          }
        }
        dispatchSuccess(dispatch, GET_DATA_RUMA, filterResult);
      })
      .catch(error => {
        // GAGAL
        dispatchError(dispatch, GET_DATA_RUMA, error);
        alert(error);
      });
  };
};
