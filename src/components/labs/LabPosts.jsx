import React from "react";
import { Link } from "react-router-dom";
import BlueWindow from "../assets/BlueWindow";


//*****  Collection of all lab links  *****/
function LabPosts() {
  return (
    <div className="home">
      <div class="container">
        
          <div class="row align-items-center my-5">
            <div class="col-lg-6">
         <BlueWindow />
            </div>
            <div class="col-lg-5">
              <ul class="list-group-flush text-center">
               <li> <Link to="/labs/lab1">Lab-1</Link></li>
               <li> <Link to="/labs/lab2">Lab-2</Link></li>
              </ul>
              
            </div>
          </div>
        
      </div>
    </div>
  );
}

export default LabPosts;