import React from 'react';
import ReactDOM from 'react-dom';
import Newsletter from './Newsletter';

import App from './App';
import './index.css';

import { BrowserRouter, Route, HashRouter } from 'react-router-dom'

import '../semantic/dist/semantic.min.css';


ReactDOM.render(
  <HashRouter>
    <div className="App">
      <div className="ui four column grid">
        <div className="row">
          <div className="six wide column">
            <div className="ui card">
              <div className="content">
                <div className="header">Recent Activity</div>
              </div>
              <div className="content">
                <div className="ui feed">
                  <Route path="/" component={App}/>
                </div>
              </div>
            </div>
          </div>
          <div className="six wide column">
            <Route path="/newsletters/:id" component={Newsletter}/>
          </div>
        </div>
      </div>
    </div>

  </HashRouter> ,
  document.getElementById('root')
);
