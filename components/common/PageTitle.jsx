import Link from "next/link";
import React from "react";

export default function PageTitle({ pageName = "About Us" }) {
  // images map karo pageName ke sath
  const images = {
    "About Us": "/assets/img/about-banner.jpg",
    Services: "/assets/img/service-banner.jpg",
    Blog: "/assets/img/blog-banner.jpg", 
    Contact: "/assets/img/contact-banner.jpg",
  };

  // agar naam nahi mile to default image
  const bgImage = images[pageName] || "/assets/img/blog-detail.jpg";

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
            <h1 className="blog-standar-start1">{pageName.toUpperCase()}</h1>
          </div>
          <h2 className="blog-standar-end">
            <Link href={`/`} className="blog-standar-end">
              Home
            </Link>{" "}
            | <span className="blog-standar-end">{pageName}</span>
          </h2>
        </div>
        {/* /.header-banner-inner-wrap */}
      </div>
      {/* /#header-banner-inner */}
    </div>
  );
}
