import React from "react";
import { Outlet } from "react-router-dom";

function Labs() {
  return (
    <div className="home">
      <div class="container">
        <Outlet />
      </div>
    </div>
  );
}

export default Labs;