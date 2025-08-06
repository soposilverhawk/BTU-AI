import React, { useState } from "react";
import FAQSubPagesLayout from "../../Components/PageSpecific/FAQ/FAQSubPagesLayout";
import BlogList from "../../Components/PageSpecific/Blog/BlogList";
import blogList from "../../data/blog/blogList.json";

function Blog() {
  const [endIdx, setEndIdx] = useState(5);
  let step = 5;
  return (
    <FAQSubPagesLayout
      heroTitle="ბლოგი"
      headingText={false}
      leftContent={<BlogList blogData={blogList} rangeEndidx={endIdx} />}
    />
  );
}

export default Blog;
