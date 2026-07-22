"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import BacktoTop from "./BacktoTop";

export default function ClientLayout() {
  const pathname = usePathname();

  useEffect(() => {
    const updateSpacerHeights = () => {
      let mode = "desktop";
      if (window.matchMedia("(max-width: 991px)").matches) mode = "mobile";
      if (window.matchMedia("(max-width: 767px)").matches) mode = "smobile";

      document.querySelectorAll(".themesflat-spacer").forEach((el) => {
        const height =
          mode === "desktop"
            ? el.dataset.desktop
            : mode === "mobile"
            ? el.dataset.mobile
            : el.dataset.smobile;

        el.style.height = `${height}px`;
      });
    };

    window.addEventListener("load", updateSpacerHeights);
    window.addEventListener("resize", updateSpacerHeights);
    updateSpacerHeights();

    return () => {
      window.removeEventListener("load", updateSpacerHeights);
      window.removeEventListener("resize", updateSpacerHeights);
    };
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("#site-header-wrap #site-header");
      if (header) {
        if (window.scrollY >= 100) {
          header.classList.add("is-fixed");
        } else {
          header.classList.remove("is-fixed");
        }
        if (window.scrollY >= 200) {
          header.classList.add("is-small");
        } else {
          header.classList.remove("is-small");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <BacktoTop />;
}
