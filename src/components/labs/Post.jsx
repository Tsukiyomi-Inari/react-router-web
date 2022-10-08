import React, { useEffect} from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import LabData from "./data";

/*** Make into a template for creating each page ***/
const Post = () => {
  let { postSlug } = useParams();
  useEffect(() => {
    // Fetch post using the postSlug
  }, [postSlug]);
 
  return (
    <div className="home">
      <div class="container">
        <h1 className="mt-5"></h1>
        {postSlug}
        <p>description</p>
        <Link to="">WORDS</Link>
      </div>
      </div>
  );  
};



export default Post;