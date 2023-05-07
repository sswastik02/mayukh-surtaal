import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import "./home.css"
import image1 from "./images/image1.png"
import image2 from "./images/image2.png"
import image3 from "./images/image3.png"
import image4 from "./images/image4.png"
class Home extends React.Component {
    
    render() { 
        const images = [
            {
                url:`${image1}`,
            },
            {
                url:`${image2}`,
            },
            {
                url:`${image3}`,
            },
            {
                url:`${image4}`,
            },
            // {
                // url:`${image5}`,
            // },
        ]
        return <React.Fragment>
            <a id="home-anchor"></a>
        <div id="home">
        <div id='slide-container' className='home-slider'>
            <Slide easing="ease" duration="3000" indicators={i => (<div className="indicator"></div>) } pauseOnHover={false}>
                {images.map((image,index)=>(
                    <div className="each-slide" key={index}>
                        <div className='slider-image' style={{backgroundImage:`url(${image.url})`,backgroundRepeat:"no-repeat",backgroundSize:"1000%",backgroundPosition:"center",borderRadius:'20px'}}>
                        <img className='slider-image-front' key={index} src={`${image.url}`} style={{borderRadius:'20px'}} alt="" />
                        </div>
                        
                    </div>
                ))}
            </Slide>
            <a id="about-anchor"></a>
            <div className="home-title"> Mayukh Surtaal </div>
            <ul className="home-content">
            <li>Mayukh Surtaal, the school of Indian classical dance teaches kathak Odissi and Indian creative dance. 
                The amalgamation of Indian traditional routine and modern technics, can construct a unique and strong foundation on the course of the dance, a path shown by maestro, Uday Shankar.
                The academy was founded in the year 2010 in Bangalore to fulfil the dreams of those who have a passion to learn the ancient classical dance form.</li>
            <li>Mayukh Surtaal offers specialised courses as well as training on the basics of Kathak and Odissi dance and certifies the dancers to pursue their career in prominent global forums.
                Also provides the opportunity to get Diploma /Degree Certification through affiliated University.</li>
            <li>Over the years, the academy has been training scores of students who come from all walks of life and nurtured their passion while creating awareness for leading a healthy lifestyle.</li>
            <li>We celebrate diverse culture and experience the ancient and contemporary art.</li>
            </ul>
        </div>
        </div>
        </React.Fragment>;
    }
}
 
export default Home;
