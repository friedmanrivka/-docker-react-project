import { useState } from "react"
import Component2 from "./component2"
import myimg from '../HomeWork4/images/dolls.jpg'
export default function Component1() {
    var [MyInput,setinput]=useState('');

    return (
        <>
        
            <input onChange={(e) => setinput(e.target.value)}></input>
            <br></br>
           <img src={myimg} style={{height: "30%"}}></img>
            <Component2 wasinput={MyInput} abc="hello"></Component2>
        </>
        )
}