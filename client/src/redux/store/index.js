import { applyMiddleware, compose, createStore } from "redux";
import { reducer } from "../reducer";
import thunkMiddleware from "redux-thunk";
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(thunkMiddleware))
);
