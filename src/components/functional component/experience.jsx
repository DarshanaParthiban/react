import "../../css/color.css"
import { useState } from "react"
import { useEffect } from "react"
const Experience=()=>{
    const [tabName,setTabName]=useState("comments")
    const updateTabName=()=>{
        setTabName("posts");
    }
    
    const updateTabName1=()=>{
        setTabName("comments");
    }
    
    const updateTabName2=()=>{
         setTabName("todos");
}
    useEffect(()=>{
        console.log(`"https://jsonplaceholder.typicode.com/${tabName}"`)
       fetch(`'https://jsonplaceholder.typicode.com/${tabName}'`)
      .then(response => response.json())
      .then(json => console.log(json))
         
},[tabName])
    return(
        <div>
            <h1>{tabName}</h1>
            <button onClick={updateTabName}>Click if you get cold</button>
            <button onClick={updateTabName1}>Click if you get fever</button>
            <button onClick={updateTabName2}>Click if you get cough</button>
        </div>
    )
}
export default Experience;