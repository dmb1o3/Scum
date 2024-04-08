import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import CreateRoomPage from "./CreateRoomPage";
import JoinRoomPage from "./JoinRoomPage";


export default class HomePage extends Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <Router>
          <Routes>
            <Route path="/" element={<h1>HELLO</h1>} />
            <Route path="/create" element={<CreateRoomPage />} />
            <Route path="/join" element={<JoinRoomPage />} />               
          </Routes>
        </Router>
      );
    }
  }