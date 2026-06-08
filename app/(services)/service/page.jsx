import PageTitle from "@/components/common/PageTitle";
import Process from "@/components/common/Process";

import Copyright from "@/components/footers/Copyright";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import About from "@/components/service/About";
import Services from "@/components/service/Services";

import React from "react";
export const metadata = {
  title: "Services - Tabreed Mahal",
  description: "Explore our professional repair services in Riyadh: AC repair, refrigerator repair, and automatic washing machine repair. Fast, reliable, and affordable service guaranteed.",
};
export default function page() {
  return (
    <>
      <div className="sidebar-right header-style-2 topbar-style-1 menu-has-search header-fixed">
        <div id="wrapper" className="animsition" style={{ opacity: 1 }}>
          <div id="page" className="">
            <Header1 />
            <div id="main-content-home" className="site-main clearfix">
             <PageTitle pageName="Services" />
              <Services />
              {/* <About /> */}

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
