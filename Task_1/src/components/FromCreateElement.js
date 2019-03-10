import React, { Component } from "react";
import '../styles/App.css';

class FromCreateElement extends Component {
  render(){
    return React.createElement('h1', null, 'Hello World from Create Element!')
  }
}

export default FromCreateElement;
