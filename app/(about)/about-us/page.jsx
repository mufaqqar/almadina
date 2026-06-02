import About from "@/components/about/About";
import Experience from "@/components/about/Experience";
import Experience2 from "@/components/about/Experience2";
import Pricing from "@/components/about/Pricing";
import Process from "@/components/common/Process";
import PageTitle from "@/components/common/PageTitle";
import Copyright from "@/components/footers/Copyright";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import React from "react";
export const metadata = {
   title: "About Us - Abu Saad",
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
              <PageTitle pageName="About Us" />
              <About />
              <Experience />
              <div
                className="themesflat-spacer clearfix"
                data-desktop={138}
                data-mobile={170}
                data-smobile={320}
              />
              {/* <Pricing /> */}
              {/* <Experience2 /> */}
              {/* <Process /> */}
            </div>
            <Footer1 />
            <Copyright />
          </div>
        </div>
      </div>
    </>
  );
}
