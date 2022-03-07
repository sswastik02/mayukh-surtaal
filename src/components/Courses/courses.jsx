import React from "react";
import pic from "./course-pic.png";
import Hover from 'react-3d-hover';
import "./courses.css";
class Courses extends React.Component {
  constructor(props){
    super(props);
    
  }
  state = {
    course: "kathak",
  };

  descr = {
    "kathak":
    "This course is about Indian Classical Dance - Kathak. This course "+
    "facilitates students to learn all the aspects of Kathak Dance. From the " +
    "History and the Origin of Kathak Dance, students will be able to " +
    "understand the technical as well as aesthetical dimensions of this " +
    "dance form." ,


    "odissi":
    "This course is about Indian Classical Dance – Odissi. Students are " +
    "introduced to the colourful world of Odissi at this stage, through " +
    "various body movements, poses such as the Chowka Tribhangi and " +
    "compositions ranging from the traditional Namaskar to the popular " +
    "Abhinaya.",
    
    "semiclassical":
    "semi- classical is not purely classical movements but a hint of Classical steps n movements that's Semi-classical"
  }

  selectCourse = (course) => {
    this.setState({
      course: course,
    });
  };

  renderCourseDesc(desc) {
    return (
      <React.Fragment>
        <div className="course-text">
        {desc}
        </div>
        <div className="course-buttons">
        <div className="course-btn-container"><button onClick={()=>this.selectCourse("odissi")}>Learn<br/> Odissi</button></div>
        <div className="course-btn-container"><button onClick={()=>this.selectCourse("kathak")}>Learn<br/> Kathak</button></div>
        <div className="course-btn-container"><button onClick={()=>this.selectCourse("semiclassical")}>Learn<br/> Semi-Classical</button></div>
        </div>
      </React.Fragment>
    );
  }


  render() {
    return (
      <React.Fragment>
        <a id="courses-anchor"></a>
        <div id="courses">
          <div className="courses-title">Courses</div>
          <div className="courses-body">
            <div className="courses-pic" data-aos="flip-left">
              <Hover scale={1.01} perspective={500} speed={700}>
                <img id='courses-img' src={pic} alt="" />
              </Hover>
              
            </div>
            <div className="courses-description" data-aos="fade-in">
              {this.renderCourseDesc(this.descr[this.state.course])}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Courses;
