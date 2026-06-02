import React from "react";

export default function Contact() {
  return (
    <>
      <div
        className="themesflat-spacer clearfix"
        data-desktop={120}
        data-mobile={60}
        data-smobile={60}
      />
      <div className="write-a-message">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="themesflat-headings contact style-2 wow fadeInUp clearfix">
                <a className="get-in-touch" href="#">
                  Get in touch
                </a>
                <h1 className="heading">WRITE US A MESSAGE</h1>
                <p className="sub-heading">
                 Have questions or need assistance? Send us a message and our team will get back to you shortly.
                </p>
              </div>
              <ul className="socical-icon">
                <li>
                  <a href="#">
                    <i className="fa fa-facebook" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-pinterest-p" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-instagram" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-linkedin" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-8">
              <div className="form-submit">
                <div className="infor wow fadeInUp">
                  <input type="text" placeholder="Full Name" />
                  <input type="text" placeholder="Phone Number" />
                </div>
                <div className="infor wow fadeInUp">
                  <input type="text" placeholder="Email Address" />
                  <input type="text" placeholder="Subject" />
                </div>
                <div className="message wow fadeInUp">
                  <input type="text" placeholder="Your Massege" />
                </div>
                <div className="send">
                  <button className="message-submit" type="submit">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="themesflat-spacer clearfix"
        data-desktop={220}
        data-mobile={60}
        data-smobile={60}
      />
    </>
  );
}
