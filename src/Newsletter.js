import React, { Component } from 'react';
import './App.css';

import App from './App';

var xhr = new XMLHttpRequest();


var url = 'http://blueberry-custard-97689.herokuapp.com'
// var url = 'http://localhost:3000'


class Newsletter extends Component {
  constructor(props) {
    super(props);
    // this.state = { mailings: [] }

    xhr.open("GET", url + "/api/newsletters/" + this.props.match.params.id, false);
    xhr.send();

    this.state = { mailings: JSON.parse(xhr.responseText) }
  }

  render() {
    return (
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

                    <App />
                  </div>
                </div>
              </div>
            </div>
            <div className="nine wide column">
              <div dangerouslySetInnerHTML={ { __html: JSON.parse(xhr.responseText)[0].html } } />
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Newsletter
