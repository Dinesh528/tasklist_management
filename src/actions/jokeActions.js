import axios from 'axios';
export const FETCH_JOKES_REQUEST = 'FETCH_JOKES_REQUEST';
export const FETCH_JOKES_SUCCESS = 'FETCH_JOKES_SUCCESS';
export const FETCH_JOKES_FAILURE = 'FETCH_JOKES_FAILURE';

export const fetchJokes = () => {
  return async (dispatch) => {
    try {
      // Set loading state while fetching jokes
      dispatch({ type: 'FETCH_JOKES_REQUEST' });

      // Fetch jokes from the API
      const response = await axios.get(
        'https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=en&amount=10'
      );

      // Dispatch success action with the fetched jokes
      dispatch({
        type: 'FETCH_JOKES_SUCCESS',
        payload: response.data.jokes,
      });
    } catch (error) {
      // Dispatch error action if fetching jokes fails
      dispatch({ type: 'FETCH_JOKES_FAILURE', payload: error.message });
    }
  };
};
