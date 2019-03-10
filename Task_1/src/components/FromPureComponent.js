import React, { Component } from "react";
import '../styles/App.css';

class FromPureComponent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.message = "Hello World from Pure Component!";
  }

  render() {
    return(
      <h1>{this.message}</h1>
    );
  }
}

export default FromPureComponent;
