import axios from "axios";
import React, { useEffect, useState } from "react";
import Modal from "../../components/modal/Modal";
import "./news.scss";

const News = ({ postsPerPage }) => {
  const [posts, setPosts] = useState([]);
  const [clickedPost, setClickedPost] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios
      .get(
        `https://www.completeglass.com.au/wp-json/wp/v2/posts?per_page=${postsPerPage}&_embed=true`,
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_WORDPRESS_APPLICATION_PASSWORD}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        setPosts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [postsPerPage]);

  const handleClick = (postId) => {
    const clickedPost = posts.find((post) => post.id === postId);
    setClickedPost(clickedPost);
    setShowModal(true);
    window.scrollTo(0, 0);
  };

  const handleClose = () => {
    setClickedPost(null);
    setShowModal(false);
  };

  if (showModal && clickedPost) {
    return (
      <Modal
        post={clickedPost}
        handleClose={handleClose}
        backgroundSrc={clickedPost._embedded["wp:featuredmedia"][0].source_url}
      />
    );
  }

  return (
    <div className="news__items">
      {posts.map((post) => (
        <div
          key={post.id}
          onClick={() => handleClick(post.id)}
          className="news__post"
        >
          {post._embedded["wp:featuredmedia"] &&
            post._embedded["wp:featuredmedia"][0] && (
              <div className="news__post__featured-image">
                <img
                  src={post._embedded["wp:featuredmedia"][0].source_url}
                  alt={post.title.rendered}
                />
              </div>
            )}

          <p className="news__post__published">
            {new Date(post.date)
              .toLocaleDateString("en-US", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })
              .toUpperCase()}
          </p>
          <h2 className="news__post__title">{post.title.rendered}</h2>
          <div
            className="news__post__excerpt"
            dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
          ></div>
          <a className="news__post__link">Read Article</a>
        </div>
      ))}
    </div>
  );
};

export default News;
