"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Sidebar from "./Sidebar";
import { blogPosts2 } from "@/data/blogs";
import { useLanguage } from "../common/LanguageContext";
export default function Blogs() {
  const { t } = useLanguage();
  return (
    <div id="content-wrap" className="container">
      <div id="site-content" className="site-content clearfix">
        <div id="inner-content" className="inner-content-wrap">
          {blogPosts2.map((post) => (
            <article
              key={post.id}
              className={`hentry ${
                post.marginTop ? "margin-top-33 padding-top-45" : ""
              } data-effect`}
            >
              <div
                className={`post-media ${
                  post.hasEffectIcon
                    ? "data-effect-item has-effect-icon offset-v-25 offset-h-24"
                    : ""
                } clerafix`}
              >
                <Link href={`/blog-detail`}>
                  <Image
                    alt="Image"
                    src={post.imageSrc}
                    width={770}
                    height={450}
                  />
                </Link>
              </div>
              <div className="post-content-wrap clearfix">
                <div className="post-meta">
                  <div className="post-meta-content">
                    <div className="post-meta-content-inner">
                      <span className="post-by-author item">
                        user{" "}
                        <span className="inner">
                          <a href="#"> BY ADMIN</a>
                        </span>
                      </span>
                      <span className="post-date item">
                        <span className="inner">
                          <span className="entry-date">{post.date}</span>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <h6 className="post-title">
                  <span className="post-title-inner">
                    <Link href={`/blog-detail`}>{post.title}</Link>
                  </span>
                </h6>
                <div className="post-content">
                  <p>{post.content}</p>
                </div>
                <div className="post-read-more">
                  <div className="post-link">
                    <Link href={`/blog-detail`}>{t("readMoreBtn")}</Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
          <div className="themesflat-pagination clearfix">
            <ul>
              <li>
                <a href="#" className="page-numbers prev">
                  <span className="fa fa-angle-left" />
                </a>
              </li>
              <li>
                <a href="#" className="page-numbers current">
                  1
                </a>
              </li>
              <li>
                <a href="#" className="page-numbers">
                  2
                </a>
              </li>
              <li>
                <a href="#" className="page-numbers">
                  3
                </a>
              </li>
              <li>
                <a href="#" className="page-numbers">
                  ...
                </a>
              </li>
              <li>
                <a href="#" className="page-numbers">
                  10
                </a>
              </li>
              <li>
                <a href="#" className="page-numbers next">
                  <span className="fa fa-angle-right" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Sidebar />
    </div>
  );
}
