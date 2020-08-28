import React from 'react';

import { Provider } from "react-redux";
import { configureStore } from "../store";
import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./Navbar";

const store = configureStore();

const  App = ()=> {
  return (
    <Provider store={ store }>
      <Router>
        <Navbar />
        <div className="container">
          <h1 className="display-1"> Yay!!! </h1>
          <p className="lead">Bootstrap has been loaded.</p>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
