import React, { useState } from "react"


export default function SliderPictures(props){
    const [index, setIndex]=useState(0)
    const countImages=React.Children.count(props.children)
    const imgArr=React.Children.toArray(props.children)
    var currentImg=React.cloneElement(imgArr[index])
    const getNext=()=>{
        if(index<=countImages-1)
        {
            setIndex(index+1)
            currentImg=React.cloneElement(imgArr[index])
        }
            
    }
    const getPrevious=()=>{
        if(index>=1)
        {
             setIndex(index-1)
            currentImg=React.cloneElement(imgArr[index])
        }
           
    }
    return(
        <>
        {/* <h1>hi</h1> */}
        {/* <div></div> */}
        <pre><button disabled={index == 0} onClick={()=> getPrevious()}>&lt;</button> {currentImg}<button disabled={index == countImages-1} onClick={()=> getNext()}>&gt;</button></pre>
        </>
    )
}