import { combineReducers } from "redux";
import { journalReducer } from './journalReducer'
import { history } from './history'



export default combineReducers({
    journalReducer,
    history ,
    

})