import React from "react";
import BlueWindow from "./assets/BlueWindow.jsx";


function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-6">
          <BlueWindow />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Welcome</h1>
            <p class="">
              I am Katherine Bellman, studying Computer Programming and Analysis at Durham College in Oshawa. As an Alumni of OCAD University, I apply creative solutions to computational problems and design attractive user interfaces through colour theory practices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;