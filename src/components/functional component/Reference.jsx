import React,{useState,useRef,useEffect} from "react"
const Reference =()=>{
    const [batchSize,updateBatchSize]=useState("")
        const prevBatch =useRef(batchSize)
        useEffect(()=>{
            prevBatch.current=batchSize

        },[batchSize])
    return(
        <div>
        <h1>Example of useRef</h1>
        <input type="number" onChange={(event)=>{updateBatchSize(event.target.value)}}/>
        <h2> The Current batch size is {batchSize} and it's previous batch size is {prevBatch.current}</h2>
        </div>
    )

}
export default Reference;
