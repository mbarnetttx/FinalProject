import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import API from '../utils/api'

class Form2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            eventName: "",
            eventDescription: "",
            eventDate: "",
            lunchNumber: ""
        };
    }
    mySubmitHandler = (event) => {
        event.preventDefault();

        let eventName = this.state.eventName;
        if (!eventName) {
            alert("You must enter an event name!");
        }

        let eventDescription = this.state.eventDescription;
        if (!eventDescription) {
            alert("You must enter an Event Description!")
        }

        let eventDate = this.state.eventDate;
        if (!eventDate) {
            alert("You must enter an eventName!")
        }

        let lunchNumber = this.state.lunchNumber;
        if (!lunchNumber) {
            alert("You must enter how many items you will have available!")
        }

        var saveObject = [{
            eventName: eventName,
            eventDate: eventDate,
            eventDescription: eventDescription,
            lunchNumber: lunchNumber
        }];

        API.saveDonations(saveObject)
        .then(function(responseFromBackend) {
            console.log(responseFromBackend);
        })
        .catch(function(error) {
            console.log("There was an error!: " + error);
        });

    }

    // +


    render() {
        return (
            <div className="box">  
            <Form className="formLogin">
                <Form.Group controlId="eventName" className="formGroup">
                    <Form.Label>Event Name</Form.Label>
                    <Form.Control className="input" type="name" placeholder="e.g Sack Lunches" />
                </Form.Group>

                <Form.Group controlId="eventDescription" className="formGroup">
                    <Form.Label>Event Description</Form.Label>
                    <Form.Control className="input" type="description" placeholder="Write as much information about your donation as possible" />
                </Form.Group>

                <Form.Group controlId="eventDate" className="formGroup">
                    <Form.Label>Event Date</Form.Label>
                    <Form.Control className="input" type="date" placeholder="MM/DD/YYYY" />
                </Form.Group>

                <Form.Group controlId="lunchNumber" className="formGroup">
                    <Form.Label># of Lunches Available</Form.Label>
                    <Form.Control className="input" type="number" placeholder="Amount of items (e.g 15)" />
                </Form.Group>


                <Button className="button is-success" variant="primary" type="submit">
                    Add Event
                </Button>
            </Form>
            </div>
        );
    };
}




export default Form2;