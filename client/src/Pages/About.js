import React, { Component } from "react";


class LoggedIn extends Component {
    render() {
        return (
        <div>
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
                        Neighbor 2 Neighbor: A web application that allows users to upload events if they have goods to donate to their community such as snacks, prepared meals, canned goods etc. 
                        The user is also allowed to post when they will be available and other users to post if they will be going or not.
                        </div>
            </article>

            <article className="box">{/*About Us Box*/}
                    <p className="header">Benefits</p>
                        <div className="message-body">
                            This web application is beneficial to those in need, allowing them to have easier access to those who are willing to donate.
                            It is also beneficial to the donor as they are allowed an easier way to display their donation event. It is simple to use whether it's 
                            on a desktop or mobil phone. Our communty will become closer together.
                        </div>
            </article>

            <div className="box">{/*Our Team*/}
                <p className="header">Our Team</p>
            <div className="columns">
                <div className="column">
                    <div className="card">{/*Meredith*/}
                        <div className="card-image">
                            <figure>
                            <img className="teamAvatar" src="https://files.slack.com/files-pri/TQ9GDKFS8-F0132M994P8/20626692_10156254175555021_1198585073724106721_o__2_.jpg" alt="Placeholderimage"/>
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
                            <img className="teamAvatar" src="https://avatars1.githubusercontent.com/u/57296464?s=400&u=0ed00ef4ccc0685cc36411eef2d2aeb298da07c9&v=4" alt="Placeholderimage"/>
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
                            <img className="teamAvatar" src="https://media-exp1.licdn.com/dms/image/C4E03AQFeF13WvXXzTw/profile-displayphoto-shrink_200_200/0?e=1593648000&v=beta&t=CFehRitT6HqPSxPDtvhQ8r7B6SN-_v9PhXE3QstRQrg" alt="Placeholderimage"/>
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