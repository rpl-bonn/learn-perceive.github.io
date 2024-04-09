import React from "react";
import ReactPlayer from "react-player/lazy";

export function getYoutubePlayer(data) {
  let youtube_player = false;
  data.children.forEach((link) => {
    if (
      link.internal.type === "uri" &&
      link.url &&
      (link.url.includes("youtube") || link.url.includes("youtu.be"))
    ) {
      youtube_player = (
        <figure className="ratio ratio-16x9 rounded-start">
          <ReactPlayer
            url={link.url}
            light={true}
            controls={true}
            width="100%"
            height="100%"
            className="react-player"
          />
        </figure>
      );
    }
  });
  return youtube_player
}

export default function Paper({ data }) {
  // build a short conference summary string from the available data
  let conference_summary = `${data.date.year}`;
  // search for conference abbreviation
  if (data.journal) {
    if (
      data.journal.includes("IROS") ||
      data.journal.includes("International Conference on Intelligent Robots")
    ) {
      conference_summary = `IROS ${data.date.year}`;
    } else if (
      data.journal.includes("ICRA") ||
      data.journal.includes(
        "International Conference on Robotics and Automation"
      )
    ) {
      conference_summary = `ICRA ${data.date.year}`;
    } else if (data.journal.includes("ISARC")) {
      conference_summary = `ISARC ${data.date.year}`;
    } else if (data.journal.includes(`${data.date.year}`)) {
      conference_summary = data.journal;
    } else {
      conference_summary = `${data.journal} ${data.date.year}`;
    }
  }
  let media_content = "";
  let links = [];
  if (data.media) {
    if (data.media.endsWith("mov")) {
      media_content = (
        <figure className="ratio ratio-16x9 rounded-start">
          <ReactPlayer
            url={data.media}
            light={true}
            controls={true}
            width="100%"
            height="100%"
            className="react-player rounded-start"
            config={{ file: { forceVideo: true } }}
          />
        </figure>
      );
    } else {
      media_content = (
        <figure className="ratio ratio-16x9 rounded-start">
          <img src={data.media} loading="lazy" alt="paper figure"></img>
        </figure>
      );
    }
  }
  data.children.forEach((link) => {
    if (
      link.internal.type === "uri" &&
      link.url &&
      (link.url.includes("youtube") || link.url.includes("youtu.be"))
    ) {
      media_content = (
        <figure className="ratio ratio-16x9 rounded-start">
          <ReactPlayer
            url={link.url}
            light={true}
            controls={true}
            width="100%"
            height="100%"
            className="react-player rounded-start"
          />
        </figure>
      );
    } else if (link.url) {
      const {
        internal: { type },
      } = link;
      let linkText = type;
      if (type === "uri") {
        if (link.url.includes("github.com")) {
          linkText = "code";
        } else if (
          link.url.includes("github.io") ||
          link.url.includes("hermannblum.net")
        ) {
          linkText = "website";
        } else {
          const url = new URL(link.url);
          linkText = url.hostname;
        }
      }
      links.push(
        <a
          className="btn btn-outline-info btn-sm me-1"
          href={link.url}
          target="_blank"
        >
          {linkText}
        </a>
      );
    }
  });

  if (media_content) {
    return (
      <div className="col-md-12">
        <div className="card mb-3 paper-card">
          <div className="row g-0">
            <div className="col-md-5">
              <div>{media_content}</div>
            </div>
            <div className="col-md-7">
              <div className="card-body">
                <h5 className="card-title">{data.title}</h5>
                <p className="card-text mb-1">
                  <small className="text-body-secondary">
                    {conference_summary}
                  </small>
                </p>
                {links.map((link) => (
                  <>{link}</>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="col-md-6">
        <div className="card mb-3 paper-card">
          <div className="card-body">
            <h5 className="card-title">{data.title}</h5>
            <p className="card-text">
              <small className="text-body-secondary">
                {conference_summary}
              </small>
            </p>
            {links.map((link) => (
              <>{link}</>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
