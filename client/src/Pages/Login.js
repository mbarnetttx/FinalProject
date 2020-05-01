import React from 'react'

function login() {
    return (
        <form action="/login" method="POST">
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
        <a href="/register">Register</a>
        </form>
    )
}

export default login
