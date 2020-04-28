import React, { Component } from "react";
import UserEvents from "../componenets/userEvents";
import UserInfo from '../componenets/userInfo';
import Jumbo from '../componenets/loggedInImage';
import Form from '../componenets/Form';

class LoggedIn extends Component {
    render() {
        return (
           <div>
               <Jumbo />
            <div className="container">
                <Form />
                <div>
                    <div>
                        <UserEvents />
                    </div>
                    <div >
                    <UserInfo />
                    </div>
                </div>

                <article class="message is-info">
                    <div class="message-header">
                        <p>Tips for Donation Events</p>
                    </div>
                    <div class="message-body">
                        <p><strong>1.</strong>As a donor it is important to take care of your privacy. Make sure you do not give private information that 
                        you do not want people to know. </p>
                        <br/>
                        <p><strong>2.</strong>People with food allergies or celiac disease often can’t find donated food they can eat. If you donate gluten-free food, mark it GLUTEN-FREE in large print. 
                        Do the same for allergen-free items. Clear labeling will help get the right food to the right clients.</p>
                        <br/>
                        <p><strong>3.</strong>Try to include at least one item you’d choose as a treat for your kids. Someone else’s kids will love you.</p>
                    </div>
                </article>
            </div>
            </div> 
        )
    }
}

export default LoggedIn;