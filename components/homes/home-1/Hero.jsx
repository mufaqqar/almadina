"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Link from "next/link";
const slides = [
  {
    imgSrc: "/assets/img/slider/slider.jpeg",
    imgAlt: "Image ",
    captionTitle: "Fast. Reliable. Affordable.",
    captionSubtitle: "Expert appliance repair services across Riyadh.",
    description:
      "Tabreed Mahal is a trusted name in AC repair, refrigerator repair, and automatic washing machine repair in Riyadh. We provide fast, reliable, and affordable service for all major brands.",
    btnText: "Get A Quote",
  },
  {
    imgSrc: "/assets/img/slider/slider.2.jpg",
    imgAlt: "Image ",
    captionTitle: "Professional Repair, Peace of Mind",
    captionSubtitle: "Your appliances are in expert hands.",
    description:
      "At Tabreed Mahal, we bring professional expertise and same-day service to keep your home running smoothly. AC, fridge, or washing machine — we fix it all.",
    btnText: "Get A Quote",
  },
  // Add more slides as needed
];
export default function Hero() {
  return (
    <div className="swiper-container fullwidthbanner-container hero hero-1 rev_slider">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000 }}
        modules={[Navigation, Pagination]}
        pagination={{
          el: ".spd22",
          bulletActiveClass: "selected",
          clickable: true,
          renderBullet: (index, className) => {
            return `<div class="tp-bullet ${className}">${index + 1}</div>`;
          },
          type: "bullets",
        }}
        navigation={{
          prevEl: ".snbp22",
          nextEl: ".snbn22",
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide className="swiper-slide" key={index}>
            <div className="container">
              <div className="img-container ">
                <Image
                 alt={slide.imgAlt}
                  src={slide.imgSrc}
                  width={620}
                  height={572}
                  className="rounded-full img-slider rounded-2xl"
                />
              </div>
              <div className="content">
                <div className="text-green font-heading font-weight-500">
                  <span className="heading-tittle">{slide.captionTitle}</span>
                </div>
                <div className="text-black font-heading font-weight-400">
                  <span className="tittle1">{slide.captionSubtitle}</span>
                </div>
                <div className="line" />
                <div
                  className="text-black font-heading font-weight-400 description"
                  dangerouslySetInnerHTML={{ __html: slide.description }}
                ></div>
                <div className="">
                  <Link href={`/contact`} className="btn get-a-quote">
                    {slide.btnText}
                  </Link>
                </div>{" "}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="tp-bullets custom horizontal nav-pos-hor-center nav-pos-ver-bottom nav-dir-horizontal noSwipe spd22"></div>

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
  );
}
