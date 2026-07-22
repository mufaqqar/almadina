import PageTitle from "@/components/common/PageTitle";
import Contact from "@/components/contact/Contact";
import Offices from "@/components/contact/Offices";
import Copyright from "@/components/footers/Copyright";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import React from "react";
export const metadata = {
  title: "Contact - Al Madina Tabreed",
  description: "Contact Al Madina Tabreed for expert AC repair, refrigerator repair, and washing machine repair services in Riyadh, Saudi Arabia. Get a free quote today.",
};
export default function page() {
  return (
    <>
      <div className="sidebar-right header-style-2 topbar-style-1 menu-has-search header-fixed">
        <div id="wrapper" className="animsition" style={{ opacity: 1 }}>
          <div id="page" className="">
            <Header1 />
            <div id="main-content-home" className="site-main clearfix">
              <PageTitle pageName="Contact" />
              <Contact />
              <Offices />
            </div>
            <Footer1 />
            <Copyright />
          </div>
        </div>
      </div>
    </>
  );
}
