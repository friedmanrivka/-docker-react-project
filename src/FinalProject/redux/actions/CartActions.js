export const addToCart=(newProduct,index)=>({
    type:"ADD_TO_CART",
    newProduct,
    index
})
export const deleteFromCart=(index)=>({
    type:"DELETE_FROM_CART",
    index
})