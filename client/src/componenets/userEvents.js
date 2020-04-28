import React from "react";

function userEvents() {
    return (
        
      <nav className="panel box">
        <p className="panel-heading">
          Your Events
        </p>
        <div className="panel-block">
        </div>
        <p className="panel-tabs">
          <a href="/all" className="is-active">All</a>
          <a href="/ended">Ended</a>
        </p>
        <div className="panel-block is-active">
          <span className="panel-icon">
            <i className="fas fa-book" aria-hidden="true"></i>
          </span>
          bulma
        </div>
        <div className="panel-block">
          <span className="panel-icon">
            <i className="fas fa-book" aria-hidden="true"></i>
          </span>
          marksheet
        </div>
        <div className="panel-block">
          <span className="panel-icon">
            <i className="fas fa-book" aria-hidden="true"></i>
          </span>
          minireset.css
        </div>
        <div className="panel-block">
          <span className="panel-icon">
            <i className="fas fa-book" aria-hidden="true"></i>
          </span>
          jgthms.github.io
        </div>
     
      </nav>


    );
}

export default userEvents;