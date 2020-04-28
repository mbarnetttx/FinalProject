import React, { Component } from "react";
import Jumbotron from '../componenets/Jumbotron';

class LoggedIn extends Component {
    render() {
        return (
        <div>
            <Jumbotron />
            <br></br><br></br>
            
            <div className="container">

            <section class="hero hero2 is-medium ">{/*Image box*/}
                <div class="hero-body">
                    <div class="container">
                    <h1 class="title">
                        Our Website
                    </h1>
                    <h2 class="subtitle">
                        Community helping each other
                    </h2>
                    </div>
                </div>
            </section>

            <article class="box">{/*About Us Box*/}
                    <p className="header">About Neighbor 2 Neighbor</p>
                <div class="message-body">
                Neighbor 2 Neighbor: A web application that allows users to upload events if they have goods to donate to their community such as food, medical supplies, pet supplies etc. 
                The user is also allowed to post when they will be available and other users to post if they will be going or not.
                </div>
            </article>

            <div class="box">{/*TEAM*/}
                    <p className="header">Our Team</p>
                <div class="columns">
                    <div class="card column"> {/*meredith*/}
                    <div class="card-image">
                            <figure class="image is-128x128">
                                <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png"/>
                            </figure>
                            <div class="media-content">
                                <p class="title is-4">Meredith Barnett</p>
                                <p class="subtitle is-6">@johnsmith</p>
                            </div>
                            <div class="content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Phasellus nec iaculis mauris. 
                            </div>
                            </div>   
                    </div>  
                    <div class="card column"> {/*Tanisha*/}
                            <div class="card-image">
                            <figure class="image is-128x128">
                                <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png"/>
                            </figure>
                            <div class="media-content">
                                <p class="title is-4">Tanisha Howell</p>
                                <p class="subtitle is-6">@johnsmith</p>
                            </div>
                            <div class="content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Phasellus nec iaculis mauris. 
                            </div>
                            </div>   
                    </div>  
                    <div class="card column"> {/*Yensey*/}
                    <div class="card-image">
                            <figure class="image is-128x128">
                                <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png"/>
                            </figure>
                            <div class="media-content">
                                <p class="title is-4">Yensey Murillo</p>
                                <p class="subtitle is-6">@_yensey</p>
                            </div>
                            <div class="content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Phasellus nec iaculis mauris. 
                            </div>
                            </div>   
                    </div>  
                </div>
             </div>
            </div>

        </div>
            

            
       
        )
    }
}

export default LoggedIn;