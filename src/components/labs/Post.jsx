import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import LabData from "LabData";

/*** Make into a template for creating each page ***/
const Post = () => {
  const {id} = useParams();
  const lab = LabData.find((lab) => lab.id === id);
  const {title, description , pdf, link, linkTitle } = lab;

  return (
      <div class="container">
        <h1 className="mt-5">{ title}</h1>
        <p>{description}</p>
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js">
        <Viewer fileUrl={pdf} />
        </Worker>
        <Link to={link}>{linkTitle}</Link>
      </div>
  );  
};



export default Post;