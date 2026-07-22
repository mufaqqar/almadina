import React from "react";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/services";
export default function Services() {
  return (
    <div className="row-service">
      <div className="service">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div
                className="themesflat-spacer clearfix"
                data-desktop={114}
                data-mobile={60}
                data-smobile={60}
              />
              <div className="themesflat-headings style-1 text-center wow fadeInUp clearfix relative">
                <h1 className="heading">SERVICES FOR YOU</h1>
                <p className="sub-heading">
                  Fonsetetur sadipscing elitr, sed diam nonumy eirmod tempor
                  invidunt ut
                  <br />
                  labore et dolore magna aliquyam
                </p>
              </div>
            </div>
            {/* /.col-md-12 */}
          </div>
          {/* /.row */}
        </div>
      </div>
      <div id="service-inner" className="container">
        <div className="row">
          {services.map((service) => (
            <div className="col-md-4" key={service.id}>
              <div
                className={`box-service ${service.active ? "active" : ""} wow ${
                  service.animation
                }`}
              >
                <div className="service-inner-img">
                  <div className="img-overlay" />
                  <Image
                    alt="Image"
                    width={370}
                    height={240}
                    src={service.imageSrc}
                  />
                </div>
                <div className="service-inner-text">
                  <div className={`icon ${service.iconClass}`} />
                  <div className="text-wrap">
                    <h3 className="heading">
                      <Link href={`/service/${service.slug}`}>{service.title}</Link>
                    </h3>
                    <div className="sep clearfix" />
                    <p className="sub-heading">{service.description}</p>
                  </div>
                  <Link href={`/service/${service.slug}`} className="service-read-more">
                    Read More <i className="fa fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
    </div>
  );
}
