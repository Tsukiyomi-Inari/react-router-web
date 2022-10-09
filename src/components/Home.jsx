import React from "react";
import BlueWindow from "./assets/BlueWindow.jsx";



function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="row  my-5">
          <div className="col-lg-7">
           
          <BlueWindow />
          </div>
          <div className="col-lg-5 align-content-center kat">
                <h1>Welcome, I am <br/><span>Katherine Bellman</span></h1>
            <p> I use <span>creative solutions</span> to solve<span> <br/>computational problems.</span> <br/>This website is for sharing my work from MODE4201 - Mobile Development at Durham College.</p>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;