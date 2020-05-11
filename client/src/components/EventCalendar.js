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
            modalInfo: {
                title: "",
                amount: "",
                description: "",
            },
        };

      toggle = () => {
        this.setState({ modal: !this.state.modal });
      };
      handleEventClick = ({ event, el }) => {
   
          
          var _amount = null;
          var _description = null;
          var _date = null;

          for(var i = 0; i < this.state.eventData.length; i++) {

              if(parseInt(this.state.eventData[i].id) === parseInt(event.id)) {
           
                  _amount = this.state.eventData[i].amount;
                  _date = this.state.eventData[i].date;
                  _description = this.state.eventData[i].description;
              }
          }
          console.log("Event ID: " + event.id);

          this.setState({
            modalInfo: {
                title: event.title,
                date: _date,
                amount: _amount,
                description: _description, 
                id: event.id
            }
          })
        this.toggle();
      };

      cleanData = (data) => {
        console.log(data);
        let tempObject = {};
        let tempArray = [];

        var _id = 0;
        data.forEach(event => {
            tempObject = { 
                title: event.eventName, 
                date: event.eventDate, 
                amount: event.lunchNumber,
                description: event.eventDescription,
                id: _id
            };
            _id++;
            tempArray.push(tempObject);

        })
        console.log(tempArray);

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
                    className="message-header modalHeader"
                    toggle={this.toggle}>
                   {this.state.modalInfo.title}
                </ModalHeader>
                <ModalBody
                    className="message-body box"
                >
                 <h2>Event Info: {this.state.modalInfo.description}</h2>
                 <br/>
                 <h2># Available: {this.state.modalInfo.amount}</h2>
                 <h2>{this.state.modalInfo.date}</h2>
                </ModalBody>
            </Modal>
        </div>
        )
    }


}





export default EventCalendar;


