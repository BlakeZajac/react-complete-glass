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
  spanImage1,
  spanImage2,
  spanHeadingText,
  spanBodyText1,
  spanBodyText2,
  spanBodyText3,
}) => {
  const backgroundImageStyle = {
    backgroundImage: `url(${imageUrl})`,
  };

  const spanImageStyleOne = {
    backgroundImage: `url(${spanImage1})`,
  };

  const spanImageStyleTwo = {
    backgroundImage: `url(${spanImage2})`,
  };

  const mediaWithTextClasses = `media-with-text section ${
    imagePosition === "left" ? "image-left" : "image-right"
  }`;

  const renderSpanSection = imagePosition === "span";

  const renderSpanText =
    (spanBodyText1 || spanBodyText2 || spanBodyText3) &&
    (spanBodyText1 !== "" || spanBodyText2 !== "" || spanBodyText3 !== "");

  return (
    <>
      {!renderSpanSection && (
        <div className={mediaWithTextClasses}>
          {imagePosition !== "span" && (
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
          )}
        </div>
      )}

      {renderSpanSection && (
        <div className="media-with-text media-with-text--span section">
          <div className="media-with-text__row media-with-text--span__row row">
            <div
              className="media-with-text__col media-with-text--span__col"
              style={spanImageStyleOne}
            ></div>

            <div
              className="media-with-text__col media-with-text--span__col"
              style={spanImageStyleTwo}
            ></div>
          </div>

          <div className="media-with-text__row media-with-text--span__row row">
            <div className="media-with-text__col media-with-text--span__col">
              <h3 className="media-with-text--span__heading">
                {spanHeadingText}
              </h3>
            </div>

            <div className="media-with-text__col media-with-text--span__col">
              {renderSpanText && (
                <div className="media-with-text--span__content">
                  {spanBodyText1 && <p>{spanBodyText1}</p>}
                  {spanBodyText2 && <p>{spanBodyText2}</p>}
                  {spanBodyText3 && <p>{spanBodyText3}</p>}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MediaWithText;
