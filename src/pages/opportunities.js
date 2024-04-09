import React from "react";
import { graphql } from "gatsby";

export const query = graphql`
  query OpportunitiesQuery {
    allFile(filter: { relativePath: { eq: "opportunities.md" } }) {
      nodes {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;

const Opportunities = ({ data }) => {
  console.log(data);
  return (
    <>
      <div className="container">
        <div className="row mt-2 mb-2">
          <div className="col-12">
            <h1>Open Positions</h1>
            <div
              dangerouslySetInnerHTML={{
                __html: data.allFile.nodes[0].childMarkdownRemark.html,
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Opportunities;
