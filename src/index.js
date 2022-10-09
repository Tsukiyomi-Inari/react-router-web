import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router , Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  Classworks,
  Project,
  Labs,
  LabPosts,
  Post,
  LabOne,
  LabTwo
} from "./components";

ReactDOM.render(
  <Router >
  <Navigation />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/classworks" element={<Classworks />} />
      <Route path="/labs" element={<Labs />}>
          <Route  path="" element={<LabPosts />} />
          <Route  path=":postSlug" element={<Post />} />
      </Route>
      <Route path="/labs/lab-1" element={<LabOne />} />
      <Route path="/labs/lab-2" element={<LabTwo />} />
      <Route path="/project" element={<Project />} />
    
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);

serviceWorker.unregister();