import React, { Component } from "react";
import userEvents from "../componenets/userEvents";

class LoggedIn extends Component {
    render() {
        return (
            <div className="container">
                
                <userEvents />
            </div>
        )
    }
}

export default LoggedIn;