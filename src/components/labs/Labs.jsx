import React from "react";
import { Outlet } from "react-router-dom";


function Labs() {
  return (
    <div className="labs">
      <div className="container">
        <Outlet />
         
      </div>
    </div>
  );
}

export default Labs;