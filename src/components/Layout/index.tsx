import { ReactNode } from "react";
import { Footer } from "components/Footer";
import { NavBar } from "components/Navbar";

type LayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}
