import {combineReducers} from 'redux';
import budget from './reducers/budgetReducer';

const rootReducer = combineReducers({budget});

export default rootReducer;