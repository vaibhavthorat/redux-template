import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./reducers/Reducer";

// let myStore=createStore(
//     CounterReducer,
// );
export const Store=configureStore({
    reducer:{conterdata:CounterReducer}
})
// export default myStore;