import React from 'react';

function Blog({blogData, rangeEndIdx}) {
  return blogData.slice(0, rangeEndIdx).map(({id, category, postDate, postImg, postTitle, postInfo}) => (
    // post container
    <div key={id}>
        {/* img container */}
        <div>
            <img src={postImg} alt={postTitle} />
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
  ))
}

export default Blog
