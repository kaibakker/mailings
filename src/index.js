import React from 'react';
import ReactDOM from 'react-dom';
import Newsletter from './Newsletter';

import Newsletters from './App';
import './index.css';

import { BrowserRouter, Route } from 'react-router-dom'

import '../node_modules/semantic-ui/dist/semantic.min.css';


ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Newsletters}/>
      <Route path="/newsletters" component={Newsletters}/>
      <Route path="/newsletters/:id" component={Newsletter}/>
    </div>

  </BrowserRouter> ,
  document.getElementById('root')
);
