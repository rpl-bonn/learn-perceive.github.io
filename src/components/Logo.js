import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";


export default function Logo({ children }) {
  const data = useStaticQuery(graphql`
    query LogoQuery {
      allDataYaml {
        nodes {
          logo {
            logo_image_desktop
            logo_image_desktop_height
            logo_image_desktop_invert
            logo_image_desktop_width
            logo_image_mobile
            logo_image_mobile_height
            logo_image_mobile_invert
            logo_image_mobile_width
          }
        }
      }
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className="logos">
      <div className="logo logo-desktop">
        <div className="logo-image">
          <Link to="/">
            <img
              height={data.allDataYaml.nodes[0].logo.logo_image_desktop_height}
              width={data.allDataYaml.nodes[0].logo.logo_image_desktop_width}
              alt={`${data.site.siteMetadata.title} Logo`}
              src={data.allDataYaml.nodes[0].logo.logo_image_desktop}
            />
          </Link>
        </div>
      </div>

      <div className="logo logo-desktop-invert">
        <div className="logo-image">
          <a href="{{ .Site.Home.RelPermalink }}">
            <img
              height={data.allDataYaml.nodes[0].logo.logo_image_desktop_height}
              width={data.allDataYaml.nodes[0].logo.logo_image_desktop_width}
              alt={`${data.site.siteMetadata.title} Logo`}
              src={data.allDataYaml.nodes[0].logo.logo_image_desktop_invert}
            />
          </a>
        </div>
      </div>

      <div className="logo logo-mobile">
        <div className="logo-image">
          <a href="{{ .Site.Home.RelPermalink }}">
            <img
              height={data.allDataYaml.nodes[0].logo.logo_image_mobile_height}
              width={data.allDataYaml.nodes[0].logo.logo_image_mobile_width}
              alt={`${data.site.siteMetadata.title} Logo`}
              src={data.allDataYaml.nodes[0].logo.logo_image_mobile}
            />
          </a>
        </div>
      </div>

      <div className="logo logo-mobile-invert">
        <div className="logo-image">
          <a href="{{ .Site.Home.RelPermalink }}">
            <img
              height={data.allDataYaml.nodes[0].logo.logo_image_mobile_height}
              width={data.allDataYaml.nodes[0].logo.logo_image_mobile_width}
              alt={`${data.site.siteMetadata.title} Logo`}
              src={data.allDataYaml.nodes[0].logo.logo_image_mobile_invert}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
