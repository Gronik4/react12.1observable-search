//import { configureStore } from "@reduxjs/toolkit/";
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { combineEpics, createEpicMiddleware } from "redux-observable";
import searchSlise from './search';
import { changeEpic, requestEpic } from "../epics/epic";

const reduser = combineReducers({ showresult: searchSlise });
const composeEnhansers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const epic = combineEpics( changeEpic, requestEpic );
const epicMiddleware = createEpicMiddleware();
const store = createStore(reduser, composeEnhansers(
  applyMiddleware(epicMiddleware)
));
epicMiddleware.run(epic);

/*const store = configureStore({
  reducer: {
    showresult: searchSlise
  }
});*/

export default store;
