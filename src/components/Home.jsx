import React from "react";
import BlueWindow from "./assets/BlueWindow.jsx";



function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-7">
          <BlueWindow />
          </div>
          <div className="col-lg-5">
            <h1 className="font-weight-light">Welcome</h1>
            <p >
              I am Katherine Bellman, studying Computer Programming and Analysis at Durham College in Oshawa. As an Alumni of OCAD University, I apply creative solutions to computational problems and design attractive user interfaces through colour theory practices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;