import React, { Component } from "react";
import '../App.css';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import API from '../utils/api';

class EventCalendar extends Component {
    state = {
        donations: [],
        eventData: [],
        
    }

    cleanData = (data) => {

        let tempObject = {};
        let tempArray = [];

        data.forEach(event => {
            tempObject = { title: event.eventName, date: event.eventDate, url: "/donations/" + event._id }
            tempArray.push(tempObject);

        })

        this.setState({ eventData: tempArray })
    }

    componentDidMount() {
        console.log(window.location.pathname)
        API.allDonations()
            .then(res =>
                this.setState({ donations: res.data }, () => {
                    this.cleanData(this.state.donations)
                }),
            )

            .catch(err => console.log(err))
    }





    render() {

        return (
            <FullCalendar
                defaultView="dayGridMonth"
                plugins={[dayGridPlugin]}
                events={this.state.eventData}
                eventClick={this.handleDateClick} />
        )
    }

    handleDateClick = (arg) => { // bind with an arrow function
        alert(arg.target.url)
    }



}





export default EventCalendar;


