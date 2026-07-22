import PageTitle from "@/components/common/PageTitle";
import Blogs from "@/components/blog/Blogs";
import Copyright from "@/components/footers/Copyright";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import React from "react";
export const metadata = {
  title: "Blog",
  description: "Read expert tips and guides on AC repair, refrigerator repair, and washing machine repair in Riyadh from Al Madina Tabreed.",
  alternates: {
    canonical: "/blog",
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
              <PageTitle pageName="Blog" />
              <Blogs />
            </div>
            <Footer1 />
            <Copyright />
          </div>
        </div>
      </div>
    </>
  );
}
