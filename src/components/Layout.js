import React from "react";
// import Menu from "./Menu";
// import SEO from "./SEO";
import MobileMenu from "./MobileMenu";
import Header from "./Header";
import Footer from "./Footer";
import Bottom from "./Bottom";
import "../scss/style.scss";
import "../scss/config.css";
import "../../static/fonts/fonts.css";

export default function Layout({ location, children }) {
  return (
    <>
      {/* <SEO /> */}
      <MobileMenu />
      <header id="header" className={(location.pathname === '/') ? "header header-fixed" : "header" }>
        <Header location={location} />
      </header>
      <div id="wrapper" className="wrapper">
        {children}
      </div>
      <Footer />
      <Bottom />
    </>
  );
}
