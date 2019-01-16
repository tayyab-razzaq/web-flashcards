import {combineReducers} from 'redux';
import decksReducer from './decksReducer';

const rootReducer = combineReducers({
	decksReducer: decksReducer
});

export default rootReducer