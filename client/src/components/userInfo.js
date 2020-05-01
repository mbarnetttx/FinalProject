import React from "react";
import { Link } from "react-router-dom";

function userInfo() {
    return (
        

        <div className="card">
            <figure className=" is-1by1">
            <img  className="is-rounded avatar" src="https://gbci-edge.s3.amazonaws.com/edge-online/s3fs-public/avatar-green.png" alt="avatar"/>
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

            <div className="navbar-item">
				<div className="buttons">
					<div className="button is-success">
					<Link to="/logout" className={window.location.pathname === "/logout" ? "nav-link active" : "nav-link"}
					>Logout </Link>
         			</div>
					</div>
			</div>
            
        </div>
   
    );
}

export default userInfo;