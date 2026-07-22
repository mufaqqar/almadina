import PageTitle from "@/components/common/PageTitle";
import Copyright from "@/components/footers/Copyright";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import ServiceDetails from "@/components/service/ServiceDetails";

import React from "react";
export const metadata = {
     title: "Service Details",
     description: "Learn more about our AC repair, refrigerator repair, and washing machine repair services in Riyadh. Professional appliance repair you can trust.",
     alternates: {
       canonical: "/service-detail",
     },
};
export default function page() {
  return (
    <>
      <div className="sidebar-left header-style-2 topbar-style-1 menu-has-search header-fixed">
        <div id="wrapper" className="animsition" style={{ opacity: 1 }}>
          <div id="page" className="">
            <Header1 />
            <PageTitle pageName="Service Details" />
            <div id="main-content-2" className="site-main clearfix">
              {/* <ServiceDetails /> */}
            </div>
            <Footer1 />
            <Copyright />
          </div>
        </div>
      </div>
    </>
  );
}
