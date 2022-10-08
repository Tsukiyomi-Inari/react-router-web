import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  Classworks,
  Project,
  Labs,
  LabPosts,
  Post,
  Lab1,
  Lab2,

} from "./components";

ReactDOM.render(
  <Router basename="/">
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/classworks" element={<Classworks />} />
      <Route path="/labs" element={<Labs />}>
        <Route path=" " element={<LabPosts />} />
       <Route path=":postSlug" element={<Post />} />
        <Route path=" " element={<Lab1 />} />
        <Route path=" " element={<Lab2 />} /> 
      </Route>
      <Route path="/project" element={<Project />} />
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);

serviceWorker.unregister();