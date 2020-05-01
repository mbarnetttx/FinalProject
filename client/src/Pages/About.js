import React, { Component } from "react";
import Jumbotron from '../components/Jumbotron';

class LoggedIn extends Component {
    render() {
        return (
        <div>
            <Jumbotron />
            <br></br><br></br>
            
            <div className="container">

            <section className="hero hero2 is-medium ">{/*Image box*/}
                <div className="hero-body">
                    <div className="container">
                    <h1 className="title title2">
                        Our Website
                    </h1>
                    <h2 className="subtitle">
                        Community helping each other
                    </h2>
                    </div>
                </div>
            </section>
          
            <article className="box">{/*About Us Box*/}
                    <p className="header">About Neighbor 2 Neighbor</p>
                        <div className="message-body">
                        Neighbor 2 Neighbor: A web application that allows users to upload events if they have goods to donate to their community such as food, medical supplies, pet supplies etc. 
                        The user is also allowed to post when they will be available and other users to post if they will be going or not.
                        </div>
            </article>

            <article className="box">{/*About Us Box*/}
                    <p className="header">Benefits</p>
                        <div className="message-body">
                        Neighbor 2 Neighbor: A web application that allows users to upload events if they have goods to donate to their community such as food, medical supplies, pet supplies etc. 
                        The user is also allowed to post when they will be available and other users to post if they will be going or not.
                        </div>
            </article>

            <div className="box">{/*Our Team*/}
                <p className="header">Our Team</p>
            <div className="columns">
                <div className="column">
                    <div className="card">{/*Meredith*/}
                        <div className="card-image">
                            <figure>
                            <img className="teamAvatar" src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholderimage"/>
                            </figure>
                        </div>
                        <div className="card-content">
                            <div className="media">
                            <div className="media-content">
                            <p className="title is-4">Meredith Barnett</p>
                            <p className="subtitle is-6">@johnsmith</p>
                            </div>
                        </div>
                            <div className="content">
                            Full-Stack Web Developer
                            </div>
                        </div>
                    </div>
                </div>

                <div className="column">
                <div className="card">{/*Tanisha*/}
                        <div className="card-image">
                            <figure>
                            <img className="teamAvatar" src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholderimage"/>
                            </figure>
                        </div>
                        <div className="card-content">
                            <div className="media">
                            <div className="media-content">
                            <p className="title is-4">Tanisha Howell</p>
                            <p className="subtitle is-6">@johnsmith</p>
                            </div>
                        </div>
                            <div className="content">
                            Full-Stack Web Developer
                            </div>
                        </div>
                    </div>
                </div>

                <div className="column">
                <div className="card">{/*Yensey*/}
                        <div className="card-image">
                            <figure >
                            <img className="teamAvatar" src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholderimage"/>
                            </figure>
                        </div>
                        <div className="card-content">
                            <div className="media">
                            <div className="media-content">
                            <p className="title is-4">Yensey Murillo</p>
                            <p className="subtitle is-6">@_yensey</p>
                            </div>
                        </div>
                            <div className="content">
                            Full-Stack Web Developer
                            </div>
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