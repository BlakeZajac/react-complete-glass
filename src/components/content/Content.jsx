import React from "react";
import "./content.scss";

const Content = ({
  multiHeadingOneText,
  multiHeadingTwoText,
  headingText,
  bodyText,
}) => {
  const renderMultiHeading =
    multiHeadingOneText !== "" || multiHeadingTwoText !== "";

  const lines = headingText.split(/\r\n|\r|\n/); // Split the text by new line characters

  return (
    <div className="content section">
      <div className="content__row row">
        {renderMultiHeading && (
          <div className="content__multi-heading text-indent">
            {multiHeadingOneText !== "" && <p>{multiHeadingOneText}</p>}
            {multiHeadingTwoText !== "" && <p>{multiHeadingTwoText}</p>}
          </div>
        )}

        <div className="content__content">
          <h2 className="text-indent">
            {lines.map((line, index) => (
              <span key={index}>{line}</span>
            ))}
          </h2>
          <p>{bodyText}</p>
        </div>
      </div>
    </div>
  );
};

export default Content;
