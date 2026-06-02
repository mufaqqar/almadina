import PageTitle from "@/components/common/PageTitle";
import Contact from "@/components/contact/Contact";
import Offices from "@/components/contact/Offices";
import Copyright from "@/components/footers/Copyright";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import React from "react";
export const metadata = {
 title: "Contact - Abu Saad",
  description: "Abu Saad is an experienced SEO expert specializing in search engine optimization, keyword research, on-page and off-page strategies, and content marketing. He helps businesses improve online visibility, rank higher on Google, and drive organic traffic with proven SEO techniques.",
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
