import React from "react";
import { graphql } from "gatsby";

export const Head = () => <title>Lectures - Robot Perception and Learning Lab</title>;


export const query = graphql`
  query LecturesQuery {
    allFile(
      filter: {
        relativeDirectory: {
          glob: "lectures/*"
        }
      }
    ) {
      nodes {
        relativeDirectory
        childMarkdownRemark {
          frontmatter {
            title
            lecture
            summary
          }
        }
        name
      }
    }
  }
`;

const WorkPage = ({ data }) => {
  const lectures = data.allFile.nodes;
  console.log(lectures);

  let knownLectures = [
    {
      short: "PLR",
      directory: "perception-and-learning-for-robotics",
    },
    {
      short: "SSL",
      directory: "self-supervised-learning",
    }
  ];
  console.log(knownLectures);
  lectures.forEach(lecture => {
    if (knownLectures.filter(known => `lectures/${known.directory}` === lecture.relativeDirectory).length > 0) {
      let knownLecture = knownLectures.filter(
        (known) => `lectures/${known.directory}` === lecture.relativeDirectory
      )[0];
      // check if there is already a newer one
      if (!knownLecture.filename || lecture.name > knownLecture.filename) {
        console.log("Updating lecture", lecture.name);
        knownLectures = knownLectures.map(known =>
          `lectures/${known.directory}` === lecture.relativeDirectory
            ? { ...known, filename: lecture.name, node: lecture }
            : known
        );
      }
    }
  });
  console.log(knownLectures);
  return (
    <>
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-8">
              <h1>Lectures</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {knownLectures.map((lecture) => (
            <div className="col-12 col-md-4 mb-3">
              <a href={`/lectures/${lecture.node.childMarkdownRemark.frontmatter.lecture}/${lecture.filename}`} >
              <div className="summary summary-full">
                <div className="summary-content">
                  <div className="summary-title">
                    <h3>{lecture.node.childMarkdownRemark.frontmatter.title}</h3>
                  </div>
                  <div className="summary-description">
                    <p>{lecture.node.childMarkdownRemark.frontmatter.summary}</p>
                  </div>
                </div>
              </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default WorkPage;
