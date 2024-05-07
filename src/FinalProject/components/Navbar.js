import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import AboutComponent from "./AboutComponent";


import ShopComponent from "./ShopComponent";
import CartComponent from "./CartComponent";
import Paragraph1 from "./paragraph1";
import Paragraph2 from "./paragraph2";
import Paragraph3 from "./paragraph3";
import PaymentComponent from "./PaymentComponent";



export default function Navbar() {
    return (
        <>
         <div id="a">
                <Link to="/AboutComponent" id="b">About</Link>
                <div className="navbar"style={{"font-family": "Alex Brush;"}}>
            <h1 style={{"font-family": "Alex Brush;"}}>Jewles By Shoshi&Yoceved</h1>
            {/* כאן תוכנו של תפריט הניווט */}
        </div>
                <Link to="/ShopComponent">Shop</Link>
                </div>

                <Routes>
                    <Route path="/ShopComponent" element={<ShopComponent></ShopComponent>} />
                    <Route path="/CartComponent" element={<CartComponent></CartComponent>}/>
                    <Route path="/PaymentComponent" element={<PaymentComponent></PaymentComponent>}/>
                    <Route path="/AboutComponent" element={<AboutComponent><Paragraph1></Paragraph1><Paragraph2></Paragraph2><Paragraph3></Paragraph3></AboutComponent>} />
                </Routes>
        </>
    )
}