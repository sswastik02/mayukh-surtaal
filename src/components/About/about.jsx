import React from 'react';
import pic from "./pic.jpg"
import "./about.css"
import "aos/dist/aos.css";
class About extends React.Component {

    state = {
        single:false
    }
    constructor(props){
        super(props)
        this.state = {
            single:(window.innerWidth > 1000)?false:true,
        }
        this.toggleSingle = this.toggleSingle.bind(this)
        window.addEventListener('resize',this.toggleSingle)
    }

    toggleSingle(){
        var single = (window.innerWidth > 1000)?false:true
        if(single !== this.state.single)
        this.setState({
            single:single
        })
    }

    renderDescriptionBody()
    {
        return <React.Fragment>
        <div className="description-body">
                Dr. Samarpita Roy is a Classical, Kathak, Odissi, and semi-classical dance trainer with 12 years of professional training at Uday Shankar India Culture Centre, Kolkata, under legendary dancer Smt Amala Shankar, 10 years of performance at various renowned stages, along with simultaneous teaching and choreography. An approachable and committed dance teacher who is keen to share to make students learn flawlessly.
                </div>
                </React.Fragment>
    }

    renderAbout(){
        return (!this.state.single)? <React.Fragment>
            <div className="picture" data-aos="zoom-in">
                <img src={pic} alt="" />
            </div>
            <div className="description">
                <div className="description-title" data-aos="fade-in">
                    Teacher
                </div>
                {this.renderDescriptionBody()}
            </div>
        </React.Fragment> : <React.Fragment>
        <div className="description-title">
                    Teacher
                </div>
                <div className="picture">
                <img src={pic} alt="" />
                </div>
                {this.renderDescriptionBody()}
                
        </React.Fragment>
    }

    render() { 
        return <React.Fragment>
            <a id="about-anchor"></a>
        <div id="about">
            {this.renderAbout()}
        </div>
        </React.Fragment>
        ;
    }
}
 
export default About;