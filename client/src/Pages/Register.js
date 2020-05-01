import React from 'react';
// import ReactDOM from 'react-dom';
import Jumbotron from '../components/Jumbotron';

function Register() {
    return (
        <div>
        <Jumbotron/>
        <br/>
        <div className="container">
        <article className="message is-large is-light loginForm2">
             <form action="/register" method="POST">
                 <div className="field">
                    <div className="message-header">
                        <h1 className="title">Register</h1>  
                    </div>
                 </div>
                 <div className="field">
                    <label className="name">Name</label>
                         <input className="input"
                            type="text" 
                            id="name" 
                            name="name"
                        required />
                </div>
                 <div className="field">
                    <label className="email">Email</label>
                         <input className="input"
                            type="email" 
                            id="email" 
                            name="email"
                         required />
                </div>
                <div className="field">
                    <label className="password">Password</label>
                        <input class="input"
                            type="password" 
                            id="password" 
                            name="password"
                        required />
                </div>
                <div className="field is-grouped">
                    <button className="button is-light">Register</button>
                    <button className="button is-success">  <a href="/login">Login</a> </button>
                    </div>
                </form>
            </article>
                <section className="hero heroImg2"/>
            </div>
        </div>
    )
}

export default Register;