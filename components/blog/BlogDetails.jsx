"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import CommentForm from "./CommentForm";
import { blogPosts } from "@/data/blogs";
import Sidebar from "./Sidebar";
import { useLanguage } from "../common/LanguageContext";
export default function BlogDetails() {
  const { t } = useLanguage();
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
              <h6 className="post-title-detail">
                <span className="post-title-inner">
                  {t("post1Title")}
                </span>
              </h6>
              <div className="post-content">
                <p>{t("post1Content")}</p>
              </div>
              <div className="post-author">
                <p>{t("post1Content")}</p>
                <Link href={`/team`} className="tittle author">
                  Al Madina Tabreed
                </Link>
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
                  {t("post2Title")}
                </span>
              </h6>
              <div className="post-content style2">
                <p>{t("post3Content")}</p>
              </div>
              <div className="post-tags-socials clearfix">
                <div className="post-tags">
                  <span className="title">{t("relatedTags") || "Related Tags :"}</span>
                  <div>
                    <span className="tag-name">
                      AC Repair. AC Maintenance. Riyadh. Appliance Care
                    </span>
                  </div>
                </div>
                <div className="post-socials">
                  <span className="title">{t("share") || " Share :"}</span>
                  <div className="socical-icon">
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="facebook">
                      <i className="fa fa-facebook" />
                    </a>
                    <a href="https://g.page/r/almadinatabreed" target="_blank" rel="noopener noreferrer" className="google">
                      <i className="fa fa-google" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </article>
          <div id="comments" className="comments-area">
            <h2 className="comments-title">{t("comments") || "COMMENTS"}</h2>
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
                      <p>{t("aboutText3")}</p>
                      <span className="comment-reply">
                        <a className="comment-reply-link" href="#">
                          {t("reply") || "Reply"}
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
                          <p>{t("aboutText3")}</p>
                          <span className="comment-reply">
                            <a className="comment-reply-link" href="#">
                              {t("reply") || "Reply"}
                            </a>
                          </span>
                        </div>
                      </div>
                    </article>
                  </li>
                </ul>
              </li>
            </ol>
            <CommentForm />
          </div>
        </div>
      </div>
      <Sidebar />
    </div>
  );
}
