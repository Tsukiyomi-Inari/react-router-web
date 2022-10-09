import React from "react";
import { Link } from "react-router-dom";
import BlueWindow from "../assets/BlueWindow";



//*****  Collection of all lab links  *****/
function LabPosts() {
  return (
    <div className="labposts">
      <div className="container">
        
          <div className="row align-items-center my-5">
            <div className="col-lg-6">
         <BlueWindow />
            </div>
            <div className="col-lg-5">
              <div className="row list-group-flush text-center">
               <Link to=""><h3>Lab 1</h3></Link>
                <Link to=""><h3>Lab 2</h3></Link>
              </div>
              
            </div>
          </div>
        
      </div>
    </div>
  );
}

export default LabPosts;