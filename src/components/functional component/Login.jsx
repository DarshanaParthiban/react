import "../../css/Login.css"


const Login = () => {

    return (
        <div className="Ten">
            <h4>Login</h4>
            <input type="text" placeholder="Email"></input> <br/> <br/>
            <input type="text" placeholder="Password"></input><br/><br/>
            <button className="Submit"><a href="Login">Login</a></button> <br/>

        </div>
    )
}

export default Login;