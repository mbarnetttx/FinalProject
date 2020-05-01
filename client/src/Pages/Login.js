import React from 'react';
import Jumbotron from '../components/Jumbotron';

function login() {
    return (
        <div>
            <Jumbotron />
            <br/>
        <div className="container">
            <div className="message is-light loginForm">
            <form action="/login" method="POST" className="formLog">
                <div className="message-header is-success">
                <h1>Login</h1>
                </div>
            
            <section  className="formLog">
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
            </section>
            <section>
            <button type="submit" className="button is-success">Login</button>
            <a href="/register" className="button is-success" >Register</a>
            </section>
            </form>
            </div>
            <section className="hero heroImg"/>
        </div>
        </div>
    )
}

export default login
