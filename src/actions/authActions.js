// authActions.js

// Action Types
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';


export const logout = () => {
  return {
    type: LOGOUT
  };
};

export const loginRequest = () => {
  return {
    type: LOGIN_REQUEST
  };
};

export const loginSuccess = (user) => {
  return {
    type: LOGIN_SUCCESS,
    payload: user
  };
};

export const loginFailure = (error) => {
  return {
    type: LOGIN_FAILURE,
    payload: error
  };
};

export const LoginUser = (email, password) => {
  return async (dispatch) => {
    dispatch(loginRequest());

    try {
      // Perform your authentication logic here (e.g., making an API call)
      // For simplicity, let's assume a successful login with dummy credentials
      const user = { email, name: 'John Doe',password };
        console.log(loginSuccess(user))
      dispatch(loginSuccess(user));
    } catch (error) {
      dispatch(loginFailure(error.message));
    }
  };
};
