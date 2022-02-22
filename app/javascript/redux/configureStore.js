import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import reducerMessage from "./messages";

const reducers = combineReducers({ reducerMessage
});

const store = createStore(reducers, applyMiddleware(thunk, logger));
export default store;



