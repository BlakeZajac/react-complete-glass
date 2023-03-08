import axios from "axios";
import React, { useEffect, useState } from "react";

const News = ({ postsPerPage }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://crossorigin.me/https://www.completeglass.com.au/wp-json/wp/v2/posts?per_page=${postsPerPage}&_embed`
      )
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [postsPerPage]);

  return (
    <div className="news section">
      <div className="news__row row">
        {posts.map((post) => (
          <div key={post.id} className="news__post">
            <div className="news__post__featured-image">
              <img
                src={post._embedded["wp:featuredmedia"][0].source_url}
                alt={post.title.rendered}
              />
            </div>
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

            <a href={post.link} target="_blank" className="news__post__link">
              Read Article
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
