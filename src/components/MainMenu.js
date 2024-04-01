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
  console.log(props);
  return (
    <div className="menu-main">
      <ul>
        {data.allMainMenuJson.edges.map(({ node }) => (
          <li key={node.url}>
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
