import React from "react";
import Link from "next/link";
import Image from "next/image";
import CommentForm from "./CommentForm";
import { blogPosts } from "@/data/blogs";
import Sidebar from "./Sidebar";
export default function BlogDetails() {
  return (
    <div id="content-wrap" className="container">
      <div id="site-content" className="site-content clearfix">
        <div id="inner-content" className="inner-content-wrap">
          <article className="hentry data-effect">
            <div className="post-media clerafix">
              <Link href={`/blog-detail`}>
                <Image
                  alt="Image"
                  src="/assets/ac-repair.jpg"
                  width={770}
                  height={450}
                />
              </Link>
            </div>
            {/* /.post-media */}
            <div className="post-content-wrap clearfix">
              <div className="post-meta">
                <div className="post-meta-content">
                  <div className="post-meta-content-inner">
                    <span className="post-by-author item">
                      user
                      <span className="inner">
                        <a href="#"> BY ADMIN</a>
                      </span>
                    </span>
                    <span className="post-date item">
                      <span className="inner">
                        <span className="entry-date">15 MARCH, 2025</span>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              {/* /.post-meta */}
              <h6 className="post-title-detail">
                <span className="post-title-inner">
                  Essential AC Maintenance Tips for Riyadh Residents
                </span>
              </h6>
              {/* /.post-title */}
              <div className="post-content">
                <p>
                  Living in Riyadh means your air conditioner works overtime for most of the year. With summer temperatures regularly exceeding 45°C, a well-maintained AC is not just a luxury — it's a necessity. At Al Madina Tabreed, we've been helping Riyadh residents keep their homes cool and comfortable with professional AC repair and maintenance services.
                </p>
                <p>
                  Regular maintenance is the key to extending the lifespan of your air conditioning unit and avoiding costly emergency repairs. Here are our top recommendations for keeping your AC in peak condition throughout the year.
                </p>
              </div>
              {/* /.post-excerpt */}
              <div className="post-author">
                <p>
                  Schedule professional maintenance at least twice a year — before summer and before winter. Our technicians perform thorough inspections, clean critical components, and identify potential issues before they become major problems.
                </p>
                <Link href={`/team`} className="tittle author">
                  Al Madina Tabreed
                </Link>
              </div>
              <div className="post-content style1">
                <p>
                  Start by checking and cleaning the air filters every month during peak summer. Dirty filters restrict airflow and force your unit to work harder, increasing energy bills by up to 15%. Keep the outdoor condenser unit clear of debris, dust, and plants to ensure proper heat exchange. Listen for unusual sounds like grinding or squealing, which could indicate worn-out bearings or motor issues.
                </p>
                <p>
                  If you notice weak airflow, warm air blowing, or water leaking around the indoor unit, it's time to call our expert technicians. These symptoms often indicate refrigerant leaks, clogged drain lines, or failing compressors that require professional attention.
                </p>
              </div>
              <div className="post-img">
                <Image
                  alt="Image"
                  src="/assets/img/post/post-6.jpg"
                  width={770}
                  height={450}
                />
              </div>
              <h6 className="post-title-detail style1">
                <span className="post-title-inner">
                  When to Call a Professional
                </span>
              </h6>
              {/* /.post-title */}
              <div className="post-content style2">
                <p>
                  While some maintenance tasks like filter cleaning can be done yourself, many AC issues require professional expertise. If your AC is blowing warm air, making strange noises, leaking water, or has a foul smell when running, contact Al Madina Tabreed immediately. Our certified technicians have the tools and experience to diagnose and fix any AC problem quickly and efficiently.
                </p>
                <p>
                  We offer same-day service across Riyadh, including Ar Rayyan, Al Olaya, Al Malaz, and surrounding neighborhoods. Regular professional servicing not only extends the life of your AC but also improves indoor air quality and prevents unexpected breakdowns during the hottest days.
                </p>
              </div>
              <ul>
                <li>
                  <span>
                    <i className="fa fa-check" /> Clean or replace air filters monthly
                  </span>
                </li>
                <li>
                  <span>
                    <i className="fa fa-check" /> Schedule professional maintenance twice yearly
                  </span>
                </li>
                <li>
                  <span>
                    <i className="fa fa-check" /> Keep outdoor unit clear of debris
                  </span>
                </li>
                <li>
                  <span>
                    <i className="fa fa-check" /> Call experts at the first sign of trouble
                  </span>
                </li>
              </ul>
              <div className="post-tags-socials clearfix">
                <div className="post-tags">
                  <span className="title">Related Tags :</span>
                  <div>
                    <span className="tag-name">
                      AC Repair. AC Maintenance. Riyadh. Appliance Care
                    </span>
                  </div>
                </div>
                <div className="post-socials">
                  <span className="title"> Share :</span>
                  <div className="socical-icon">
                    <a href="#" className="facebook">
                      <i className="fa fa-facebook" />
                    </a>
                    <a href="#" className="twitter">
                      <i className="fa fa-twitter" />
                    </a>
                    <a href="#" className="linkedin">
                      <i className="fa fa-google-plus" />
                    </a>
                    <a href="#" className="pinterest">
                      <i className="fa fa-instagram" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* /.post-content-wrap */}
          </article>
          {/* /.hentry */}
          <div id="comments" className="comments-area">
            <h2 className="comments-title">COMMENTS</h2>
            <ol className="comment-list">
              <li className="comment">
                <article className="comment-wrap clearfix">
                  <div className="gravatar">
                    <Image
                      alt="image"
                      src="/assets/img/comment/comment-1.png"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="comment-content">
                    <div className="comment-meta">
                      <h6 className="comment-author">Khalid Al Otaibi</h6>
                      <span className="comment-time">March 16, 2025</span>
                    </div>
                    <div className="comment-text">
                      <p>
                        Great tips! I followed your advice about cleaning the filters and noticed an immediate improvement in cooling. Highly recommend Al Madina Tabreed for anyone in Riyadh needing AC service.
                      </p>
                      <span className="comment-reply">
                        <a className="comment-reply-link" href="#">
                          Reply
                        </a>
                      </span>
                    </div>
                  </div>
                </article>
                <ul className="children">
                  <li className="comment">
                    <article className="comment-wrap clearfix">
                      <div className="gravatar">
                        <Image
                          alt="image"
                          src="/assets/img/comment/comment-2.png"
                          width={100}
                          height={100}
                        />
                      </div>
                      <div className="comment-content">
                        <div className="comment-meta">
                          <h6 className="comment-author">Al Madina Tabreed</h6>
                          <span className="comment-time style-2">
                            March 17, 2025
                          </span>
                        </div>
                        <div className="comment-text">
                          <p>
                            Thank you, Khalid! We're glad the tips helped. Don't hesitate to reach out if you ever need professional AC repair or maintenance.
                          </p>
                          <span className="comment-reply">
                            <a className="comment-reply-link" href="#">
                              Reply
                            </a>
                          </span>
                        </div>
                      </div>
                    </article>
                  </li>
                  {/* #comment-## */}
                </ul>
                {/* .children */}
              </li>
              {/* #comment-## */}
            </ol>
            {/* /.comment-list */}
            <CommentForm />
            {/* #respond */}
          </div>
          {/*/#comments */}
        </div>
        {/* /#inner-content */}
      </div>
      {/* /#site-content */}
      <Sidebar />
      {/* /#sidebar */}
    </div>
  );
}
