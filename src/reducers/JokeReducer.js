import { FETCH_JOKES_REQUEST, FETCH_JOKES_SUCCESS, FETCH_JOKES_FAILURE } from '../actions/jokeActions';

const initialState = {
  jokes: [],
  loading: false,
  error: null,
};

const jokesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_JOKES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_JOKES_SUCCESS:
      return {
        ...state,
        jokes: action.payload,
        loading: false,
        error: null,
      };
    case FETCH_JOKES_FAILURE:
      return {
        ...state,
        jokes: [],
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default jokesReducer;
