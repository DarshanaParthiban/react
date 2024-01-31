// import "../../css/color.css"
// import { useReducer } from "react";
// const value={count:0}
// function countFunction(state,action){
//     switch(action.type){
//         case "sub":
//             return {count:state.count-1} 
//        case "add":
//             return {count:state.count+1}
//         case "reset":
//             return {count:value.count}
//         default:
//             return{count:value.count}
//         }
// }
// const Login=()=>{
//     const [countValue,updateCount]=useReducer(countFunction,value);
//     return(
//         <div>
//             <h1>This Page is meant for your details.</h1>
//             <h2>Count:{countValue.count}</h2>
//             <button onClick={()=>updateCount({type:"sub"})}>Subtract</button>
//             <button onClick={()=>updateCount({type:"add"})}>Add</button>
//             <button onClick={()=>updateCount({type:"reset"})}>Reset</button>
//         </div>
//     )
// }
// export default Login

import React from "react";
import "../../css/Login.css"
const Signin=()=>{
    return(
        <div classname="one">
            <div className="two">
            <form action="">
                <h1>Sign in</h1>
                {/* <label>Username: </label> */}
                <input type="text"id="name" placeholder="username"></input><br></br><br></br>
                {/* <label>Email: </label> */}
                <input type="email"id="email" placeholder="email"></input><br></br><br></br>
                {/* <label>Password: </label> */}
                <input type="password"id="password" placeholder="password"></input><br></br><br></br>
                {/* <label>ConfrimPassword: </label> */}
                <input type="password"id="password" placeholder="password"></input><br></br><br></br>
                <button className="Submit">Sign in</button>
                
                
            </form>
            </div>
            
        </div>
    )
}
export default Signin;