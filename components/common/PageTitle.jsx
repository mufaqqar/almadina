"use client";
import Link from "next/link";
import React from "react";
import { useLanguage } from "./LanguageContext";

const pageNameMap = {
  "About Us": "pageAbout",
  Services: "pageServices",
  Blog: "pageBlog",
  Contact: "pageContact",
  Team: "pageTeam",
  Pricing: "pagePricing",
  FAQ: "pageFaq",
};

export default function PageTitle({ pageName = "About Us" }) {
  const { t } = useLanguage();
  const images = {
    "About Us": "/assets/img/about-banner.jpg",
    Services: "/assets/img/service-banner.jpg",
    Blog: "/assets/img/blog-banner.jpg",
    Contact: "/assets/img/contact-banner.jpg",
  };
  const bgImage = images[pageName] || "/assets/img/blog-detail.jpg";
  const translated = pageNameMap[pageName] ? t(pageNameMap[pageName]) : pageName;

  return (
    <div
      id="header-banner"
      className="header-banner clearfix"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${bgImage})`,
        height: "400px",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div id="header-banner-inner" className="container clearfix">
        <div className="header-banner-inner-wrap">
          <div className="blog-standar-start">
            <h1 className="blog-standar-start1">{translated.toUpperCase()}</h1>
          </div>
          <h2 className="blog-standar-end">
            <Link href={`/`} className="blog-standar-end">
              {t("homeBreadcrumb")}
            </Link>{" "}
            | <span className="blog-standar-end">{translated}</span>
          </h2>
        </div>
      </div>
    </div>
  );
}
