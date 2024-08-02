import { combineReducers } from 'redux';
import characterAReducer from './characterA';
import characterBReducer from './characterB';

const allReducers = combineReducers({
    characterA: characterAReducer,
    characterB: characterBReducer
});

export default allReducers;
