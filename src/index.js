import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from "./serviceWorker";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  Classworks,
  Project,
  Labs,
  LabPosts,
  Post
} from "./components";

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/classworks" element={<Classworks />} />
      <Route path="/labs" element={<Labs />}>
        <Route path=" " element={<LabPosts />} />
        <Route path="/labs/:id" element={<Post />} />
      </Route>
      <Route path="/project" element={<Project />} />
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);

serviceWorker.unregister();