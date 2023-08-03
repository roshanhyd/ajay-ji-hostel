import rotateReducer from "./reducers/rotateReducer";
import { createStore } from "redux";

function configureStore(state={rotating:true}) {
    return createStore(rotateReducer, state);
}

export default configureStore;