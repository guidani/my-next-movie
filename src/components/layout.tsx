import React from "react";
import Footer from "./footer";
import Navbar from "./navbar";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <React.Fragment>
      <Navbar />
      {children}
      <Footer/>
    </React.Fragment>
  );
}
