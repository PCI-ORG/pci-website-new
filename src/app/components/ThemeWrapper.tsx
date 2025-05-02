"use client";
import React, { useContext } from "react";
import { ThemeContext } from "./components/ThemeProvider";
import Header from "./components/Header";
import Footer from "./Footer";
import Floating from "./Floating";
import MyDrawer from "./components/Drawer";
export default function ThemeWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { dark } = useContext(ThemeContext);
  return (
    <div className={`${dark ? "dark" : ""}`}>
      <Header />
      {children}
      <Footer />
      <Floating />
      <MyDrawer />
    </div>
  );
}
