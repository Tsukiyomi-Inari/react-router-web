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
              <li class="list-group-item row-item"><Link to="/blog/this-is-a-post-title"><h2 class="font-weight-light">LAB 1</h2></Link><small>Mobile device investigation</small></li>
               <li class="list-group-item row-item"><Link to="/blog/this-is-a-post-title"><h2 class="font-weight-light">LAB 2</h2></Link><small>Mobile device investigation</small></li>
                <li class="list-group-item row-item"><Link to="/blog/this-is-a-post-title"><h2 class="font-weight-light">LAB 3</h2></Link><small>Mobile device investigation</small></li>
              </ul>
              
            </div>
          </div>
        
      </div>
    </div>
  );
}

export default LabPosts;