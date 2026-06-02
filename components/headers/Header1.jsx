import React from "react";
import Link from "next/link";
import Nav from "./Nav";
import Image from "next/image";
import MobileMenuToggle from "./MobileMenuToggle";
import MobileNav from "./MobileNav";
export default function Header1() {
  return (
    <div id="site-header-wrap">
      {/* Top Bar */}
      <div id="top-bar">
        <div id="top-bar-inner" className="container">
          <div className="top-bar-inner-wrap">
            <div className="top-bar-content">
              <div className="inner">
                <span className="location content">
                  7517 Wadi Al Janah, An Nasim Ash Sharqi, Riyadh, Saudi Arabia
                </span>
                {/* <span className="envelope content">info@website.com</span> */}
              </div>
            </div>
            {/* /.top-bar-content */}
            <div className="top-bar-socials">
              <div className="inner">
                <span className="icons">
                  <a href="https://www.facebook.com/share/1BTiUbW5h7/">
                    <i className="fa fa-facebook" />
                  </a>
                  <a href="#">
                    <i className="fa fa-twitter" />
                  </a>
                  <a href="https://khanexpertcarpenter.com/#jkit_video_button_jeg_module_68_32_68c93058b6978">
                    <i className="fa fa-google-plus" />
                  </a>
                  <a href="https://www.instagram.com/khan0558204694?igsh=bm54ajJzcnA5czRw&utm_source=ig_contact_invite">
                    <i className="fa fa-instagram" />
                  </a>
                </span>
              </div>
            </div>
            {/* /.top-bar-socials */}
          </div>
        </div>
      </div>
      {/* /#top-bar */}
      {/* Header */}
      <header id="site-header">
        <div id="site-header-inner" className="container">
          <div className="wrap-inner clearfix">
            {/* <div id="site-logo" className="clearfix"> */}
              {/* <div id="site-logo-inner"> */}
                <Link href={`/`} rel="home" >
                  <Image
                    alt=""
                    data-retina="/assets/img/logo.png"
                    width={180}
                    height={50}
                    src="/assets/img/logo.png"
                  />
                </Link>
              {/* </div> */}
            {/* </div> */}

            {/* /#site-logo */}
            <MobileMenuToggle />
            {/* /.mobile-button */}
            <nav id="main-nav" className="main-nav">
              <ul id="menu-primary-menu" className="menu">
                <Nav />
              </ul>
            </nav>
            {/* /#main-nav */}
            <div id="header-get-a-quote">
              <Link href={`/contact`} className="header-get-a-quote-icon">
                Get A Quote
              </Link>
              {/* <button class="header-get-a-quote-icon" >Get a Quote</button> */}
            </div>
            {/* /#header-get-a-quote */}
          </div>
          {/* /.wrap-inner */}
        </div>
        {/* /#site-header-inner */}
        <MobileNav />
      </header>
      {/* /#site-header */}
    </div>
  );
}
