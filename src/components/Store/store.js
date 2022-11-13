import { applyMiddleware, combineReducers, createStore } from "redux";
import loginReducer from "./login-reducer";
import mapReducer from "./map-reducer";
import thunkMiddleware from "redux-thunk";




let reducers = combineReducers({
    mapPage: mapReducer,
    loginPage: loginReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));




export default store;