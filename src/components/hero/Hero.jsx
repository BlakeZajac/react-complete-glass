import React, { useCallback, useEffect, useMemo, useState } from "react";
import Button from "../button/Button";
import "./hero.scss";

const Hero = ({
  backgroundImage,
  titleText,
  bodyText,
  btnLink1,
  btnText1,
  btnClass1,
  btnLink2,
  btnText2,
  btnClass2,
}) => {
  const [isTablet, setIsTablet] = useState(false);

  const handleResize = useCallback(() => {
    setIsTablet(window.innerWidth <= 980);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  const backgroundImageStyle = useMemo(
    () => ({ backgroundImage: `url(${backgroundImage})` }),
    [backgroundImage]
  );

  const words = titleText.split(" ");
  const lastIndex = words.length - 1;

  if (isTablet) {
    return (
      <div className="hero section">
        <div className="hero__row row">
          <div className="hero__image">
            <img src={backgroundImage} alt={backgroundImage} />
          </div>

          <div className="hero__content">
            <h1>
              {words.map((word, index) => (
                <span className="outer" key={index}>
                  <span className="inner">{word}</span>
                  {index !== lastIndex ? "\u00A0" : null}
                </span>
              ))}
            </h1>
            <p>{bodyText}</p>

            <div className="hero__button-wrapper">
              <Button
                btnLink={btnLink1}
                btnText={btnText1}
                className={btnClass1}
              />
              <Button
                btnLink={btnLink2}
                btnText={btnText2}
                className={btnClass2}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="hero section" style={backgroundImageStyle}>
      <div className="hero__row row">
        <div className="hero__content">
          <h1>
            {words.map((word, index) => (
              <span className="outer" key={index}>
                <span className="inner">{word}</span>
                {index !== lastIndex ? "\u00A0" : null}
              </span>
            ))}
          </h1>
          <p>{bodyText}</p>

          <div className="hero__button-wrapper">
            <Button
              btnLink={btnLink1}
              btnText={btnText1}
              className={btnClass1}
            />
            <Button
              btnLink={btnLink2}
              btnText={btnText2}
              className={btnClass2}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
