import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Footer = (props) => {
  const data = useStaticQuery(graphql`
    query Footer2Query {
      allPrimaryFooterMenuJson {
        edges {
          node {
            weight
            url
            name
          }
        }
      }
      allSecondaryFooterMenuJson {
        edges {
          node {
            weight
            url
            name
          }
        }
      }
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md">
            <div className="footer-info">
              <h2>{data.site.siteMetadata.title}</h2>
              <p>{data.site.siteMetadata.description}</p>
                {/* <div className="section-heading">
            <h2>{"part of"}</h2>
          </div> */}
                <div className="row justify-content-left align-items-center">
                  <div className="image-light col-5 text-center mb-1 mt-1">
                    <StaticImage
                      src="../images/unibonn.png"
                      alt="Uni Bonn"
                      height="80px"
                    />
                  </div>
                  <div className="image-invert col-5 text-center mb-1 mt-1">
                    <StaticImage
                      src="../images/unibonn_neg.png"
                      alt="Uni Bonn"
                      height="80px"
                    />
                  </div>
                  <div className="image-light col-5 text-center mb-1 mt-1">
                    <StaticImage
                      src="../images/lamarr-logo-2023.png"
                      alt="Lamarr Institute"
                      height="80px"
                    />
                  </div>
                  <div className="image-invert col-5 text-center mb-1 mt-1">
                    <StaticImage
                      src="../images/lamarr-logo-2023-negative.png"
                      alt="Lamarr Institute"
                      height="80px"
                    />
                  </div>
                </div>
              {/* <ul>
                {data.allFooterMenuJson.edges.map(({ node }) => (
                  <li key={node.name}>
                    <Link to={node.url}>{node.name}</Link>
                  </li>
                ))}
              </ul> */}
            </div>
          </div>
          <div className="col-12 col-md-2"></div>

          <div className="col-12 col-md-2 mt-2 mt-md-0">
            <div className="footer-menu">
              <h3>Lab</h3>
              <div className="menu-footer-primary">
                <ul className="footer-menu">
                  {data.allPrimaryFooterMenuJson.edges.map(({ node }) => (
                    <li key={node.name} className="menu-item-">
                      <Link to={node.url}>{node.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-2 mt-2 mt-md-0">
            <div className="footer-menu">
              <h3>Network</h3>
              <div className="menu-footer-secondary">
                <ul className="footer-menu">
                  {data.allSecondaryFooterMenuJson.edges.map(({ node }) => (
                    <li key={node.name} className="menu-item-">
                      <Link to={node.url}>{node.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
