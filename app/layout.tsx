import type { Metadata } from "next";
import Local from "next/font/local";

import App from "@/componens/app/App";
const local = Local({ src: "../public/font/Vazirmatn-Regular.woff2" });

import "./globals.css";

export const metadata: Metadata = {
  title: "نوبت دهی",
  description: "نوبت دهی کلینیک خیریه سلامتی من",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/images/favicon.png",
        href: "/images/favicon.png",
      },
      // {
      //   media: '(prefers-color-scheme: dark)',
      //   url: '/images/icon.png',
      //   href: '/images/icon-dark.png',
      // },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className={local.className}>
        <App>
          <main>{children}</main>
        </App>
      </body>
    </html>
  );
}
