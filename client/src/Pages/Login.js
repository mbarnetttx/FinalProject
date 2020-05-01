import React from 'react'

function Login() {
    return (
        <form action="/Login" method="POST">
            <h1>Login</h1>

        <label for="email">Email</label>
        <input 
            type="email" 
            id="email" 
            name="email"
            required/>

        <label for="password">Password</label>
        <input 
            type="password" 
            id="password" 
            name="password"
            required/>

        <button type="submit">Login</button>
        <a href="/Register">Register</a>
        </form>
    )
}

export default Login;
