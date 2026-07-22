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
                  alt="Al Madina Tabreed"
                  data-retina="/assets/logo.png"
                  src="/assets/logo.png"
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
                  <a href="tel:+966583086233" title="">
                    +966 58 308 6233
                  </a>
                </div>
              </div>
            </div>
            <div id="header-get-a-quote">
              <a href="https://wa.me/966535251023" target="_blank" rel="noopener noreferrer" className="header-get-a-quote-icon">
                Get A Quote
              </a>
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
