import React from "react";
import Link from "next/link";
import Nav from "./Nav";
import Image from "next/image";
import MobileMenuToggle from "./MobileMenuToggle";
import MobileNav from "./MobileNav";
export default function Header2() {
  return (
    <div id="site-header-wrap">
      {/* Header */}
      <header id="site-header">
        <div id="site-header-inner" className="container-fluid">
          <div className="wrap-inner style-2 clearfix">
            <div>
              <Link href={`/`} rel="home" className="main-logo">
                <Image
                  alt="Zingbox"
                  data-retina="/assets/img/logo.png"
                  src="/assets/img/logo.png"
                  width={180}
                  height={50}
                />
              </Link>
            </div>
            <MobileMenuToggle />
            {/* /.mobile-button */}
            <nav id="main-nav" className="main-nav">
              <ul id="menu-primary-menu" className="menu">
                <Nav />
              </ul>
            </nav>
            {/* /#main-nav */}
            <div className="header-phone">
              <div className="socical-icon">
                <div className="icon" />
                <div className="content">
                  <div className="call-us">
                    <span>Call Us</span>
                  </div>
                  <a href="tel:+966590016774" title="">
                    +966 59 001 6774
                  </a>
                </div>
              </div>
            </div>
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
