//for item reducer & future auth reducer
import {combineReducers} from "redux";
import itemReducer from "./itemReducer";

export default combineReducers ({
    item: itemReducer
})