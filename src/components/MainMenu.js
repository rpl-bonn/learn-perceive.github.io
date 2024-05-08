import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";

const MainMenu = (props) => {
  const data = useStaticQuery(graphql`
    query MainMenuQuery {
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
    <div className="menu-main">
      <ul>
        {data.allMainMenuJson.edges.map(({ node }) => (
          <li className={(props.location.pathname === node.url) ? "active" : ""} key={node.url}>
            <Link to={node.url}>
              {node.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MainMenu;
