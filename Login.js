import React, { useState } from "react";

const Login = ()=> {
    const [ email, setEmail ] = React.useState('');
    const [ password, setPassword ] = React.useState('');
    const handleLogin = ()=>{
        console.log(email, password);
    }
    return (
        <div className="login">
            <input className="inputBox" type="email" placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)} value={email} />
            <input className="inputBox" type="password" placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)} value={password} />
            <button onClick={handleLogin} className="btn" type="button">Login</button>
        </div>
    )
}

export default Login;