import React, { Component } from 'react';
import './App.css';


var xhr = new XMLHttpRequest();


// var url_server = 'http://blueberry-custard-97689.herokuapp.com'
var url_development = 'http://localhost:3000'


class Newsletter extends Component {
  constructor(props) {
    super(props);
    // this.state = { mailings: [] }

    xhr.open("GET", url_development + "/api/newsletters/" + this.props.match.params.id, false);
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
                    { this.state.mailings.map(function(mailing, index) {
                      return (
                        <div className="event" key={ index }>
                          <div className="content">
                            <p className="summary">{ mailing.title }</p>
                            <div className="date">1 day ago</div>
                          </div>
                        </div>
                      )
                    })}
                    <div className="event">
                      <div className="content">
                        <p className="summary">You added <a>Jenny Hess</a> to your <a>coworker</a> group.</p>
                        <div className="date">1 day ago</div>
                      </div>
                    </div>
                    <div className="event">
                      <div className="content">
                        <p className="summary">You added <a>Molly Malone</a> as a friend.</p>
                        <div className="date right pointing west">3 days ago</div>
                      </div>
                    </div>
                    <div className="event">
                      <div className="content">
                        <p className="summary">You added <a>Elliot Baker</a> to your <a>musicians</a> group.</p>
                        <div className="date">4 days ago</div>
                      </div>
                    </div>
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
