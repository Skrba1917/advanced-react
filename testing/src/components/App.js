import React, { Component } from "react";
import { Route, Link, Routes } from "react-router-dom";
import { connect } from "react-redux";
import CommentBox from "./CommentBox";
import CommentList from "./CommentList";
import * as actions from "./../actions";

class App extends Component {
  renderButton() {
    if (this.props.auth) {
      return (
        <button onClick={() => this.props.changeAuth(false)}>Sign Out</button>
      );
    } else {
      return (
        <button onClick={() => this.props.changeAuth(true)}>Sign In</button>
      );
    }
  }

  renderHeader() {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post">Post A Comment</Link>
        </li>
        <li>{this.renderButton()}</li>
      </ul>
    );
  }

  render() {
    return (
      <div>
        {this.renderHeader()}
        <Routes>
          <Route path="/" element={<CommentList />} />
          <Route path="/post" element={<CommentBox />} />
        </Routes>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps, actions)(App);
