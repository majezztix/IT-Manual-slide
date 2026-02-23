import type { Metadata, Viewport } from "next";
import { Noto_Sans, Noto_Sans_Thai } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const notoSansThai = Noto_Sans_Thai({
  variable: "--font-noto-sans-thai",
  subsets: ["thai"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "IT Manual - MS Teams Planner",
    template: "%s | IT Manual",
  },
  description:
    "IT Staff manual for MS Teams Planner task management. คู่มือสำหรับ IT Staff ในการจัดการงานผ่าน MS Teams Planner",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a1a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${notoSans.variable} ${notoSansThai.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
