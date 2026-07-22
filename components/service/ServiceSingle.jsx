"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ServiceSingle({ service }) {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const phone = formData.phone.replace(/\s/g, "");
    const text = encodeURIComponent(`Hello Al Madina Tabreed, I need ${service.title} service. My name is ${formData.name}. ${formData.message}`);
    window.open(`https://wa.me/966583086233?text=${text}`, "_blank");
    setSubmitted(true);
    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <div id="content-wrap" className="container">
      <div id="sidebar">
        <div id="inner-sidebar" className="inner-content-wrap">
          <div className="widget widget_category style-2 widget no-sep">
            <h3 className="widget-title">
              <span>Our Services</span>
            </h3>
            <ul className="list-category">
              <li>
                <Link href={`/service/ac-repair`}>AC Repair</Link>
              </li>
              <li>
                <Link href={`/service/refrigerator-repair`}>Refrigerator Repair</Link>
              </li>
              <li>
                <Link href={`/service/washing-machine-repair`}>Washing Machine Repair</Link>
              </li>
            </ul>
          </div>
          <div className="widget widget_get-a-quote">
            <h3 className="widget-title">
              <span>Request Service</span>
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="name">
                <input
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="email">
                <input
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="message">
                <textarea
                  name="message"
                  placeholder="Describe your issue"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  required
                />
              </div>
              <button type="submit" className="btn-send">
                Send via WhatsApp
              </button>
              {submitted && (
                <p style={{ color: "rgb(52, 168, 83)", marginTop: 10, fontSize: 13 }}>
                  Thank you! A WhatsApp window will open to complete your request.
                </p>
              )}
            </form>
          </div>
          <div className="themesflat-spacer clearfix" data-desktop={0} data-mobile={60} data-smobile={60} />
          <div className="widget">
            <h3 className="widget-title">
              <span>Contact Us</span>
            </h3>
            <div className="textwidget">
              <p><strong>Phone:</strong><br /><a href="tel:+966583086233">+966 58 308 6233</a></p>
              <p><strong>Address:</strong><br />Prince Majed Bin Abdulaziz Rd,<br />Ar Rayyan, Riyadh 14214</p>
            </div>
          </div>
        </div>
      </div>

      <div id="site-content" className="site-content clearfix">
        <div id="inner-content" className="inner-content-wrap">
          <article className="hentry data-effect">
            <div className="post-media clerafix">
              <Image
                alt={service.title}
                width={770}
                height={500}
                src={service.imageSrc}
              />
            </div>
            <div className="post-content-wrap clearfix">
              <h1 className="post-title-detail style-2">
                <span className="post-title-inner">
                  <span>{service.title}</span>
                </span>
              </h1>
              <div className="post-content margin-bottom-51">
                <p>{service.longDescription}</p>
              </div>

              <h3 className="post-title-service-detail">
                <span className="post-title-inner">
                  What We Offer
                </span>
              </h3>
              <div className="post-content margin-bottom-32">
                <ul>
                  {service.features.map((feature, i) => (
                    <li key={i} style={{ marginBottom: 8 }}>
                      <span>
                        <i className="fa fa-check" style={{ color: "#28a745", marginRight: 8 }} />
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <h3 className="post-title-service-detail">
                <span className="post-title-inner">
                  Why Choose Al Madina Tabreed?
                </span>
              </h3>
              <div className="post-content margin-bottom-40">
                <p>
                  We are a trusted appliance repair company serving Riyadh with years of experience,
                  certified technicians, and a commitment to customer satisfaction. All our work is
                  backed by a service warranty, and we offer transparent pricing with free estimates.
                  Whether you need emergency repair or scheduled maintenance, we are here to help.
                </p>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div
                    className="themesflat-spacer clearfix"
                    data-desktop={30}
                    data-mobile={30}
                    data-smobile={30}
                  />
                  <div className="text-center">
                    <Link href={`/contact`} className="btn get-a-quote">
                      Book a Service
                    </Link>
                  </div>
                  <div
                    className="themesflat-spacer clearfix"
                    data-desktop={60}
                    data-mobile={60}
                    data-smobile={60}
                  />
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
