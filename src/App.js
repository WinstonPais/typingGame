import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    powerval : 0,
  }

  powerValUpdateHandler = (event) => {
    this.setState({username: event.target.value});
  }

  render() {
    return (
      <div className="mxheight fixwidth row">
        <div className="mxheight instructions col-md-2">
          <h1>Instructions</h1>
          <ul>
            <li>look at the quote given and type the quote in the text area provided</li>
            <li>finish quotes for the power bar on the right to go up</li>
          </ul>
        </div>
        <div className="mxheight mainpage col-md-8">
          <h1 id="cn">Welcome Let's Play</h1>
          <h1 id="timer" className="timer">
            0
          </h1>
          <p id="quoteDisplay" className="quote-display">
            lorem
          </p>
          <textarea id="quoteInput" className="quote-input" autoFocus></textarea>
        </div>
        <div className="mxheight score col-md-2">

          <div className="row t4">
            <div className="col-md-12">

            </div>
          </div>
          <div className="row t4">
            <div className="col-md-12">

            </div>
          </div>
          <div className="row t4">
            <div className="col-md-12">

            </div>
          </div>
          <div className="row t4">
            <div className="col-md-12">

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
