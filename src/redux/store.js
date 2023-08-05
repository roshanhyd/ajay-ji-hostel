import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./root-reducer";
import mySaga from "./product-saga";
import createSagaMiddleware from "@redux-saga/core";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
    reducer: rootReducer,
    middleware: () => [sagaMiddleware]
});

sagaMiddleware.run(mySaga)
export default store;