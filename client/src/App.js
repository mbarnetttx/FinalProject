import React from 'react';
import './App.css';
import Nav from './componenets/Nav';
import Footer from './componenets/Footer';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Calendar from './Pages/calendar';
import LoggedIn from './Pages/LoggedIn';
import About from './Pages/About';
import Wrapper from './componenets/Wrapper';


function App() {
  return (
  <div>

    <Router >
     <div className="App">
     <Nav />
       <Wrapper>
             <Route exact path="/home" component={Calendar} />
             <Route exact path="/about" component={About} />
             <Route exact path="/donor" component={LoggedIn} />
             
       </Wrapper>
     </div>
 
    </Router> 
     <Footer />

  </div>
  );
}

export default App;
