import { combineReducers } from "redux";
import stocksReducer from "./stockReducer";


//combine reducers
const rootReducer = combineReducers({
    stocks: stocksReducer,
});

export default rootReducer;