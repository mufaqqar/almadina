"use client";
import { menuItems } from "@/data/menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/components/common/LanguageContext";
import React from "react";

export default function MobileNav() {
  const { t } = useLanguage();
  const handleFaqOpen = (activeMenu) => {
    const mobileMenu = document.querySelector("#main-nav-mobi .menu");
    const menuItemGroups = document.querySelectorAll(
      "#main-nav-mobi .menu-item-has-children"
    );

    if (menuItemGroups) {
      menuItemGroups.forEach((elm) => {
        elm.querySelector(".sub-menu").style.height = "0px";
      });
      const currentFaq = menuItemGroups[activeMenu];
      const faqContent = currentFaq.querySelector(".sub-menu");
      const computedStyle = window.getComputedStyle(faqContent);

      if (currentFaq && computedStyle.height === "0px") {
        faqContent.style.height = faqContent.scrollHeight + "px";
      } else if (currentFaq && !computedStyle.height === "0px") {
        faqContent.style.height = 0 + "px";
      }
    }

    mobileMenu.style.height = "fit-content";
  };
  const pathname = usePathname();
  const checkActiveLink = (item) => {
    let isactive = false;
    if (item.subMenu?.length) {
      if (
        item.subMenu.some(
          (elm) => elm.href.split("/")[1] == pathname.split("/")[1]
        )
      ) {
        isactive = true;
      }
    } else {
      if (item.href.split("/")[1] == pathname.split("/")[1]) {
        isactive = true;
      }
    }
    return isactive;
  };

  return (
    <nav id="main-nav-mobi" className="mainnav">
      <ul className="menu" id="menu-primary-menu">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={`menu-item ${
              item.subMenu ? "menu-item-has-children" : ""
            }`}
          >
            {item.subMenu ? (
              <a
                href="#"
                onClick={() => handleFaqOpen(index)}
                className={`${item.subMenu ? "down" : ""} ${
                  checkActiveLink(item) ? "active" : ""
                } `}
              >
                {t(item.titleKey)}
              </a>
            ) : (
              <Link
                href={item.href}
                className={` ${checkActiveLink(item) ? "active" : ""} `}
              >
                {t(item.titleKey)}
              </Link>
            )}
            {item.subMenu ? (
              <span
                onClick={() => handleFaqOpen(index)}
                className="arrow"
              ></span>
            ) : (
              ""
            )}
            {item.subMenu && (
              <ul className="sub-menu">
                {item.subMenu.map((subItem, subIndex) => (
                  <li key={subIndex} className="menu-item">
                    <Link
                      href={subItem.href}
                      className={checkActiveLink(subItem) ? "active" : ""}
                    >
                      {t(subItem.titleKey)}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      {/* /.menu */}
    </nav>
  );
}
