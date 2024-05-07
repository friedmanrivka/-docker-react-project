import { combineReducers } from "redux";
import CartReducer from "./CartReducer";
import ProductReducer from "./ProductReducer";

const AllReducers = combineReducers({
  products: ProductReducer,
  cart: CartReducer
});
export default AllReducers;