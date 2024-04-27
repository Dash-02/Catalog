import { createStore, combineReducers } from 'redux';
import { myReducer } from './reducers';

const rootReducer = combineReducers({
  myState: myReducer
});

const store = createStore(rootReducer);

export default store;
