import React from 'react';

import { Provider } from "react-redux";
import { configureStore } from "../store";
import { BrowserRouter as Router } from "react-router-dom";

const store = configureStore();

const  App = ()=> {
  return (
    <Provider store={ store }>
      <Router>
        <div className="App">
          {"hello world "}
        </div>
      </Router>
    </Provider>
  );
}

export default App;
