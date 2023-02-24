import React from "react";
import { Button, HeadingBlock } from "../index";
import "./media-with-text.scss";

const MediaWithText = ({
  imagePosition,
  imageUrl,
  multiHeadingOneText,
  multiHeadingTwoText,
  headingText,
  bodyText1,
  bodyText2,
  btnLink1,
  btnText1,
  className1,
  btnLink2,
  btnText2,
  className2,
}) => {
  const backgroundImageStyle = {
    backgroundImage: `url(${imageUrl})`,
  };
  const mediaWithTextClasses = `media-with-text section ${
    imagePosition === "left" ? "image-left" : "image-right"
  }`;

  return (
    <div className={mediaWithTextClasses}>
      <div className="media-with-text__row row">
        {imagePosition === "left" && (
          <div
            className="media-with-text__col media-with-text__col--image"
            style={backgroundImageStyle}
          />
        )}

        <div className="media-with-text__col media-with-text__col--content">
          <HeadingBlock
            multiHeadingOneText={multiHeadingOneText}
            multiHeadingTwoText={multiHeadingTwoText}
            headingText={headingText}
            bodyText1={bodyText1}
            bodyText2={bodyText2}
          />

          <div className="btn--wrapper">
            <Button
              btnLink={btnLink1}
              btnText={btnText1}
              className={className1}
            />

            <Button
              btnLink={btnLink2}
              btnText={btnText2}
              className={className2}
            />
          </div>
        </div>

        {imagePosition === "right" && (
          <div
            className="media-with-text__col media-with-text__col--image"
            style={backgroundImageStyle}
          />
        )}
      </div>
    </div>
  );
};

export default MediaWithText;
