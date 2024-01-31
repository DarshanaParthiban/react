import React,{useState,useCallback} from "react";
const Callback=()=>{
    const [count,setCount]=useState(0);
    const list=[10,20,30,40,50]
    const list1=[...list,60,70,80]
    const handlingCallbackFunction=useCallback(()=>{
        console.log(`count:${count}`)

    },[count])
    

    return(
        <div>
            <h1>This is call back example</h1>
            <h2>Count:{count}</h2>
            <button onClick={()=>setCount(count+1)}>Add one</button>
            <button onClick={handlingCallbackFunction}>CallbackCount</button>
            <ul type="None">
                {list1.map((val,index)=>(
                <li key={index}>{val}</li>
                ))}
            
            </ul>
        </div>
    )
    



}
export default Callback;