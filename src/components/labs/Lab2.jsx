import React from "react";
import { Link } from "react-router-dom";
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';


/*** Make into a template for creating each page ***/
const lab2 = () => {


  return (
      <div class="container">
        <h1 className="mt-5">Lab-2</h1>
        <p></p>
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js">
        <Viewer fileUrl={pdf}/>
        </Worker>
        <Link to={link}>Screen recording video of emulator in use</Link>
      </div>
  );  
};



export default lab2;