import { combineReducers } from "redux";
import transactionsReducer from "./transactionsReducer";

const rootReducer = combineReducers({ transactionsReducer });

export default rootReducer;
