import React from "react";
import { Link } from "react-router-dom";
import BlueWindow from "../assets/BlueWindow";
import {labposts} from "./LabData";

const labList = labposts.map((lab)=>
  <li class="list-group-item row-item" key={lab.id}><Link to={lab.link}><h2 class="font-weight-light">{lab.title}</h2></Link><small>{lab.description}</small></li>
);


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
              {labList}
              </ul>
              
            </div>
          </div>
        
      </div>
    </div>
  );
}

export default LabPosts;