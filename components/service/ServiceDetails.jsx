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
                <Link href={`/service`}>Tempor lorem interdum</Link>
              </li>
              <li>
                <Link href={`/service`}>Auctor mattis lacus </Link>
              </li>
              <li>
                <Link href={`/service`}>Dolor proin </Link>
              </li>
              <li>
                <Link href={`/service`}>Pharetra amet </Link>
              </li>
              <li>
                <Link href={`/service`}>Nullam dolor gravida </Link>
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
                  src="/assets/img/Custom Furniture.jpg"
                />
              </Link>
            </div>
            {/* /.post-media */}
            <div className="post-content-wrap clearfix">
              <h1 className="post-title-detail style-2">
                <span className="post-title-inner">
                  <span>PREDICTABLE PAYMENTS</span>
                </span>
              </h1>
              {/* /.post-title */}
              <div className="post-content margin-bottom-51">
                <p>
                  Managing finances becomes easier when you know exactly what to expect each month.
                  With predictable payments, there are no surprises, hidden fees, or sudden spikes
                  in costs—just clear, consistent, and manageable payment amounts.
                </p>
                <p className="margin-top-19">
                  Whether it’s for a personal loan, a subscription plan, or a business contract,
                  predictable payments give you the confidence to plan ahead. Instead of worrying
                  about fluctuating bills or unexpected charges, you enjoy a steady and reliable
                  payment schedule that fits seamlessly into your budget.
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
                 Fermentum Purus Fermentum – Pure Craft, Pure Growth in Wood Works
                </span>
              </h3>
              {/* /.post-title */}
              <div className="post-content margin-bottom-40">
                <p>
                  In the timeless art of woodworking, every piece tells a story of transformation—of raw material shaped into lasting beauty. “Fermentum Purus Fermentum” embodies this very philosophy: pure growth through pure craftsmanship.

                  Just as fermentation turns simple elements into something richer and more refined, our wood works transform natural timber into functional masterpieces. Guided by precision, creativity, and respect for nature, we craft with the belief that purity in process leads to excellence in results.
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
