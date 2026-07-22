import "../public/assets/main.css";
import "../public/assets/rtl.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import ClientLayout from "@/components/common/ClientLayout";
import { LanguageProvider } from "@/components/common/LanguageContext";

export const metadata = {
  metadataBase: new URL("https://almedinatabreed.com"),
  title: {
    default: "Al Madina Tabreed - AC & Appliance Repair in Riyadh",
    template: "%s | Al Madina Tabreed",
  },
  description:
    "Al Madina Tabreed offers expert AC repair, refrigerator repair, and washing machine repair services in Riyadh, Saudi Arabia. Fast, reliable, and affordable appliance repair.",
  keywords: [
    "AC repair Riyadh",
    "refrigerator repair Riyadh",
    "washing machine repair Riyadh",
    "appliance repair",
    "Al Madina Tabreed",
    "AC maintenance Riyadh",
    "same-day AC repair",
  ],
  authors: [{ name: "Al Madina Tabreed" }],
  creator: "Al Madina Tabreed",
  publisher: "Al Madina Tabreed",
  formatDetection: {
    telephone: true,
    address: true,
  },
  openGraph: {
    type: "website",
    locale: "en_SA",
    siteName: "Al Madina Tabreed",
    title: "Al Madina Tabreed - AC & Appliance Repair in Riyadh",
    description:
      "Expert AC repair, refrigerator repair, and washing machine repair services in Riyadh, Saudi Arabia.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Al Madina Tabreed - AC & Appliance Repair in Riyadh",
    description:
      "Expert AC repair, refrigerator repair, and washing machine repair services in Riyadh.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#003e81",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Teko:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.rawgit.com/daneden/animate.css/v3.1.0/animate.min.css"
        />
        <link
          rel="stylesheet"
          href="assets/owlcarousel/assets/owl.carousel.min.css"
        />
        <link
          rel="stylesheet"
          href="assets/owlcarousel/assets/owl.theme.default.min.css"
        />
      </head>
      <body>
        <LanguageProvider>
          {children}
          <ClientLayout />
        </LanguageProvider>
      </body>
    </html>
  );
}
