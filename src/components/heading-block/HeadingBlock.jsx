import React from "react";
import "./heading-block.scss";

const HeadingBlock = ({
  multiHeadingOneText,
  multiHeadingTwoText,
  headingText,
  bodyText1,
  bodyText2,
  bodyText3,
  bodyText4,
}) => {
  const renderMultiHeading =
    (multiHeadingOneText || multiHeadingTwoText) &&
    (multiHeadingOneText !== "" || multiHeadingTwoText !== "");

  const renderBodyText =
    (bodyText1 || bodyText2 || bodyText3 || bodyText4) &&
    (bodyText1 !== "" ||
      bodyText2 !== "" ||
      bodyText3 !== "" ||
      bodyText4 !== "");

  return (
    <div className="heading-block">
      {renderMultiHeading && (
        <div className="content__multi-heading text-indent">
          {multiHeadingOneText && <p>{multiHeadingOneText}</p>}
          {multiHeadingTwoText && <p>{multiHeadingTwoText}</p>}
        </div>
      )}

      {renderBodyText && (
        <div className="content__content">
          <h2 className="text-indent">{headingText}</h2>
          <div className="content__content__body">
            {bodyText1 && <p>{bodyText1}</p>}
            {bodyText2 && <p>{bodyText2}</p>}
            {bodyText3 && <p>{bodyText3}</p>}
            {bodyText4 && <p>{bodyText4}</p>}
          </div>
        </div>
      )}
    </div>
  );
};

export default HeadingBlock;
