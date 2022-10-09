import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import 'macro-css';
import {BrowserRouter as Router, Routes} from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
   <Router>
        {/*<Routes index element={<App/>}/>*/}
       <App/>
   </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

