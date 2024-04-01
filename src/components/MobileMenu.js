import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";

const MobileMenu = (props) => {
  const data = useStaticQuery(graphql`
    query MobileMenuQuery {
      allMainMenuJson {
        edges {
          node {
            name
            url
            weight
          }
        }
      }
    }
  `);
  return (
    <div className="menu-main-mobile" id="menu-main-mobile">
      <div className="menu-main-mobile-top">
        <div id="close-overlay" className="menu-main-close">
          <div className="hamburger hamburger-close"></div>
        </div>
      </div>
      <div className="menu-main-mobile-center">
        <ul className="menu">
          {data.allMainMenuJson.edges.map(({ node }) => (
            <li key={node.url}>
              <Link to={node.url}>{node.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
