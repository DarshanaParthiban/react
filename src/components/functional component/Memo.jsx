import React,{useState,useMemo} from "react"
const Memo=()=>{
    const [Number,updateNumber]=useState(0)
    const [dark,UpdateTheme]=useState(false)
    const doubleNumber=useMemo(()=>{
        return doubleNumberSlow(Number)},[Number]);
    function doubleNumberSlow(num){
        console.log("Hii")
        for(let i=0;i<=1000000;i++){}
      return num*2
}   
const theme={
    backgroundColor:dark?"black":"white",
    color:dark?"white":"black"
}
    return(
        <div>
            <h1>Dangerous hook</h1>
            <input type="number" value={Number} onChange={(event)=>updateNumber(event.target.value)}/>
            <button onClick={()=>{UpdateTheme(dark=>!dark)}}>Change Theme</button>
            <h2 style={theme}>The doubled number is {doubleNumber}</h2>
        </div>
    )
}
export default Memo;