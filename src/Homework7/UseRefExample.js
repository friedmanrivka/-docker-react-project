import { useRef } from "react"
export default function () {
const inputRef=useRef()
const getInput=()=>{
    console.log(inputRef.current.value)
    if(inputRef.current.value=="Shoshi"){
        inputRef.current.style.backgroundColor="green"
}
else{   
    inputRef.current.style.backgroundColor="white"
}
}
return (
    <>
<input ref={inputRef} onChange={(e)=>getInput()} placeholder="name"></input>
    </>
)
}