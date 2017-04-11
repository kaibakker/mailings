import React from 'react';
import ReactDOM from 'react-dom';
import Newsletter from './Newsletter';

import App from './App';
import './index.css';

import { BrowserRouter, Route, HashRouter } from 'react-router-dom'

// import '../public/semantic/semantic.min.css';


ReactDOM.render(
  <HashRouter>
    <div>
      <Route path="/" component={App}/>
      <Route path="/newsletters/:id" component={Newsletter}/>
    </div>

  </HashRouter> ,
  document.getElementById('root')
);
