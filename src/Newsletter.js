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

            <div className="nine wide column">
              <div dangerouslySetInnerHTML={ { __html: JSON.parse(xhr.responseText)[0].html } } />
            </div>
      
    );
  }
}

export default Newsletter
