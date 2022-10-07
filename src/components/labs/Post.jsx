import React, { useEffect } from "react";
import { useParams } from "react-router";

/*** Make into a template for creating each page ***/

function Post() {
  let { postSlug } = useParams();

  useEffect(() => {
    // Fetch post using the postSlug
  }, [postSlug]);

  return (
    <div className="home">
      <div class="container">
        <h1 className="mt-5">This is a Post Title</h1>
        <h6 className="mb-5">The post slug is, {postSlug}</h6>
        <p>
          dfgdfg
        </p>
      </div>
    </div>
  );
}

export default Post;