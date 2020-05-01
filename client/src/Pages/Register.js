import React from 'react';
// import ReactDOM from 'react-dom';
import Jumbotron from '../components/Jumbotron';

function Register() {
    return (
        <div>
        <Jumbotron/>
        <br/>
        <div className="container box">
        <form action="/register" method="POST">
            <h1 className="title">Register</h1>
                <div>
                    <label className="name">Name</label>
                        <input 
                            type="text" 
                            id="name" 
                            name="name"
                            required />
                </div>

                <div>
                    <label className="email">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email"
                            required />
                </div>

                <div>
                    <label className="password">Password</label>
                        <input 
                            type="password" 
                            id="password" 
                            name="password"
                            required />
                </div>

                <div>
                    <button className="button is-success">Register</button>
                    <button className="button is-success">  <a href="/login">Login</a> </button>
                </div>
            </form>

            </div>
        </div>
    )
}

export default Register;