import React from "react";
import BlueWindowProject from "./assets/BlueWindowProject";

function Project() {
  return (
    <div className="Project">
      <div className="container">
        <div className="row  my-5">
          <div className="col-lg-7 align-self-start">
        <BlueWindowProject />
          </div>
          <div className="col-lg-5 text-center ">
            <h1 className="font-weight-light"><span className="kat">Project</span></h1>
            <p>
              --::Comming Soon ::--
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;