import React, { Component } from "react";
import '../App.css';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import API from '../Utils/api';
import {Modal, ModalHeader, ModalBody} from "reactstrap";

class EventCalendar extends Component {

    state = {
            modal: false,
            donations: [],
            eventData: [],
            event: {
                title: ""
            },
            info:{
                amount: "testAmount",
                description: "test Description is gluten free. pickup avaiable."
            }
        };

      toggle = () => {
        this.setState({ modal: !this.state.modal });
      };
      handleEventClick = ({ event, el }) => {
        this.toggle();
        this.setState({ event });
      };

      cleanData = (data) => {

        let tempObject = {};
        let tempArray = [];

        data.forEach(event => {
            tempObject = { title: event.eventName, date: event.eventDate}
            tempArray.push(tempObject);

        })

        this.setState({ eventData: tempArray })
    }
    componentDidMount() {
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
          <div>
            <FullCalendar
                defaultView="dayGridMonth"
                plugins={[dayGridPlugin]}
                events={this.state.eventData}
                // eventClick={this.handleDateClick} 
                eventClick={this.handleEventClick}
                displayEventTime={false}
             />
             <Modal
                isOpen={this.state.modal}
                toggle={this.toggle}
                >
                <ModalHeader 
                    className="message-header"
                    toggle={this.toggle}>
                   {this.state.event.title}
                </ModalHeader>
                <ModalBody
                    className="message-body box"
                >
                 <h2>{this.state.info.description}</h2>
                 <h2>{this.state.info.amount}</h2>
                </ModalBody>
            </Modal>
        </div>
        )
    }

    // handleDateClick = (arg) => { // bind with an arrow function
    //     alert(arg.target.url)
    // }



}





export default EventCalendar;


