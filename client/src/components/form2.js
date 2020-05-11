import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import API from '../Utils/api'



class Form2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            eventName: "",
            eventDescription: "",
            eventDate: "",
            lunchNumber: "",
            userName: ""
        };
    }

     // Click Event.
   

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
            alert("You must enter an event date!")
        }

        let lunchNumber = this.state.lunchNumber;
        if (!lunchNumber) {
            alert("You must enter how many items you will have available!")
        }
        let userName = this.state.userName;
        if (!userName) {
            alert("You must enter a username!")
        }


        event.preventDefault();
        this.setState({eventName: '', eventDate: '', eventDescription: '', lunchNumber:'', userName:'' }) // <= here
        
        alert("Your event has been successfully added!")

        // window.open("https://neighbor-2-neighbor.herokuapp.com/")
        
        

        var saveObject = [{
            eventName: eventName,
            eventDate: eventDate,
            eventDescription: eventDescription,
            lunchNumber: lunchNumber,
            userName: userName
        }];
            console.log(saveObject);
            API.saveDonations(saveObject)
                .then(function (responseFromBackend) {
                    console.log(responseFromBackend);
                })
                .catch(function (error) {
                    console.log("There was an error!: " + error);
                });

        }

        onChangeName = (event) => {
            this.setState({ eventName: event.target.value })
        }

        onChangeDescription = (event) => {
            this.setState({ eventDescription: event.target.value })
        }

        onChangeDate = (event) => {
            this.setState({ eventDate: event.target.value })
        }

        onChangeNumber = (event) => {
            this.setState({ lunchNumber: event.target.value })
        }

        onChangeUser = (event) => {
            this.setState({ userName: event.target.value })
        }

    handleClick = () => {
        this.props.history("/");
    }


        render() {
            return (
                <div className="box">
                    <Form className="formLogin" onSubmit={this.mySubmitHandler}>
                        <Form.Group controlId="eventName" className="formGroup">
                            <Form.Label>Event Name</Form.Label>
                            <Form.Control className="input" value={this.state.eventName} onChange={this.onChangeName} type="name" placeholder="e.g Sack Lunches" />
                        </Form.Group>

                        <Form.Group controlId="eventDescription" className="formGroup">
                            <Form.Label>Event Description</Form.Label>
                            <Form.Control className="input" value={this.state.eventDescription} onChange={this.onChangeDescription} type="description" placeholder="Write as much information about your donation as possible" />
                        </Form.Group>

                        <Form.Group controlId="eventDate" className="formGroup">
                            <Form.Label>Event Date</Form.Label>
                            <Form.Control className="input" value={this.state.eventDate} onChange={this.onChangeDate} type="date" placeholder="MM/DD/YYYY" />
                        </Form.Group>

                        <Form.Group controlId="lunchNumber" className="formGroup">
                            <Form.Label># of Lunches Available</Form.Label>
                            <Form.Control className="input" value={this.state.lunchNumber} onChange={this.onChangeNumber} type="number" placeholder="Amount of items (e.g 15)" />
                        </Form.Group>

                        <Form.Group controlId="userName" className="formGroup">
                            <Form.Label>User Name</Form.Label>
                            <Form.Control className="input" value={this.state.userName} onChange = {this.onChangeUser} type="user" />
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