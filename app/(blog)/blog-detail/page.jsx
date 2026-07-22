import PageTitle from "@/components/common/PageTitle";
import BlogDetails from "@/components/blog/BlogDetails";
import Copyright from "@/components/footers/Copyright";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import React from "react";
export const metadata = {
  title: "Blog Details - Al Madina Tabreed",
  description: "Read expert tips and guides on AC repair, refrigerator repair, and washing machine repair in Riyadh from Al Madina Tabreed.",
};
export default function page() {
  return (
    <>
      <div className="sidebar-right header-style-2 topbar-style-1 menu-has-search header-fixed">
        <div id="wrapper" className="animsition" style={{ opacity: 1 }}>
          <div id="page" className="">
            <Header1 />
            <PageTitle pageName="Blog" />
            <div id="main-content-2" className="site-main clearfix">
              <BlogDetails />
            </div>
            <Footer1 />
            <Copyright />
          </div>
        </div>
      </div>
    </>
  );
}
