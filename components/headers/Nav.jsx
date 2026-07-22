"use client";
import { menuItems } from "@/data/menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/components/common/LanguageContext";
import React from "react";

export default function Nav() {
  const { t } = useLanguage();
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
    <>
      {menuItems.map((item, index) => (
        <li
          key={index}
          className={`menu-item ${
            item.subMenu ? "menu-item-has-children" : ""
          }`}
        >
          <Link
            href={item.href}
            className={`${item.subMenu ? "down" : ""} ${
              checkActiveLink(item) ? "active" : ""
            } `}
          >
            {t(item.titleKey)}
          </Link>
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
    </>
  );
}
