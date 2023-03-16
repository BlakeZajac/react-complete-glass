import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import "../../App.scss";
import "./modal.scss";

const Modal = ({ post, handleClose, backgroundSrc }) => {
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
              <AiOutlineClose /> Back
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
