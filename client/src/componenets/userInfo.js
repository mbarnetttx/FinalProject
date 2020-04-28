import React from "react";

function userInfo() {
    return (
        

        <div className="card">
            <figure className=" is-1by1">
            <img  className="is-rounded avatar" src="https://bulma.io/images/placeholders/128x128.png" alt="avatar"/>
            </figure>
            <header className="card-header">
                <p className="card-header-title userName">
                Username
                </p>
            </header>
            <div className="card-content">
                <div className="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                
                <br/>
                </div>
            </div>
            <footer className="card-footer">
                <a href="/edit" className="card-footer-item">Edit</a>
            </footer>
        </div>
   
    );
}

export default userInfo;