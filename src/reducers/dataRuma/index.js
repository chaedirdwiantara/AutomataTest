import {GET_DATA_RUMA} from '../../actions/getData';

const initialState = {
  getDataRumaLoading: false,
  getDataRumaResult: false,
  getDataRumaError: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_DATA_RUMA:
      console.log(state, 'masuk');
      return {
        ...state,
        getDataRumaLoading: action.payload.loading,
        getDataRumaResult: action.payload.data,
        getDataRumaError: action.payload.errorMessage,
      };
    default:
      return state;
  }
}
