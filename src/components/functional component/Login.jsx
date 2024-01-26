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
const Login=()=>{
    return(
        <div classname="wrapper">
            <form action="">
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder="Username" required/><br></br><br></br>
                    <input type="password" placeholder="Password" required/>
                </div>
                <div className="remember-forgot">
                    <label><input type="checkbox" />Remember me</label><br></br>
                    <a href="#">Forgot Password?</a><br></br><br></br>
                    </div>
                    <button type="submit">Login</button><br></br>
                    <div className="register-link">
                        <p>Don't have an account?<a href="#">Register</a></p>
                    </div>
                
            </form>
            
        </div>
    )
}
export default Login;