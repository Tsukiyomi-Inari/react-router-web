import React from "react";
import BlueWindow from "./assets/BlueWindow.jsx";

function Project() {
  return (
    <div className="Project">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-7">
        <BlueWindow />
          </div>
          <div className="col-lg-5 text-center">
            <h1 className="font-weight-light"><span className="kat">Project</span></h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;