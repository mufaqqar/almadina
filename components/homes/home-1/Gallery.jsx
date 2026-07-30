"use client";
import React, { useState } from "react";
import Image from "next/image";

const images = [
  { id: 1, src: "/assets/01.jpg", alt: "Gallery Image 1" },
  { id: 2, src: "/assets/02.jpg", alt: "Gallery Image 2" },
  { id: 3, src: "/assets/03.jpg", alt: "Gallery Image 3" },
  { id: 4, src: "/assets/04.jpg", alt: "Gallery Image 4" },
  { id: 5, src: "/assets/05.jpg", alt: "Gallery Image 5" },
  { id: 6, src: "/assets/06.jpg", alt: "Gallery Image 6" },
];

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <div className="container" style={{ padding: "80px 0" }}>
        <div className="themesflat-headings style-1 text-center wow fadeInUp clearfix">
          <h1 className="heading">Our Gallery</h1>
          <p className="sub-heading">
            Take a look at our latest work
          </p>
        </div>
        <div
          className="row"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "15px",
            marginTop: 40,
          }}
        >
          {images.map((img) => (
            <div
              key={img.id}
              onClick={() => setSelected(img)}
              style={{
                cursor: "pointer",
                overflow: "hidden",
                borderRadius: 8,
                position: "relative",
                aspectRatio: "4 / 3",
              }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                style={{ objectFit: "cover", transition: "transform 0.3s" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.08)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              />
            </div>
          ))}
        </div>
      </div>

      {selected && (
        <div
          onClick={() => setSelected(null)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 99999,
            background: "rgba(0,0,0,0.85)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <div style={{ position: "relative", width: "80vw", maxWidth: 800, aspectRatio: "4 / 3" }}>
            <Image src={selected.src} alt={selected.alt} fill style={{ objectFit: "contain" }} />
          </div>
          <button
            onClick={() => setSelected(null)}
            style={{
              position: "absolute",
              top: 20,
              right: 30,
              background: "none",
              border: "none",
              color: "#fff",
              fontSize: 40,
              cursor: "pointer",
            }}
          >
            &times;
          </button>
        </div>
      )}
    </>
  );
}
