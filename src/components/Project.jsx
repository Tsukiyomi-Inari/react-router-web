import React from "react";
import BlueWindow from "./assets/BlueWindow.jsx";

function Project() {
  return (
    <div className="project">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
        <BlueWindow />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Project</h1>
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