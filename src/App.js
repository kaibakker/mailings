import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// var Home = require('Newsletter')

// import Home from 'Newsletter';
// using ES6 modules
// import { Router, Route, Switch , hashHistory} from 'react-router'

var xhr = new XMLHttpRequest();

var url = 'http://blueberry-custard-97689.herokuapp.com'
// var url = 'http://localhost:3000'

class App extends Component {
  constructor(props) {
    super(props);
    // this.state = { mailings: [] }

    xhr.open("GET", url + "/api/newsletters", false);
    xhr.send();

    // this.setState({ newsletters: JSON.parse(xhr.responseText) })
    this.state = { newsletters: JSON.parse(xhr.responseText) }
  }
  render() {
    if(this.state.newsletters) {
      return <div>
        { this.state.newsletters.map(function(mailing, index) {
          return (
            <div className="event" key={ index }>
              <div className="content">
                <a href={ "/#/newsletters/" + mailing._id }>
                  <div className="summary">{ mailing.subject }</div>
                  <div className="date">1 day ago</div>
                </a>
              </div>
            </div>
          )
        }) }
      </div>
    } else {
      return (
        <div>no newsletter</div>
      )
    }
  }
}



export default App;
