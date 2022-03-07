import React, { Component } from 'react';
import About from './About/about';
import Contact from './Contact/contact';
import Courses from './Courses/courses';
import Home from './Home/home';
import Navbar from './Navbar/navbar';
import AOS from "aos";
class App extends React.Component {
  render() { 
    AOS.init({
      duration:2000
    })
    return <React.Fragment>
      <Navbar/>
      <Home/>
      <Courses/>
      <About/>
      <Contact/>
    </React.Fragment>;
  }
}
 
export default App;