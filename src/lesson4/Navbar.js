import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import About from "./About";

export default function Navbar() {
    return (
        <>
            <BrowserRouter>
                <Link to="/home">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/about">About</Link>

                <Routes>
                    <Route path="/login" element={<Login></Login>} />
                    <Route path="/home" element={<Home></Home>} />
                    <Route path="/about" element={<About></About>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}