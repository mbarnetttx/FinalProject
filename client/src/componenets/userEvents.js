import React from "react";

function userEvents() {
    return (
        
      <nav class="panel box">
        <p class="panel-heading">
          Your Events
        </p>
        <div class="panel-block">
        </div>
        <p class="panel-tabs">
          <a href="/all" class="is-active">All</a>
          <a href="/ended">Ended</a>
        </p>
        <div class="panel-block is-active">
          <span class="panel-icon">
            <i class="fas fa-book" aria-hidden="true"></i>
          </span>
          bulma
        </div>
        <div class="panel-block">
          <span class="panel-icon">
            <i class="fas fa-book" aria-hidden="true"></i>
          </span>
          marksheet
        </div>
        <div class="panel-block">
          <span class="panel-icon">
            <i class="fas fa-book" aria-hidden="true"></i>
          </span>
          minireset.css
        </div>
        <div class="panel-block">
          <span class="panel-icon">
            <i class="fas fa-book" aria-hidden="true"></i>
          </span>
          jgthms.github.io
        </div>
     
      </nav>


    );
}

export default userEvents;