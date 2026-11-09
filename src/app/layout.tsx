import type { Metadata, Viewport } from "next";
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://mohiuddinshanto.epicoptimize.com";
const siteTitle = "Mohiuddin Shanto | Full-Stack & MERN Stack Developer";
const siteDescription =
  "Mohiuddin Shanto is a full-stack and MERN stack developer in Dhaka, Bangladesh. Explore his Next.js, React, Node.js, Express, MongoDB, and WordPress projects.";

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: {
    default: siteTitle,
    template: "%s | Mohiuddin Shanto",
  },
  description: siteDescription,
  applicationName: "Mohiuddin Shanto Portfolio",
  authors: [{ name: "Mohiuddin Shanto", url: "https://github.com/mohiuddinshanto" }],
  creator: "Mohiuddin Shanto",
  publisher: "Mohiuddin Shanto",
  keywords: [
    "Mohiuddin Shanto",
    "MERN stack developer",
    "full-stack developer Bangladesh",
    "Next.js developer Dhaka",
    "React developer Bangladesh",
    "Node.js developer",
    "WordPress developer Bangladesh",
    "web developer portfolio",
  ],
  alternates: siteUrl ? { canonical: "/" } : undefined,
  openGraph: {
    type: "website",
    locale: "en_US",
    title: siteTitle,
    description: siteDescription,
    siteName: "Mohiuddin Shanto Portfolio",
    url: siteUrl,
    images: [
      {
        url: "/assets/Mohiuddin%20Shanto%20Github%20Profile.png",
        width: 512,
        height: 512,
        alt: "Mohiuddin Shanto, full-stack developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/assets/Mohiuddin%20Shanto%20Github%20Profile.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#050403",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Montserrat:wght@500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
