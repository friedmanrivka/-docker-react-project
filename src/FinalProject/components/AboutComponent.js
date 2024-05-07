
import React, { useState } from "react"


export default function AboutComponent(props){
    const [index, setIndex]=useState(0)
    const countParagraphs=React.Children.count(props.children)
    const parArr=React.Children.toArray(props.children)
    var currentPar=React.cloneElement(parArr[index])
    const getNext=()=>{
        if(index<=countParagraphs-1)
        {
            setIndex(index+1)
            currentPar=React.cloneElement(parArr[index])
        }
    }
    const getPrevious=()=>{
        if(index>=1)
        {
            setIndex(index-1)
            currentPar=React.cloneElement(parArr[index])
        }
    }
    return(
        <>
        <pre> {currentPar}<button disabled={index == 0} onClick={()=> getPrevious()}>&lt;</button><button disabled={index == countParagraphs-1} onClick={()=> getNext()}>&gt;</button></pre>
        </>
    )
}