import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart } from "../redux/actions/CartActions";
import { decreaseQty, increaseQty, increaseQtyAfterDelete } from "../redux/actions/ProductActions";
import garbage from "../redux/images/פח.png";
import cartt from "../redux/images/דד.png"
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
 



export default function CartComponent() {

    const cart = useSelector((state) => state.cart);
    const products = useSelector((state) => state.products);
    const dispatch = useDispatch();
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        let count = 0;
        cart.forEach(item => {
            count += item.qtyInCart;
        });
        setCartCount(count);
    }, [cart]);

    const handleAddToCart = () => {
        // Logic for adding a product to the cart
        // You can update the cart count here as well
    };
    const designImg = { "width": "10rem", "marginLeft": "3.5rem" };
    
    const decreaseQtyFromCart=(index,id)=>{
        const qtyInCart=cart.find((cartItem)=>cartItem.id===id).qtyInCart
        if(qtyInCart>1){
            dispatch(increaseQty(index,id));     
        }
        else{
            if(qtyInCart===1)
            {
                dispatch(increaseQty(index,id));    
                dispatch(deleteFromCart(index))
            }  
        }
    }


    const increaseQtyInCart = (index, id) => {
        const qtyInCart = cart.find(cartItem => cartItem.id === id).qtyInCart;
        if (products.find(cartItem => cartItem.id === id).qty > 0) {
            dispatch(decreaseQty(index, id));
        } else {
            alert("No more items left");
        }
    };

    const increaseQtyAfterDelete=(index,id)=>{
        const qtyInCart=cart.find((cartItem)=>cartItem.id===id).qtyInCart
        products.find((cartItem)=>cartItem.id===id).qtyInCart=0
        products.find((cartItem)=>cartItem.id===id).qty+=qtyInCart    
    }

    const checkIfReadyToPay=()=>{
      return    <Link to="/PaymentComponent" >Go to payment</Link>
    }
    // const [countItemsInCart, setCountItemsInCart]=useState(0)
    return(
        <>
                  <div style={{marginTop:"800px"}}>
                <Link to="/CartPage">
                    <img src={cartt} alt="cart-icon" style={{ width: "50px" }} />
                    {cartCount > 0 && <span style={{ marginLeft: "5px" }}>{cartCount}</span>}
                </Link>
            </div>
            <div >
      <table class="table table-striped">
      <tr><td>name</td><td>image</td><td>price</td><td>qty</td></tr>
            {cart ? cart.map((item, index) => (
                <>
                
                    <br></br>
                        <tr onChange={checkIfReadyToPay()}><td><p style={{color:"black"}}>{item.name}</p></td>
                            <td><img class="card-img-top" src={item.image} style={designImg}></img></td>
                            <td><p style={{color:"black"}}> {item.price}$</p></td>
                            <td><p style={{color:"black"}}><button onClick={function(event){decreaseQtyFromCart(index,item.id)}}>-</button>{item.qtyInCart}<button onClick={function(event){increaseQtyInCart(index,item.id)}}>+</button></p></td>
                            <td><button onClick={function(event){dispatch(deleteFromCart(index));increaseQtyAfterDelete(index,item.id)}}><img src={garbage} style={{width:"100px"}}></img></button></td>
                        </tr>                       
               </>
            )) : <div>cart is null</div>}
       </table>
       </div>
       <Link to="/PaymentComponent" style={{ textDecoration: 'none', backgroundColor: '#007bff', color: 'white', padding: '10px 20px', borderRadius: '5px', marginTop: '20px', display: 'inline-block' }}>Go to payment</Link>

{/*        
       <h5>{cart.count}</h5>
       {cart ? cart.map((item.qtyInCart) => (
            countItemsInCart+=item.qtyInCart
       ))} */}
    {/* {cart.map(function(item, index) {   
        debugger
        setCountItemsInCart(countItemsInCart+1)
    //        return (
    //     <div>
    //       Applicant name:  {item.qtyInCart}
    //     </div>
    //   )
    })}  */}
        </>
    )
}

