import React from "react";
import Navbar from "./Navbar";
import CoordView from "./CoordView";
import AdminView from "./AdminView"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function Content() {

  return (
    <Router>
      <div>
        <Navbar />
        {
          window.localStorage['type'] == 'Coordinator' ?
            <CoordView />
            :
            <AdminView />
        }
      </div>
    </Router>

  );
}