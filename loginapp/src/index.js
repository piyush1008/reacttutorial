import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import './index.css';

ReactDOM.render(<App/>,document.getElementById("root"));

const fullname=["piyush","dubey"];
const biodata=[1,...fullname,26,'male'];
console.log(fullname);
console.log(biodata);
