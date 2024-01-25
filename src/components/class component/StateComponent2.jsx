import React from "react";
class StateComponent2 extends React.Component{
    constructor(){
        super()
        this.state={
            location:"India",
            city:"Tiruppur"
        }

    }

render(){
    return(
        <div>
            <h2>This is statecomponent</h2>
            <h2>I am form {this.state.location} and living in {this.state.city}</h2>
        </div>
    )
}
}

export default StateComponent2;
