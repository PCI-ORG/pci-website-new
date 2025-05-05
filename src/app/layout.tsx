import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ThemeProvider from "./ThemeProvider";
import ThemeWrapper from "./ThemeWrapper";
import MenuProvider from "./MenuProvider";

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

export const metadata: Metadata = {
  title: "Policy Change Index",
  description: "Data-driven policy insights. Made by GearFactory",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <MenuProvider>
            <ThemeWrapper>{children}</ThemeWrapper>
          </MenuProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
