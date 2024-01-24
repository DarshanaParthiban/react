import React from "react";
import TestComp from "../functional component/testcomponent";
import TestClass from "./testclasscomponent";

class Login extends React.Component{
    render()
    {
        return(
            <div>
                <TestComp/>
                <TestClass/>
                
                <h1>Class Component Example</h1>
            </div>
        );
    }
}
export default Login;