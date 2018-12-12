import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import LogIn from '../../components/LogIn';
import dice from './images/dice.png';
import './Landing.css';

class Landing extends Component {
  state = {
    logInClicked: false,
    signUpClicked: false
  };

  toggleLogIn = () => {
    this.setState({
      logInClicked: !this.state.logInClicked
    });
    if (this.state.signUpClicked) {
      this.setState({
        signUpClicked: false
      });
    }
  };

  toggleSignUp = () => {
    this.setState({
      signUpClicked: !this.state.signUpClicked
    });
    if (this.state.logInClicked) {
      this.setState({
        logInClicked: false
      });
    }
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 text-center">
            <h1 className="mt-5">Go Bunco</h1>
            {!this.state.logInClicked && !this.state.signUpClicked && (
              <img src={dice} alt="dice" />
            )}
            {this.state.logInClicked && <LogIn />}
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 text-center p-0">
            <button className="btn w-100 mt-5" onClick={this.toggleSignUp}>
              Sign Up
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 text-center p-0">
            <button className="btn w-100 mt-5" onClick={this.toggleLogIn}>
              Log In
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
