import React from "react";
import Jumbotron from '../components/Jumbotron';

function userEvents() {
    return (
    <div> 
        <Jumbotron />
    <div className="container">
     <section className="hero heroDetails">
          <h1> Event Details</h1>
      </section>   
        <br/>
      <nav className="panel box">
            <article class="message is-dark">
                <div class="message-header">
                    <p>Dark</p>
                </div>
                <div class="message-body">
                </div>
            </article>
     
      </nav>
      
    </div>
    </div>   
    );
}

export default userEvents;
