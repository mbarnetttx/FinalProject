import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Calendar from './Pages/Calendar1';
import LoggedIn from './Pages/LoggedIn';
import About from './Pages/About';
import Login from './auth/Login';
import Register from './auth/Register';
import Wrapper from './components/Wrapper';


function App() {
  return (
  <div>

    <Router >
     <div className="App">
     <Nav />
       <Wrapper>
             <Route exact path="/" component={Calendar} />
             <Route exact path="/About" component={About} />
             <Route exact path="/donor" component={LoggedIn} />
             <Route exact path="/Register" component={Register} />
             <Route exact path="/Login" component={Login} />
       </Wrapper>
     </div>
 
     <Footer />
    </Router> 

  </div>
  );
}

export default App;
