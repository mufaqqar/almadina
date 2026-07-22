"use client";
import { blogPosts } from "@/data/blogs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useLanguage } from "../common/LanguageContext";

export default function Sidebar() {
  const { t } = useLanguage();
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
            <span>{t("search") || "Search"}</span>
          </h3>
          <form action="#" role="search" className="search-form style-1">
            <input
              type="search"
              className="search-field"
              placeholder={t("searchHere") || "Search here"}
              defaultValue=""
              name="s"
              title="Search for"
            />
            <button className="search-submit" type="submit" title="Search">
              {t("search") || "Search"}
            </button>
          </form>
        </div>
        <div className="widget widget_category">
          <h3 className="widget-title">
            <span>{t("categories")}</span>
          </h3>
            <ul className="list-category">
            <li>
              <Link href={`/blog`}>{t("acTitle")}</Link>
            </li>
            <li>
              <Link href={`/blog`}>{t("fridgeTitle")}</Link>
            </li>
            <li>
              <Link href={`/blog`}>{t("washerTitle")}</Link>
            </li>
            <li>
              <Link href={`/blog`}>{t("maintenanceTips") || "Maintenance Tips"}</Link>
            </li>
            <li>
              <Link href={`/blog`}>{t("applianceCare") || "Appliance Care"}</Link>
            </li>
          </ul>
        </div>
        <div className="widget widget_recent_news">
          <h3 className="widget-title">
            <span>{t("recentPosts")}</span>
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
        <div id="widget-banner" className="widget-banner clearfix">
          <div id="widget-banner-inner" className="container clearfix">
            <div className="widget-banner-inner-wrap">
              <h5 className="your-headline-here">{t("needApplianceRepair") || "Need Appliance Repair?"}</h5>
              <div className="btn your-headline-here">
                <a href="https://wa.me/966535251023" target="_blank" rel="noopener noreferrer">{t("getAQuote")}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
