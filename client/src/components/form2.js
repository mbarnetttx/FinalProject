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

    +


    render() {
        return (
            <Form>
                <Form.Group controlId="eventName">
                    <Form.Label>Event Name</Form.Label>
                    <Form.Control type="name" placeholder="e.g Sack Lunches" />
                </Form.Group>

                <Form.Group controlId="eventDescription">
                    <Form.Label>Event Description</Form.Label>
                    <Form.Control type="description" placeholder="Write as much information about your donation as possible" />
                </Form.Group>

                <Form.Group controlId="eventDate">
                    <Form.Label>Event Date</Form.Label>
                    <Form.Control type="date" placeholder="MM/DD/YYYY" />
                </Form.Group>

                <Form.Group controlId="lunchNumber">
                    <Form.Label># of Lunches Available</Form.Label>
                    <Form.Control type="number" placeholder="Amount of items (e.g 15)" />
                </Form.Group>


                <Button variant="primary" type="submit">
                    Submit
            </Button>
            </Form>

        );
    };
}




export default Form2;