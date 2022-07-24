import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Root from "./Root";
import App from "./components/App";
import CommentBox from "./components/CommentBox";
import CommentList from "./components/CommentList";

ReactDOM.render(
  <Root>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/post" element={<CommentBox />} />
      </Routes>
    </Router>
  </Root>,
  document.querySelector("#root")
);
