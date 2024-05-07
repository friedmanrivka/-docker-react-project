import { createStore } from "redux";
import AllReducers from "./reducers";
const store = createStore(
    AllReducers
)

store.getState()
export default store