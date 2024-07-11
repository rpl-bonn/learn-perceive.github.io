import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";

export const Head = () => <title>Open Student Projects - Robot Perception and Learning Lab</title>;


export const query = graphql`
  query PaperQuery {
    allFile(
      filter: { sourceInstanceName: { in: ["studentprojects", "images"] } }
    ) {
      nodes {
        id
        name
        relativePath
        sourceInstanceName
        childMarkdownRemark {
          frontmatter {
            title
            image
            type
            visible
          }
          html
        }
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
`;

const StudentProjects = ({ data }) => {
  console.log(data);
  return (
    <>
      <div className="section pb-0">
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
            {data.allFile.nodes
              .filter((node) => node.childMarkdownRemark)
              .filter((node) => node.childMarkdownRemark.frontmatter.visible)
              .map((project) => (
                <div className="col-sm-6 mb-2 mt-2 mb-sm-0" key={project.id}>
                  <div className="card">
                    {project.childMarkdownRemark.frontmatter.image ? (
                      <GatsbyImage
                        className="card-img-top"
                        alt=""
                        image={getImage(
                          data.allFile.nodes.find(
                            (node) =>
                              project.childMarkdownRemark.frontmatter.image ==
                              node.relativePath
                          )
                        )}
                      />
                    ) : (
                      ""
                    )}
                    <div className="card-body">
                      <div className="mb-1">
                        {`${project.childMarkdownRemark.frontmatter.type}`
                          .split(",")
                          .map((projectType) => (
                            <span className="badge text-bg-secondary ps-1 pe-1 me-1" key={projectType}>
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
