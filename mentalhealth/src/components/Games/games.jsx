import React,{Component} from "react";
import ReactDOM from "react-dom";
import Stage from "./Stage ";

import "./games.css";

export default class Games extends Component {
  render(){
    return (
      <div className="App">
        <Stage />
      </div>
    );
    }
  }  
  


const rootElement = document.getElementById("root");
ReactDOM.render(<Games/>, rootElement);