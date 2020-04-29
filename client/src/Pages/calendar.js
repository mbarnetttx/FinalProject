import React, { Component } from "react";
import Jumbotron from '../componenets/Jumbotron';
import EventCalendar from "../componenets/EventCalendar";

class Calendar extends Component {
    render() {
        return (
            <div>
            <Jumbotron />
            <br/>
            <div className="container">
                <div className="box">
                <EventCalendar />
                </div>
            </div>
            </div>

        )
    }
}

export default Calendar;