import React from "react";

export default function Hero(props) {
  return (
    <section className="hero">
      <div className="hero-background-image" style={{'background-image': `url(${props.background_image})`}}>
      </div>
      <div className="container">
        <div className="hero-content row">
          {props.headings ? (
            <div className="col-12 col-md-8 hero-text">
              {props.headings.heading ? (
                <h1 className="display-1">{props.headings.heading}</h1>
              ) : ""}
              {props.headings.subheading ? (
                <h2>{props.headings.subheading}</h2>
              ) : ""}
              {props.headings.text ? (
                <p>{props.headings.text}</p>
              ) : ""}
              {props.buttons ? (
                <div className="hero-buttons">
                  {props.buttons.map(button => (
                     <>{button}</>
                  ))}
                </div>
              ) : ""}
            </div>
          ) : ""}
        </div>
      </div>
    </section>
  );
}
