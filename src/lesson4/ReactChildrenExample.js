import React, { useState } from "react"

export default function ReactChildrenExample(props) {

    const chilrenSize = React.Children.count(props.children)

    const childernArr =React.Children.toArray(props.children)

    const [index, setIndex] = useState(0)
    const singleChild = React.cloneElement(childernArr[index])
    

    const nextImage = () =>{
        
        if(index < chilrenSize){
            const nextIndex = index +1
            setIndex(nextIndex)
            console.log(nextIndex)
        }
    }

    return (

        <>
            <h1>React children</h1>
            <div>{singleChild}</div>
            <pre><button disabled={index == chilrenSize}>&lt;</button> <button onClick={()=> nextImage()}>&gt;</button> </pre>
           
        </>
    )

}
