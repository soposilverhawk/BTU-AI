import React, { useState } from "react";
import { useDesign } from "../../../context/DesignProvider";
import Button from "../../Shared/Button/Button";

function BlogItem({ key, category, postDate, postImg, postTitle, postInfo }) {
  const { colors, fontSizes } = useDesign();
  const [hover, setHover] = useState(false);
  const handleRedirection = () => {};
  const blogItemWrapperBase = {
    width: "100%",
  };
  const blogInformationWrapperBase = {
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
  };
  const postDateBase = {
    color: colors.primaryPink,
    fontSize: fontSizes.heading2,
  };
  const postTitleBase = {
    color: hover && colors.primaryPink,
    cursor: hover && "pointer",
    fontSize: fontSizes.heading3,
  };
  return (
    <div
      key={key}
      style={{ ...blogItemWrapperBase, ...blogInformationWrapperBase }}
    >
      {/* img container */}
      <div style={{ width: "100%" }}>
        <img src={postImg} alt={postTitle} style={{ width: "100%" }} />
      </div>
      {/* postInfo container */}
      <div style={blogInformationWrapperBase}>
        <div style={{ ...blogInformationWrapperBase, flexDirection: "row" }}>
          <p style={postDateBase}>{postDate}</p>
          <div style={blogInformationWrapperBase}>
            <p
              style={postTitleBase}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              // make this interactable to navigate to a subpage of the post itself
            >
              {postTitle}
            </p>
            <span style={{color: "gray"}}>Categories</span>
            <p style={{fontWeight: "bold"}}>{category}</p>
          </div>
        </div>
        <div style={{...blogInformationWrapperBase, alignItems: "flex-start"}}>
          <p>{postInfo}</p>
          <Button
            children="იხილეთ მეტი"
            variant="plainButton"
            onClick={handleRedirection}
          />
        </div>
      </div>
    </div>
  );
}

export default BlogItem;
