import React, { Component } from "react";
import "../styles/App.scss";
import List from "./List";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <div>
          <h2>Articles</h2>
          <List />
        </div>
      </div>
    );
  }
}
