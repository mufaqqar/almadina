import PageTitle from "@/components/common/PageTitle";
import Copyright2 from "@/components/footers/Copyright2";
import Footer2 from "@/components/footers/Footer2";
import Header1 from "@/components/headers/Header1";
import About from "@/components/team/About";
import Team from "@/components/team/Team";

import React from "react";
export const metadata = {
   title: "Team",
  description: "Meet the skilled team behind Al Madina Tabreed. Our experienced technicians specialize in AC, refrigerator, and washing machine repair across Riyadh.",
  alternates: {
    canonical: "/team",
  },
};
export default function page() {
  return (
    <>
      <div className="sidebar-right header-style-2 topbar-style-1 menu-has-search header-fixed">
        <div id="wrapper" className="animsition" style={{ opacity: 1 }}>
          <div id="page" className="">
            <Header1 />
            <div id="main-content-home" className="site-main clearfix">
              <PageTitle pageName="Team" />
              <About />
              <Team />
            </div>
            <Footer2 />
            <Copyright2 />
          </div>
        </div>
      </div>
    </>
  );
}
