import { Container } from "@mui/material";
import React from "react";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <Container>
      <nav>
        <ul>
          <li>Item</li>
          <li>Item</li>
          <li>Item</li>
        </ul>
      </nav>
      {children}
      <footer>Lorem ipsum dolor sit amet. </footer>
    </Container>
  );
}
