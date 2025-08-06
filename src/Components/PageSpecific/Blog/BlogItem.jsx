import React from "react";

function BlogItem({ key, category, postDate, postImg, postTitle, postInfo }) {
  return (
    <div key={key} style={{width: "100%"}}>
      {/* img container */}
      <div style={{width: "100%"}}>
        <img src={postImg} alt={postTitle} style={{width: "100%"}}/>
      </div>
      {/* postInfo container */}
      <div>
        <p>{postDate}</p>
        <div>
          <p>{postTitle}</p>
          <span>Categories</span>
          <p>{category}</p>
        </div>
      </div>
    </div>
  );
}

export default BlogItem;
