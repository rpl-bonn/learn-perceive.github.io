import React from "react";
import Paper from "../components/Paper";
import Hero from "../components/Hero";
import { graphql } from "gatsby";

export const query = graphql`
  query PaperQuery {
    allFile(filter: { sourceInstanceName: { eq: "studentprojects" } }) {
      nodes {
        childMarkdownRemark {
          frontmatter {
            title
            type
          }
          html
        }
      }
    }
  }
`;

const StudentProjects = ({ data }) => {
  return (
    <>
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-8">
              <h1>Open Topics for Student Projects</h1>
              Below we have a collection of proposed topics for Bachelor or
              Master thesises and/or for lab courseworks. All students are also
              invited to contact us with their own topic ideas.
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <div className="row mt-2 mb-2">
            {data.allFile.nodes.map((project) => (
              <div className="col-sm-6 mb-3 mb-sm-0">
                <div className="card">
                  <div className="card-body">
                    <div className="mb-1">
                      {`${project.childMarkdownRemark.frontmatter.type}`
                        .split(",")
                        .map((projectType) => (
                          <span className="badge text-bg-secondary ps-1 pe-1">
                            {projectType}
                          </span>
                        ))}
                    </div>
                    <h4 className="card-title">
                      {project.childMarkdownRemark.frontmatter.title}
                    </h4>
                    <div
                      className="card-text studentProjectDescription"
                      dangerouslySetInnerHTML={{
                        __html: project.childMarkdownRemark.html,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default StudentProjects;
