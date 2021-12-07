import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { positions, Provider as AlertProvider, transitions } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import './App.css';
// import Navbar from './components/Navbar';
// import Sidebar from './components/Sidebar'
import Home from './pages';
import SigninPage from './pages/signin';
import About from './pages/about';
import ContactUs from './pages/contactus';

const options = {
  position: positions.TOP_CENTER,
  timeout: 5000,
  offset: '30px',
  transition: transitions.SCALE,
}

function App() {
  // const [ isOpen, setIsOpen ] = useState(false);

  // const toggle = () => {
  //     setIsOpen(!isOpen)
  // }

  return (
    <AlertProvider template={AlertTemplate} {...options}>
      <Router>
        {/* <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/> */}
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/signin" component={SigninPage} exact />
          <Route path="/about" component={About} exact />
          <Route path="/contactus" component={ContactUs} exact />
        </Switch>
      </Router>
    </AlertProvider>
  );
}

export default App;
