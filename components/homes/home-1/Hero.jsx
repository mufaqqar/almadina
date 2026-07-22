"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useLanguage } from "@/components/common/LanguageContext";
export default function Hero() {
  const { t } = useLanguage();
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
        <SwiperSlide className="swiper-slide">
          <div className="container">
            <div className="img-container ">
              <Image
               alt=""
                src="/assets/ac-repair.jpg"
                width={620}
                height={572}
                className="rounded-full img-slider rounded-2xl"
              />
            </div>
            <div className="content">
              <div className="text-primary-custom font-heading font-weight-500">
                <span className="heading-tittle">{t("slide1Title")}</span>
              </div>
              <div className="text-black font-heading font-weight-400">
                <span className="tittle1">{t("slide1Subtitle")}</span>
              </div>
              <div className="line" />
              <div
                className="text-black font-heading font-weight-400 description"
                dangerouslySetInnerHTML={{ __html: t("slide1Desc") }}
              ></div>
              <div className="">
                <a href="https://wa.me/966535251023" target="_blank" rel="noopener noreferrer" className="btn get-a-quote">
                  {t("getAQuote")}
                </a>
              </div>{" "}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="container">
            <div className="img-container ">
              <Image
               alt=""
                src="/assets/ac-repair.jpg"
                width={620}
                height={572}
                className="rounded-full img-slider rounded-2xl"
              />
            </div>
            <div className="content">
              <div className="text-primary-custom font-heading font-weight-500">
                <span className="heading-tittle">{t("slide2Title")}</span>
              </div>
              <div className="text-black font-heading font-weight-400">
                <span className="tittle1">{t("slide2Subtitle")}</span>
              </div>
              <div className="line" />
              <div
                className="text-black font-heading font-weight-400 description"
                dangerouslySetInnerHTML={{ __html: t("slide2Desc") }}
              ></div>
              <div className="">
                <a href="https://wa.me/966535251023" target="_blank" rel="noopener noreferrer" className="btn get-a-quote">
                  {t("getAQuote")}
                </a>
              </div>{" "}
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="tp-bullets custom horizontal nav-pos-hor-center nav-pos-ver-bottom nav-dir-horizontal noSwipe spd22"></div>

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
