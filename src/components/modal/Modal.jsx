import React, { useEffect } from "react";
import { CiUndo } from "react-icons/ci";
import "../../App.scss";
import "./modal.scss";

const Modal = ({ post, handleClose, backgroundSrc }) => {
  const hideEmptyParagraphs = () => {
    const paragraphs = document.querySelectorAll(".modal__content p");

    paragraphs.forEach((paragraph) => {
      if (paragraph.innerHTML.includes("&nbsp;")) {
        paragraph.style.display = "none";
      }
    });
  };

  useEffect(() => {
    document.body.classList.add("modal-open");
    hideEmptyParagraphs();

    return () => {
      document.body.classList.remove("modal-open");
    };
  }, []);

  return (
    <div className="modal">
      <div className="modal__container">
        <div
          className="modal__hero"
          style={{ backgroundImage: `url(${backgroundSrc})` }}
        >
          <div className="modal__hero__overlay"></div>

          <div className="modal__hero__row top">
            <div className="modal__hero__close" onClick={handleClose}>
              <CiUndo /> Close post
              <div className="modal__hero__published">
                {new Date(post.date)
                  .toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })
                  .toUpperCase()}
              </div>
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
            <div className="modal__hero__reading-time">Reading time</div>
            <div className="modal__hero__scroll">Scroll to read</div>
          </div>
        </div>

        <div
          className="modal__content"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        ></div>
      </div>
    </div>
  );
};

export default Modal;
