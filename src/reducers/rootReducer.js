import { combineReducers } from 'redux';
import authReducer from './authReducer';
import taskReducer from './taskReducer';
import jokesReducer from './JokeReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    tasks: taskReducer,
    jokes: jokesReducer,

  });
  
  export default rootReducer;
  