import Copyright2 from "@/components/footers/Copyright2";
import Footer2 from "@/components/footers/Footer2";
import Header2 from "@/components/headers/Header2";
import About from "@/components/homes/home-2/About";
import Banner from "@/components/homes/home-2/Banner";
import Blogs from "@/components/homes/home-2/Blogs";
import CaseStudy from "@/components/homes/home-2/CaseStudy";
import Features from "@/components/homes/home-2/Features";
import Hero from "@/components/homes/home-2/Hero";
import Process from "@/components/homes/home-2/Process";
import Services from "@/components/homes/home-2/Services";
import Team from "@/components/homes/home-2/Team";
import Testimonials from "@/components/homes/home-2/Testimonials";
import React from "react";
export const metadata = {
 title: "Abu Saad",
  description: "Abu Saad is an experienced SEO expert specializing in search engine optimization, keyword research, on-page and off-page strategies, and content marketing. He helps businesses improve online visibility, rank higher on Google, and drive organic traffic with proven SEO techniques.",
};
export default function page() {
  return (
    <>
      <div className="sidebar-right header-style-1 header-fixed">
        <div id="wrapper" className="animsition" style={{ opacity: 1 }}>
          <div id="page" className="">
            <Header2 />
            <div id="main-content-home" className="site-main clearfix">
              <Hero />
              <Features />
              <Process />
              <About />
              <Banner />
              <Services />
              <Team />
              <CaseStudy />
              <Testimonials />
              <Blogs />
            </div>
            <Footer2 />
            <Copyright2 />
          </div>
        </div>
      </div>
    </>
  );
}
