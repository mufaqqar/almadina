import { blogPosts } from "@/data/blogs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Sidebar() {
  return (
    <div id="sidebar">
      <div
        className="themesflat-spacer clearfix"
        data-desktop={0}
        data-mobile={60}
        data-smobile={60}
      />
      <div id="inner-sidebar" className="inner-content-wrap">
        <div className="widget widget_search">
          <h3 className="widget-title">
            <span>Search</span>
          </h3>
          <form action="#" role="search" className="search-form style-1">
            <input
              type="search"
              className="search-field"
              placeholder="Search here"
              defaultValue=""
              name="s"
              title="Search for"
            />
            <button className="search-submit" type="submit" title="Search">
              Search
            </button>
          </form>
        </div>
        {/* /.widget_search */}
        <div className="widget widget_category">
          <h3 className="widget-title">
            <span>Category</span>
          </h3>
            <ul className="list-category">
            <li>
              <Link href={`/blog`}>AC Repair</Link>
            </li>
            <li>
              <Link href={`/blog`}>Refrigerator Repair</Link>
            </li>
            <li>
              <Link href={`/blog`}>Washing Machine Repair</Link>
            </li>
            <li>
              <Link href={`/blog`}>Maintenance Tips</Link>
            </li>
            <li>
              <Link href={`/blog`}>Appliance Care</Link>
            </li>
          </ul>
        </div>
        {/* /.widget_category */}
        <div className="widget widget_recent_news">
          <h3 className="widget-title">
            <span>Recent News</span>
          </h3>
          <ul className="lastest-posts">
            {blogPosts.map((post) => (
              <li key={post.id} className={post.id === 2 ? "clearfix" : ""}>
                <div className="thumb data-effect-item has-effect-icon">
                  <Image
                    alt="Image"
                    src={post.imageSrc}
                    width={75}
                    height={70}
                   
                  />
                  {post.hasIcon && (
                    <div className="elm-link">
                      <Link href={`/blog-detail`} className="icon-2" />
                    </div>
                  )}
                </div>
                <div className="text">
                  <h4>
                    <Link href={`/blog-detail`}>{post.title}</Link>
                  </h4>
                  <span className="post-date">
                    <span className="entry-date">{post.date}</span>
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {/* /.widget_recent_news */}
        <div id="widget-banner" className="widget-banner clearfix">
          <div id="widget-banner-inner" className="container clearfix">
            <div className="widget-banner-inner-wrap">
              <h5 className="your-headline-here">Need Appliance Repair?</h5>
              <div className="btn your-headline-here">
                <Link href={`/contact`}>Get A Quote</Link>
              </div>
            </div>
            {/* /.header-banner-inner-wrap */}
          </div>
          {/* /widget-banner-inner */}
        </div>
        {/* /.widget_your-headline-here */}
      </div>
    </div>
  );
}
