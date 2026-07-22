"use client";
import React from "react";
import Link from "next/link";
import Nav from "./Nav";
import Image from "next/image";
import MobileMenuToggle from "./MobileMenuToggle";
import MobileNav from "./MobileNav";
import { useLanguage } from "@/components/common/LanguageContext";
export default function Header1() {
  const { t, toggleLanguage, language } = useLanguage();
  return (
    <div id="site-header-wrap">
      {/* Top Bar */}
      <div id="top-bar">
        <div id="top-bar-inner" className="container">
          <div className="top-bar-inner-wrap">
            <div className="top-bar-content">
              <div className="inner">
                <span className="location content">
                  {t("address")}
                </span>
                 <span className="envelope content">
                   <a href="mailto:info@almadinatabreed.com" style={{color:'#fff'}}>info@almadinatabreed.com</a>
                 </span>
              </div>
            </div>
            {/* /.top-bar-content */}
            <div className="top-bar-socials">
              <div className="inner">
                <span className="icons">
                  <button
                    onClick={toggleLanguage}
                    className="lang-switcher"
                    style={{
                      background: 'none',
                      border: '1px solid rgba(255,255,255,0.3)',
                      color: '#fff',
                      padding: '4px 12px',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontSize: '13px',
                      marginRight: '10px',
                    }}
                  >
                    {language === "en" ? "العربية" : "English"}
                  </button>
                  <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-facebook" />
                  </a>
                  <a href="https://g.page/r/almadinatabreed" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-google" />
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
                <Link href={`/`} rel="home" >
                  <Image
                    alt=""
                    data-retina="/assets/madina-logo.png"
                    width={180}
                    height={50}
                    src="/assets/madina-logo.png"
                  />
                </Link>
            <MobileMenuToggle />
            <nav id="main-nav" className="main-nav">
              <ul id="menu-primary-menu" className="menu">
                <Nav />
              </ul>
            </nav>
            <div id="header-get-a-quote">
              <a href="https://wa.me/966535251023" target="_blank" rel="noopener noreferrer" className="header-get-a-quote-icon">
                {t("getAQuote")}
              </a>
            </div>
          </div>
        </div>
        <MobileNav />
      </header>
    </div>
  );
}
