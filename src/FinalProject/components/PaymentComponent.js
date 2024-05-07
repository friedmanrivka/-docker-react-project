import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux"


export default function PaymentComponent()
{
    const cart = useSelector((state)=>state.cart);
    const [alertDisplayed, setAlertDisplayed] = useState(false);

    useEffect(() => {
        if (!alertDisplayed) {
            alert("Are you sure you are done shopping??????");
            setAlertDisplayed(true);
        }
    }, []); 
    if (!cart || cart.length === 0) {
      return <div>Your cart is empty!</div>;
  }



    const designImg = {"width": "10rem", "marginLeft": "3.5rem" };
    return(
        <>
        <table class="table table-striped" style={{marginTop:"800px"}}>
      <tr><td>name</td><td>image</td><td>qty</td><td>total price</td></tr>
            {cart ? cart.map((item, index) => (
                <>
                    <br></br>
                        <tr><td><p style={{color:"black"}}>{item.name}</p></td>
                            <td><img class="card-img-top" src={item.image}style={designImg}></img></td>
                            <td><p style={{color:"black"}} >{item.qtyInCart} </p></td>
                            <td><p style={{color:"black"}}> {(item.price)*item.qtyInCart}$</p></td>
                        </tr>                       
               </>
            )) : <div>cart is null</div>}
       </table>      
        <button>Pay now</button>
        </>
    )
}