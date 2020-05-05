import React, { Component } from "react";
import Jumbotron from '../components/Jumbotron';
import EventCalendar from "../components/EventCalendar";


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