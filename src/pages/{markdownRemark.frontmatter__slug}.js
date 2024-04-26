import React from "react";
import { graphql } from "gatsby";

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        slug
        title
      }
    }
  }
`

const renderedPage = ({ data }) => {
  return (
    <>
      <div className="container">
        <div className="row mt-2 mb-2">
          <div className="col-12 col-lg-8">
            <h1>{data.markdownRemark.frontmatter.title}</h1>
            <div
              className="content"
              dangerouslySetInnerHTML={{
                __html: data.markdownRemark.html,
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default renderedPage;
