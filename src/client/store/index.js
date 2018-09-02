import {createStore} from 'redux';
import reducer from './reducer';
import INITIAL_DATA from './initialData.json';

export default createStore(reducer, INITIAL_DATA);