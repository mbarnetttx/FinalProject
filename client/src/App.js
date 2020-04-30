import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Calendar from './Pages/Calendar';
import LoggedIn from './Pages/LoggedIn';
import About from './Pages/About';
import Login from './Pages/Login';
import Logout from './Pages/Logout';
import Register from './Pages/Register';
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
             <Route exact path="/Login" component={Login} />
             <Route exact path="/Logout" component={Logout} />
             <Route exact path="/Register" component={Register} />
             
       </Wrapper>
     </div>
 
     <Footer />
    </Router> 

  </div>
  );
}

export default App;
