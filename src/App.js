import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// var Home = require('Newsletter')

// import Home from 'Newsletter';
// using ES6 modules
// import { Router, Route, Switch , hashHistory} from 'react-router'

var xhr = new XMLHttpRequest();

class App extends Component {
  componentDidMount() {
    xhr.open("GET", "https://blueberry-custard-97689.herokuapp.com/api/newsletters/?from_email=" + this.props.params.email, false);
    xhr.send();

    this.setState({ newsletters: JSON.parse(xhr.responseText) })
  }
  render() {
    return (
      <div>snor</div>
    )
  }
}



export default App;
