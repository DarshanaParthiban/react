import React from "react";
class StateComponent extends React.Component{
    constructor(){ //if we declare a variable by using var a=10 it will declare error so constructor is used
        super()
        this.state={
            
            name:"Darshu",
            course:"mern"

    }
    }
    Changestate=()=>{
        console.log("Kongu Engineering College")//use state when we come to hooks
    }
    render(){
        return(
            <div>
                <h1>This is state Component</h1>
                <h2>Hello,{this.state.name}<br></br> this is {this.state.course}</h2>
                <h3>Iam changing the state of the name {this.state.name} to {this.Changestate()}</h3>
                <button onClick={this.Changestate}> Click me to  change the state</button>

            </div>
        )
    }
}
export default StateComponent;