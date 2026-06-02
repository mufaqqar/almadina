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
                  src="/assets/img/blog-detail.jpg"
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
                        <span className="entry-date">28 JANUARY, 2020</span>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              {/* /.post-meta */}
              <h6 className="post-title-detail">
                <span className="post-title-inner">
                  Social media-driven trading frenzy for GameStop, AMC
                  Entertainment sparks calls for scrutiny
                </span>
              </h6>
              {/* /.post-title */}
              <div className="post-content">
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam
                </p>
              </div>
              {/* /.post-excerpt */}
              <div className="post-author">
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua.
                </p>
                <Link href={`/team`} className="tittle author">
                  Marilyn Gilbert
                </Link>
              </div>
              <div className="post-content style1">
                <p>
                  labore et dolore magna aliquyam erat, sed diam voluptua. At
                  vero eos et accusam et justo duo dolores et ea rebum. Stet
                  clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                  dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                  sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                  labore et dolore magna aliquyam erat, sed diam voluptua. At
                  vero eos et accusam
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
                  AMC Entertainment sparks calls for scrutiny
                </span>
              </h6>
              {/* /.post-title */}
              <div className="post-content style2">
                <p>
                  labore et dolore magna aliquyam erat, sed diam voluptua. At
                  vero eos et accusam et justo duo dolores et ea rebum. Stet
                  clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                  dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                  sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                  labore et dolore magna aliquyam erat, sed diam voluptua. At
                  vero eos et accusam
                </p>
              </div>
              <ul>
                <li>
                  <span>
                    <i className="fa fa-check" /> sed diam nonumy eirmod tempor
                    invidunt ut labore et dolore magna aliquyam
                  </span>
                </li>
                <li>
                  <span>
                    <i className="fa fa-check" /> Stet clita kasd gubergren, no
                    sea takimata sanctus
                  </span>
                </li>
                <li>
                  <span>
                    <i className="fa fa-check" /> Lorem ipsum dolor sit amet,
                    consetetur sadipscing elitr
                  </span>
                </li>
              </ul>
              <div className="post-tags-socials clearfix">
                <div className="post-tags">
                  <span className="title">Related Tags :</span>
                  <div>
                    <span className="tag-name">
                      Business. Corporate. Agency
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
                      <h6 className="comment-author">Aaron Holmes</h6>
                      <span className="comment-time">May 18</span>
                    </div>
                    <div className="comment-text">
                      <p>
                        Proin ac quam et lectus vestibulum blandit. Nunc maximus
                        nibh at placerat tincidunt. Nam sem lacus, ornare non
                        ante sed, ultricies fringilla massa. Ut congue, elit non
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
                          <h6 className="comment-author">Carol Sullivan</h6>
                          <span className="comment-time style-2">
                            December 22
                          </span>
                        </div>
                        <div className="comment-text">
                          <p>
                            Pellentesque habitant morbi tristique senectus et
                            netus et malesuada fames ac turpis egestas. Ut arcu
                            libero, pulvinar non
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
