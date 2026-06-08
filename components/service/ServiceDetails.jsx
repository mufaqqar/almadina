import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function ServiceDetails() {
  return (
    <div id="content-wrap" className="container">
      <div id="sidebar">
        <div id="inner-sidebar" className="inner-content-wrap">
          <div className="widget widget_category style-2 widget no-sep">
            <h3 className="widget-title">
              <span>Popular Service</span>
            </h3>
            <ul className="list-category">
              <li>
                <Link href={`/service`}>AC Repair</Link>
              </li>
              <li>
                <Link href={`/service`}>Refrigerator Repair</Link>
              </li>
              <li>
                <Link href={`/service`}>Washing Machine Repair</Link>
              </li>
              <li>
                <Link href={`/service`}>Same-Day Service</Link>
              </li>
              <li>
                <Link href={`/service`}>Free Inspection</Link>
              </li>
            </ul>
          </div>
          {/* /.widget_category */}
          <div className="widget widget_get-a-quote">
            <h3 className="widget-title">
              <span>Get a Quote</span>
            </h3>
            <div className="name">
              <input type="text" placeholder="Name" />
            </div>
            <div className="email">
              <input type="text" placeholder="Email" />
            </div>
            <div className="message">
              <input type="text" placeholder="Message" />
            </div>
            <a className="btn-send" href="">
              Send
            </a>
          </div>
    
        </div>
        <div
          className="themesflat-spacer clearfix"
          data-mobile={60}
          data-smobile={60}
        />
      </div>

      {/* /#sidebar */}
      <div id="site-content" className="site-content clearfix">
        <div id="inner-content" className="inner-content-wrap">
          <article className="hentry data-effect">
            <div className="post-media clerafix">
              <Link href={`/service-detail`}>
                <Image
                  alt="Image"
                  width={770}
                  height={500}
                  src="/assets/img/Furniture Repair.jpg"
                />
              </Link>
            </div>
            {/* /.post-media */}
            <div className="post-content-wrap clearfix">
              <h1 className="post-title-detail style-2">
                <span className="post-title-inner">
                  <span>PROFESSIONAL APPLIANCE REPAIR</span>
                </span>
              </h1>
              {/* /.post-title */}
              <div className="post-content margin-bottom-51">
                <p>
                  When your AC stops working in Riyadh's heat or your refrigerator breaks down,
                  you need fast, reliable repair service. At Warsha Repairs, we specialize in
                  diagnosing and fixing all major home appliances with same-day service.
                </p>
                <p className="margin-top-19">
                  Whether it's an air conditioner that won't cool, a refrigerator that leaks,
                  or a washing machine that won't spin, our experienced technicians have the
                  skills and tools to get your appliances back in working order quickly.
                </p>
              </div>
              {/* /.post-excerpt */}
              <div className="row">
                <div className="col-md-6">
                  <div className="post-img">
                    <Image
                      alt="Image"
                      width={370}
                      height={270}
                      src="/assets/img/blog-banner.jpg"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div>
                    <h3 className="post-title-service-detail margin-top-4">
                      <span className="post-title-inner">
                        Quality Service Guarantee
                      </span>
                    </h3>
                    {/* /.post-title */}
                    <div className="post-content margin-bottom-32">
                      <p>
                        At its core, our service is about trust
                        and reliability—building confidence that every repair
                        will meet or exceed your expectations.
                      </p>
                    </div>
                  </div>
                  <div>
                    <h3 className="post-title-service-detail">
                      <span className="post-title-inner">
                        Highly Professional Technicians
                      </span>
                    </h3>
                    {/* /.post-title */}
                    <div className="post-content">
                      <p>
                        At the heart of every successful repair is a team of
                        skilled professionals who bring expertise, precision
                        and dedication to their craft.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="post-title-service-detail">
                <span className="post-title-inner">
                 Your Trusted Repair Partner in Riyadh
                </span>
              </h3>
              {/* /.post-title */}
              <div className="post-content margin-bottom-40">
                <p>
                  At Warsha Repairs, every appliance tells a story—and we're here to make sure
                  that story continues. From AC units struggling through the summer heat to
                  refrigerators keeping your food fresh and washing machines handling daily loads,
                  we treat every repair with the care and attention it deserves.

                  Guided by expertise, precision, and a commitment to customer satisfaction,
                  we believe that quality service leads to lasting results. Whether it's a simple
                  fix or a major repair, our team is ready to help.
                </p>
              </div>
              {/* /.post-excerpt */}
              <div className="row">
                <div className="col-md-6">
                  <div className="post-img">
                    <Image
                      alt="Image"
                      width={370}
                      height={270}
                      src="/assets/img/blog-banner.jpg"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div>
                    <h3 className="post-title-service-detail margin-top-4">
                      <span className="post-title-inner">
                        Quality Control System
                      </span>
                    </h3>
                    {/* /.post-title */}
                    <div className="post-content margin-bottom-32">
                      <p>
                        At its core, a quality control system is about trust
                        and reliability—building confidence that what a company
                        delivers will meet or exceed expectations.
                      </p>
                    </div>
                  </div>
                  <div>
                    <h3 className="post-title-service-detail">
                      <span className="post-title-inner">
                        Highly Professional Staff
                      </span>
                    </h3>
                    {/* /.post-title */}
                    <div className="post-content">
                      <p>
                        At the heart of every successful project is a team of
                        skilled professionals who bring expertise, precision
                        and passion to their craft.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="post-title-service-detail">
                <span className="post-title-inner">
                 Your Trusted Repair Partner in Riyadh
                </span>
              </h3>
              {/* /.post-title */}
              <div className="post-content margin-bottom-40">
                <p>
                  At Warsha Repairs, every appliance tells a story—and we're here to make sure
                  that story continues. From AC units struggling through the summer heat to
                  refrigerators keeping your food fresh and washing machines handling daily loads,
                  we treat every repair with the care and attention it deserves.

                  Guided by expertise, precision, and a commitment to customer satisfaction,
                  we believe that quality service leads to lasting results. Whether it's a simple
                  fix or a major repair, our team is ready to help.
                </p>
              </div>
           
              {/* /.post-excerpt */}
            </div>
            {/* /.post-content-wrap */}
          </article>
          {/* /.hentry */}
        </div>
        {/* /#inner-content */}
      </div>
      {/* /#site-content */}
    </div>
  );
}
