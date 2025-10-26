import {configureStore, Tuple} from "@reduxjs/toolkit";
import logger from "redux-logger";
import promiseMiddleware from 'redux-promise-middleware';

import stock from "./reducers/stockReducer";

var store = configureStore({
	reducer: stock,
	middleware: () => new Tuple(logger,promiseMiddleware),
	preloadedState: {stock: {name: "TEST", showErrorDialog: false, errorMessage: "", price: 0, updatePending: false}}
});

export default store;


