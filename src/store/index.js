import { applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { legacy_createStore as createStore } from "redux"
import rootReducer from "../reducers"

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;