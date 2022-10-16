import React from "react";
import BlueWindowClass from "./assets/BlueWindowClass";

function Classworks() {
  return (
    <div className="classworks">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-7">
            <BlueWindowClass />
          </div>
          <div className="col-lg-5">
            <h1 className="font-weight-light kat"><span>Classworks</span></h1>
            <br/>
              <h3>Classwork-1</h3>
              <p>
              <a href="https://github.com/Tsukiyomi-Inari/react-router-web/raw/master/src/components/assets/ClassWork1-Bellman.apk"target="_blank" rel="noreferrer">Download the APK</a>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/KjxjRHhFJD8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Classworks;