import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/actions/CartActions";
import { decreaseQty } from "../redux/actions/ProductActions";
import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import sal from "../redux/images/תמונה1.png"

export default function ShopComponent() {

    const products = useSelector((state)=>state.products);
    const cart = useSelector((state)=>state.cart);
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const card = {"backgroundColor": "#ffacdf",width: "300px", "marginRight": "auto", "marginLeft": "auto", "marginBottom": "5px", "borderColor": "gray", "marginTop": "1.5rem" ,height:"450px" };

    const addItemToCart=(item, index,id)=>{
        const isFound=cart.find((cartItem)=>cartItem.id===item.id)
        if(!isFound){
            dispatch(decreaseQty(index,item.id));    
            dispatch(addToCart(item))    
        }
        else{
            if(products[index].qty>0){         
            dispatch(decreaseQty(index,item.id));
            }
            else{
                alert("no more left")
                console.log("no more left")
            }         
        }
    }
  
    return(
        <>
        <br></br>
        <div>
        <button onClick={()=>navigate("/CartComponent")} className ="cart-button" style={{marginRight:"1400px",marginBottom:"350px"}}><img src={sal} style={{width:"70px"}}></img></button>
        <center>
            <div  style={{display:"flex",width: "1850px",height:"550px",flexWrap:"wrap",marginTop:"50px"}}>
            {products ? products.map((item, index) => (
                <>
                    <div class="card" style={card}>
                        <center>
                    <img class="card-img-top" src={item.image} alt="Card image cap" style={{width:"200px",height:"200px"}}></img>
                    </center>
                    <div class="card-body" >
                        <p class="card-text" style={{color:"black",fontSize:"15px"}}>{item.name}</p>
                        <p class="card-text" style={{color:"black",fontSize:"15px"}}>price: {item.price}$</p>
                        <p class="card-text" style={{color:"black",fontSize:"15px"}}>description: {item.description}</p>
                        {/* <p class="card-text" style={{color:"black",fontSize:"15px"}}>qty: {item.qty}</p> */}
                        {/* <p class="card-text" style={{color:"black",fontSize:"15px"}}>qtyinCard: {item.qtyInCart}</p> */}
                        <center>
                       <button onClick={function(event){addItemToCart(item,index,item.id)}}>Add to cart</button>
                       
                       </center>
                  </div> 
              </div>
                </>
            )) : <div>Products is null</div>}
            </div>
            
            </center>
            </div>
        </>
    )
}


  
  
   