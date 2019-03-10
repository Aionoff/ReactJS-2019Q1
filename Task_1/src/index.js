import React from "react";
import ReactDOM from "react-dom";
import Hello from "./components/App.js";
import FromComponent from "./components/FromComponent.js";
import FromCreateElement from "./components/FromCreateElement.js";
import FromPureComponent from "./components/FromPureComponent.js";
import FromFunctionalComponent from "./components/FromFunctionalComponent.js"


ReactDOM.render(<Hello />, document.getElementById("hello"));
ReactDOM.render(<FromComponent />, document.getElementById("from_component"));
ReactDOM.render(<FromCreateElement />, document.getElementById("from_create_element"));
ReactDOM.render(<FromPureComponent />, document.getElementById("from_pure_component"));
ReactDOM.render(<FromFunctionalComponent />, document.getElementById("from_functional_component"));
