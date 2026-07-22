"use client";
import Link from "next/link";
import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const slides = [
  {
    imgSrc: "/assets/img/slider/slider-1_.png",
    imgAlt: "Image 1",
    captionTitle: "CONSEQUAT VEL PORTA",
    captionSubtitle: "TURN UP THE BRIGHTNESS </br/>TURN  UP THE SOLAR POWER.",
    description:
      "Fonsetetur sadipscing elitr, sed diam nonumy eirmod tempor <br/> invidunt ut labore et dolore magna aliquyam",
    btnText: "Get A Quote",
  },
  {
    imgSrc: "/assets/img/slider/slider-1_.png",
    imgAlt: "Image 2",
    captionTitle: "CONSEQUAT VEL PORTA",
    captionSubtitle: "TURN UP THE BRIGHTNESS </br/>TURN  UP THE SOLAR POWER.",
    description:
      "Fonsetetur sadipscing elitr, sed diam nonumy eirmod tempor <br/> invidunt ut labore et dolore magna aliquyam",
    btnText: "Get A Quote",
  },
  // Add more slides as needed
];
export default function Hero() {
  return (
    <div className=" container-fluid hero hero2">
      <div id="rev-slider2" className="rev_slider ">
        <Swiper
          modules={[Navigation, Pagination]}
          pagination={{
            el: ".spd22",
            bulletActiveClass: "selected",
            clickable: true,
            renderBullet: (index, className) => {
              return `<div class="tp-bullet ${className}">${index + 1}</div>`;
            },
          }}
          navigation={{
            prevEl: ".snbp22",
            nextEl: ".snbn22",
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="container">
                <div className="content">
                  <div className="text-green font-heading font-weight-500">
                    <span className="heading-tittle">{slide.captionTitle}</span>
                  </div>
                  <div className="text-black font-heading font-weight-400">
                    <span
                      className="tittle1"
                      dangerouslySetInnerHTML={{
                        __html: slide.captionSubtitle,
                      }}
                    ></span>
                  </div>
                  <div className="line" />
                  <div
                    className="text-black font-heading font-weight-400"
                    dangerouslySetInnerHTML={{ __html: slide.description }}
                  ></div>
                  <div className="">
                    <a href="https://wa.me/966535251023" target="_blank" rel="noopener noreferrer" className="btn get-a-quote">
                      {slide.btnText}
                    </a>
                  </div>{" "}
                </div>{" "}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="tp-bullets custom2 horizontal nav-pos-hor-left nav-pos-ver-bottom nav-dir-horizontal noSwipe spd22"></div>

        {/* Add Navigation if needed */}
        <div
          className="tp-leftarrow tparrows custom  noSwipe snbp22"
          style={{
            top: "50%",
            transform: "matrix(1, 0, 0, 1, 120, -30)",
            left: 0,

            opacity: 1,
          }}
        />
        <div
          className="tp-rightarrow tparrows custom  noSwipe snbn22"
          style={{
            top: "50%",
            transform: "matrix(1, 0, 0, 1, -180, -30)",
            left: "100%",

            opacity: 1,
          }}
        />
      </div>
    </div>
  );
}
