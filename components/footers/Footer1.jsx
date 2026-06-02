"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import { widgets } from "@/data/footerLinks";
export default function Footer1() {
  const [success, setSuccess] = useState(true);
  const [showMessage, setShowMessage] = useState(false);

  const handleShowMessage = () => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };

  const sendEmail = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    const email = e.target.email.value;

    try {
      const response = await axios.post(
        "https://express-brevomail.vercel.app/api/contacts",
        {
          email,
        }
      );

      if ([200, 201].includes(response.status)) {
        e.target.reset(); // Reset the form
        setSuccess(true); // Set success state
        handleShowMessage();
      } else {
        setSuccess(false); // Handle unexpected responses
        handleShowMessage();
      }
    } catch (error) {
      console.error("Error:", error.response?.data || "An error occurred");
      setSuccess(false); // Set error state
      handleShowMessage();
      e.target.reset(); // Reset the form
    }
  };
  return (
    <footer id="footer" className="style-2 clearfix">
      <div id="footer-widgets" className="container">
        <div className="footer-information">
          <div className="row">
            <div className="col-md-4">
              <div className="address">
                <div className="socical-icon">
                  <div className="icon-1" />
                  <div className="content">
                    <div>
                      <span>Our Address</span>
                    </div>
                    <a href="/" title="">
                      7517 Wadi Al Janah, An Nasim Ash Sharqi, Riyadh, Saudi Arabia
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="phone">
                <div className="socical-icon">
                  <div className="icon-2" />
                  <div className="content">
                    <div>
                      <span>Call Us</span>
                    </div>
                    <a href="#" title="">
                      +966558671274
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="mail">
                <div className="socical-icon">
                  <div className="icon-3" />
                  <div className="content">
                    <div>
                      <span>Our Mail</span>
                    </div>
                    <a href="#" title="">
                      yourname@mail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /.row */}
        </div>
        <div className="footer-inner">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="widget widget_text">
                <div className="textwidget">
                  <Image
                    alt="Image"
                    width={180}
                    height={50}
                    src="/assets/img/logo.png"
                  />
                  <p className="margin-bottom-15">
                    rusted woodwork experts blending
                    <br />
                     traditional craftsmanship with
                    <br />
                    modern design for homes and offices
                  </p>
                  <div className="footer-socials">
                    <div className="inner">
                      <span className="icons">
                        <a className="active" href="https://www.facebook.com/share/1BTiUbW5h7/">
                          <i className="fa fa-facebook-square" />
                        </a>
                        <a href="#">
                          <i className="fa fa-twitter" />
                        </a>
                        <a href="https://khanexpertcarpenter.com/#jkit_video_button_jeg_module_68_32_68c93058b6978">
                          <i className="fa fa-google" />
                        </a>
                        <a href="#">
                          <i className="fa fa-linkedin" />
                        </a>
                        <a href="#">
                          <i className="fa fa-pinterest-p" />
                        </a>
                      </span>
                    </div>
                  </div>
                  {/* /.footer-socials */}
                </div>
              </div>
              {/* /.widget_text */}
              <div
                className="themesflat-spacer clearfix"
                data-desktop={0}
                data-mobile={0}
                data-smobile={0}
              />
            </div>
            {/* /.col */}
            {widgets.map((widget) => (
              <div className="col-lg-3 col-md-6 col-6" key={widget.id}>
                <div
                  className="themesflat-spacer clearfix"
                  data-desktop={widget.spacer.desktop}
                  data-mobile={widget.spacer.mobile}
                  data-smobile={widget.spacer.smobile}
                />
                <div className={`widget ${widget.className}`}>
                  <h3 className="widget-title margin-bottom-30">
                    {widget.title === "Useful Links" ? (
                      <span>{widget.title}</span>
                    ) : (
                      widget.title
                    )}
                  </h3>
                  <ul className="service-list">
                    {widget.links.map((link, index) => (
                      <li key={index}>
                        <Link href={link.href}>{link.text}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
            {/* /.col */}
            <div className="col-lg-3 col-md-6">
              <div
                className="themesflat-spacer clearfix"
                data-desktop={5}
                data-mobile={50}
                data-smobile={50}
              />
              <div className="widget widget_email">
                <h3 className="widget-title margin-bottom-30">Subscribe</h3>
                <div
                  className={`tfSubscribeMsg  footer-sub-element ${
                    showMessage ? "active" : ""
                  }`}
                >
                  {success ? (
                    <p style={{ color: "rgb(52, 168, 83)" }}>
                      You have successfully subscribed.
                    </p>
                  ) : (
                    <p style={{ color: "red" }}>Something went wrong</p>
                  )}
                </div>
                <form onSubmit={sendEmail} className="email-form">
                  <div className="Email">
                    <input
                      required
                      name="email"
                      type="text"
                      placeholder="Email"
                    />
                  </div>
                  <div>
                    <button type="submit" className="btn-subcriber">
                      Subscribe
                    </button>
                  </div>
                  <span className="tittle-email">
                    Get the latest updates via email. Any time you may
                    unsubscribe
                  </span>
                </form>
              </div>
              {/* /.widget_instagram */}
            </div>
            {/* /.col */}
          </div>
          {/* /.themesflat-row */}
        </div>
        {/* /#footer-widgets */}
      </div>
    </footer>
  );
}
