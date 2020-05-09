import React from 'react'

function login() {
    return (
<div class="container">
        <article class="message is-large is-light loginForm">
                <form action="/login" method="POST" >
                    <div class="field">
                    <div class="message-header">
                        <h1 className="title">Login</h1>
                    </div>
                    </div>
                    <div class="field">
                        <label for="email">Email</label>
                        <input className="input"
                            type="email" 
                            id="email" 
                            name="email"
                            required/>
                    </div>

                    <div class="field">
                        <label for="password">Password</label>
                        <input className="input"
                            type="password" 
                            id="password" 
                            name="password"
                            required/>
                    </div>
                    <div class="field is-grouped">
                        <button type="submit" class="button is-success">Login</button>
                        <button class="button is-success is-light"><a href="/register">Register</a></button>
                    </div>
                </form>
        </article>
                <section className="hero heroImg"/>
        </div>
    ) 
}

export default login
