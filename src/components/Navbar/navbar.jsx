import React, { Component } from 'react';
import "./navbar.css"
import logo from "./logo.png"
class Navbar extends React.Component {
    state={
        showToggle:false,
        dropDown:false,
        fade:false,
    }
    constructor(props){
        super(props)
        this.state = {
            showToggle:(window.innerWidth > 1200)?false:true,
            dropDown:false
        }
        this.renderShowToggle = this.renderShowToggle.bind(this)
        this.handleScroll = this.handleScroll.bind(this)
        window.addEventListener('resize',this.renderShowToggle)
        window.addEventListener('scroll',this.handleScroll)
    }

    handleScroll = (e)=>{
        
        const winScroll =
    document.body.scrollTop || document.documentElement.scrollTop

  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight

  const scrolled = winScroll / height
        console.log(scrolled)
        this.setState(
            {
                fade: scrolled > 0.1
            }
        )

    }

    renderShowToggle(){
        var show = (window.innerWidth > 1200)?false:true
        if(show !== this.state.showToggle)
        this.setState({
            showToggle:show
        })
    }

    toggleDropDown=()=>{
        console.log(`${this.state.dropDown}`)
        this.setState({
            dropDown:!this.state.dropDown
        })
    }

    renderNavItems(){
        return <React.Fragment> <div className="button_container" ><a href="#home-anchor"><button className="nav_home" onClick={this.toggleDropDown}>Home</button></a></div>
        <div className="button_container"><a href="#about-anchor"><button className="nav_about" onClick={this.toggleDropDown}>About</button></a></div>
        <div className="button_container"><a href="#courses-anchor"><button className="nav_courses" onClick={this.toggleDropDown}>Courses</button></a></div>
        <div className="button_container"><a href="#contact-anchor"><button className="nav_contact" onClick={this.toggleDropDown}>Contact</button></a></div>

        </React.Fragment>
    }

    renderNav(){
        return (!this.state.showToggle)?<React.Fragment>
            {this.renderNavItems()}
        </React.Fragment> :<React.Fragment> <button className={(this.state.dropDown)?'menu-active':'menu'} onClick={this.toggleDropDown}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
            
        </button>
        {this.renderDropdown()}
        </React.Fragment>
    }

    renderDropdown(){
        return (this.state.dropDown)? <div className="dropdown">
            {this.renderNavItems()}
        </div> : <div className="dropdown" style={{top:'-1000px'}}>
            {this.renderNavItems()}
        </div>
    }

    render() { 

        return <nav style={(this.state.fade)?{opacity:0.9, backgroundColor:'grey'}:{opacity:1}}>
            <div className="logo_container">
                <img className='logo' src={logo}/>
            </div>
            {this.renderNav()}
        </nav>;
    }
}
 
export default Navbar;