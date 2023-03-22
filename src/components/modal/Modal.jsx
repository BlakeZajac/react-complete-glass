import React, { useEffect, useRef, useState } from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import { CiUndo } from "react-icons/ci";
import "../../App.scss";
import "./modal.scss";

const Modal = ({ post, handleClose, backgroundSrc }) => {
  const modalHeroRef = useRef(null);
  const [readingTime, setReadingTime] = useState(0);

  const hideEmptyParagraphs = () => {
    const paragraphs = document.querySelectorAll(".modal__content p");

    paragraphs.forEach((paragraph) => {
      if (paragraph.innerHTML.includes("&nbsp;")) {
        paragraph.style.display = "none";
      }
    });
  };

  const handleModalClose = () => {
    handleClose();
    const newsSection = document.querySelector(".news");
    newsSection.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    document.body.classList.add("modal-open");

    let bodyOverlay = document.querySelector(".modal__body-overlay");

    if (!bodyOverlay) {
      bodyOverlay = document.createElement("div");
      bodyOverlay.classList.add("modal__body-overlay");
      document.body.appendChild(bodyOverlay);
    }

    hideEmptyParagraphs();

    const modalHero = modalHeroRef.current;
    const modalOverlay = modalHero.querySelector(".modal__hero__overlay");
    const { width, height } = modalHero.getBoundingClientRect();

    modalOverlay.style.width = `${width}px`;
    modalOverlay.style.height = `${height}px`;

    const handleResize = () => {
      const { width, height } = modalHero.getBoundingClientRect();
      modalOverlay.style.width = `${width}px`;
      modalOverlay.style.height = `${height}px`;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("resize", handleResize);
    };
  }, [modalHeroRef]);

  useEffect(() => {
    const content = document.querySelector(".modal__content");
    const words = content.innerText.trim().split(/\s+/).length;
    const time = Math.round(words / 250);

    setReadingTime(time);
  }, [post.content]);

  useEffect(() => {
    const bodyOverlay = document.querySelector(".modal__body-overlay");

    const handleOverlayClick = (e) => {
      if (e.target === bodyOverlay) {
        handleModalClose();
      }
    };

    bodyOverlay.addEventListener("click", handleOverlayClick);

    return () => {
      bodyOverlay.removeEventListener("click", handleOverlayClick);
    };
  });

  return (
    <div className="modal">
      <div className="modal__container">
        <div
          className="modal__hero"
          style={{ backgroundImage: `url(${backgroundSrc})` }}
          ref={modalHeroRef}
        >
          <div
            className="modal__hero__overlay"
            style={{ height: "100%" }}
          ></div>

          <div className="modal__hero__row top">
            <div className="modal__hero__close" onClick={handleModalClose}>
              <div className="modal__hero__icon">
                <CiUndo />
              </div>
              Close post
            </div>

            <div className="modal__hero__badge modal__hero__published">
              {new Date(post.date)
                .toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })
                .toUpperCase()}
            </div>
          </div>

          <div className="modal__hero__row center">
            <h2 className="modal__hero__title">{post.title.rendered}</h2>
            <div
              className="modal__hero__excerpt"
              dangerouslySetInnerHTML={{ __html: `${post.excerpt.rendered}` }}
            ></div>
          </div>

          <div className="modal__hero__row bottom">
            <div className="modal__hero__badge modal__hero__reading-time">
              {readingTime} min read
            </div>

            <a href="#post-content">
              <div className="modal__hero__scroll">
                <div className="modal__hero__icon">
                  <AiOutlineArrowDown />
                </div>
                Scroll to read
              </div>
            </a>
          </div>
        </div>

        <div
          id="post-content"
          className="modal__content"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        ></div>
      </div>
    </div>
  );
};

export default Modal;
