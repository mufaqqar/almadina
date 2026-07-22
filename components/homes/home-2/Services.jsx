import React from "react";
import Link from "next/link";
import Image from "next/image";
import { services } from "@/data/services";
export default function Services() {
  return (
    <div className="row-service style-2">
      <div className="service">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div
                className="themesflat-spacer clearfix"
                data-desktop={113}
                data-mobile={60}
                data-smobile={7}
              />
              <div className="themesflat-headings style-1 text-center wow fadeInUp clearfix relative">
                <span className="heading-shadown-text">SERVICES</span>
                <h1 className="heading margin-bottom-12">SERVICES FOR YOU</h1>
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
              <div className={`box-service wow ${service.animation}`}>
                <div className="service-inner-img">
                  <div className="img-overlay" />
                  <Image
                    alt="Image"
                    src={service.imageSrc}
                    width={370}
                    height={240}
                  />
                </div>
                <div className="service-inner-text">
                  <div className="text-wrap">
                    <div className={`icon-service ${service.iconClass}`} />
                    <div>
                      <h3 className={`heading ${service.headingStyle}`}>
                        <Link href={`/service-detail`}>{service.title}</Link>
                      </h3>
                      <p className="sub-heading">{service.description}</p>
                      <Link
                        href={`/service-detail`}
                        className="service-read-more"
                      >
                        Read More <i className="fa fa-arrow-right" />
                      </Link>
                    </div>
                  </div>
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
