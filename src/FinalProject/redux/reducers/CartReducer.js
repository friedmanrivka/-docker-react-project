import { useDispatch } from "react-redux"
import { decreaseQty } from "../actions/ProductActions"



const initialState=[]


const CartReducer=(state=initialState, action)=>{
    
    switch(action.type){
        case "DELETE_FROM_CART":
            {
                return state.filter((item, index) => index!== action.index)
            }
        case "ADD_TO_CART":
            {
                return [...state, action.newProduct]
                
            }
        default:
            return state
    }
}
export default CartReducer