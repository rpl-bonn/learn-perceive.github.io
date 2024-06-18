import React from "react";
import Paper from "../components/Paper";
import Hero from "../components/Hero";
import { graphql } from "gatsby";

export const Head = () => <title>Our Research - Robot Perception and Learning Lab</title>;


export const query = graphql`
  query PaperQuery {
    allPaper(
      sort: [{ date: { year: DESC } }, { date: { month: DESC } }]
      filter: { date: { year: { gte: 2023 } } }
    ) {
      nodes {
        id
        children {
          internal {
            type
          }
          ... on uri {
            url
          }
          ... on arxiv {
            url
          }
          ... on doi {
            url
          }
        }
        title
        journal
        authors
        date {
          year
          month
        }
      }
    }
  }
`;

const WorkPage = ({ data }) => {
  // overwrite paper data with any info from yaml
  //   const paperData = data.allPaper.nodes.reduce((result, paper) => {
  //     const correspondingYamlPaper = data.allPapersYaml.nodes.find(
  //       (yamlPaper) => yamlPaper.title.toLowerCase() === paper.title.toLowerCase()
  //     );
  //     if (correspondingYamlPaper) {
  //       if (!correspondingYamlPaper.ignore) {
  //         result.push({
  //           ...paper,
  //           authors: correspondingYamlPaper.authors || paper.authors,
  //           media: correspondingYamlPaper.media || paper.media,
  //           journal: correspondingYamlPaper.journal || paper.journal,
  //           comment: correspondingYamlPaper.comment,
  //         });
  //       }
  //     } else {
  //       result.push(paper);
  //     }
  //     return result;
  //   }, []);
  const paperData = data.allPaper.nodes;
  return (
    <>
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-8">
              <h1>Our Research</h1>
              We investigate robots that can understand their environment
              semantically and geometrically, in order to perform manipulation
              and other safety critical tasks in proximity to humans. This
              encompasses detection of unknown, open-set objects in the
              environment, adaptation of robots to new environments, and
              continual self-supervised learning.
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {paperData.map((paper) => (
            <Paper data={paper} key={paper.id}></Paper>
          ))}
        </div>
      </div>
    </>
  );
};
export default WorkPage;
