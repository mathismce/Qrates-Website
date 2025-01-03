import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
// const notoSans = localFont({
//   src: "./fonts/Noto-Sans-regular.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });
const notoBold = localFont({
  src: "./fonts/NotoSans-ExtraBold.ttf",
  variable: "--font-noto-bold",
  weight: "900",
});

export const metadata: Metadata = {
  title: "Qrates",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        
      >
        {children}
      </body>
    </html>
  );
}
