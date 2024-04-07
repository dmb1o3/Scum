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
            <Route path="/" element={<p>HELLO</p>} />
            <Route path="/create" element={<CreateRoomPage />} />
            <Route path="/join" element={<JoinRoomPage />} />               
          </Routes>
        </Router>
      );
    }
  }