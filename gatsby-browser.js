import React from "react";
import { Script } from "gatsby";
import Layout from "./src/components/Layout";

// // Adds a class name to the body element
// exports.onRenderBody = ({ setBodyAttributes }, pluginOptions) => {
//   setBodyAttributes({
//     className: "page",
//   });
// };
// export const onRenderBody = ({ setBodyAttributes }, pluginOptions) => {
//   setBodyAttributes({
//     className: "page",
//   });
// };

export const wrapPageElement = ({ element, props }) => {
  return (
    <>
      <Script id="script-darkmode1" src="js/darkMode.js" />
      <Script id="script-darkmode2">{`localStorage.getItem('darkMode') === 'true' && document.documentElement.setAttribute('data-bs-theme', 'dark');`}</Script>
      <Script id="script-header" src="js/header.js" />
      <Script id="script-hamburger" src="js/hamburger.js" />
      <Layout {...props}>{element}</Layout>
    </>
  );
};
