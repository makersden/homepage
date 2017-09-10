import React from "react";

const BlogPost = ({ isLoading, page }) => {
  return (
    <div>
      {isLoading && "Loading..."}
      {!isLoading &&
      page.node && (
        <article>
          <h1>{page.node.title}</h1>
          <BodyRenderer>{page.node.body}</BodyRenderer>
        </article>
      )}
      <footer>
        <Link to="/">Go to home</Link>
      </footer>
    </div>
  );
};

export default BlogPost;
