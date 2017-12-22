import {createStore, combineReducers} from 'redux';
import reducer from './reducer/reducer';
//Tạo store
const store = createStore(reducer);

export default store;