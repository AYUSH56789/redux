// step - 3
import {combineReducers} from 'redux'
// import all different reducers
import {changeNumber} from './updown';

const rootReducer= combineReducers({
    changeNumber,
})

export default rootReducer;
