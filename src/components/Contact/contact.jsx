import React from "react";
import "./contact.css";
class Contact extends React.Component {
  render() {
    return (
      <React.Fragment>
        <a id="contact-anchor"></a>
        <div id="contact">
          <div className="contact-title">Contact us here</div>
          <div
            id="contact-links"
            data-aos="fade"
            data-aos-anchor-placement="top-bottom"
          >
            <div className="facebook">
              <a href="https://www.facebook.com/groups/744626619791389" target={"_blank"}>
                <i className="fab fa-facebook"></i>
                <span>Facebook</span>
              </a>
            </div>
            <div className="instagram">
              <a href="https://www.instagram.com/mayukhsurtaal/" target={"_blank"}>
                <i className="fab fa-instagram"></i>
                <span>Instagram</span>
              </a>
            </div>
            {/* <div className="linkedin">
            <a href="#">
              <i className="fab fa-linkedin"></i>
              <span>LinkedIn</span>
            </a>
          </div> */}
            <div className="gmail">
              <a href="mailto:mayukhdanceclass@gmail.com" target={"_blank"}>
                <i class="far fa-envelope"></i>
                <span>G-mail</span>
              </a>
            </div>
            <div className="phone">
              <a href="tel:8884400622">
              <i className="fas fa-phone-alt"></i>
              <span>+91 8884400622</span>
              </a>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Contact;
