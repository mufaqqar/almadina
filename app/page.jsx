import Process from "@/components/common/Process";
import Copyright from "@/components/footers/Copyright";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Blogs from "@/components/homes/home-1/Blogs";
import Contact from "@/components/homes/home-1/Contact";
import Experience from "@/components/homes/home-1/Experience";
import Facts from "@/components/homes/home-1/Facts";
import Hero from "@/components/homes/home-1/Hero";
// import Process from "@/components/homes/home-1/Process";
import Services from "@/components/homes/home-1/Services";
import Team from "@/components/homes/home-1/Team";
import Testimonials from "@/components/homes/home-1/Testimonials";
import Works from "@/components/homes/home-1/Works";
export const metadata = {
  title: "Al Madina Tabreed",
  description: "Al Madina Tabreed offers expert AC repair, refrigerator repair, and automatic washing machine repair services in Riyadh, Saudi Arabia. Fast, reliable, and affordable appliance repair.",
};
export default function Home() {
  return (
    <>
      <div className="sidebar-right header-style-2 topbar-style-1 menu-has-search header-fixed">
        <div id="wrapper" className="animsition" style={{ opacity: 1 }}>
          <div id="page" className="">
            <Header1 />
            <div id="main-content-home" className="site-main clearfix">
              <Hero />
              <Services />
              <Facts />
              <Experience />
               <Testimonials />           
              <Contact />     
            </div>
            <Footer1 />
            <Copyright />
          </div>
        </div>
      </div>
    </>
  );
}
