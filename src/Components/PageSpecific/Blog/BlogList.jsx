import React from "react";
import BlogItem from "./BlogItem";

function BlogList({ blogData, rangeEndidx }) {
  const blogsWrapperBase = {
    width: "60%",
    backgroundColor: "red",
    display: "flex",
    flexDirection: "column",
    gap: "5rem",
  };
  return (
    <div style={blogsWrapperBase}>
      {blogData
        .slice(0, rangeEndidx)
        .map(({ id, category, postDate, postImg, postTitle, postInfo }) => (
          <BlogItem
            key={id}
            category={category}
            postDate={postDate}
            postImg={postImg}
            postTitle={postTitle}
            postInfo={postInfo}
          />
        ))}
    </div>
  );
}

export default BlogList;
