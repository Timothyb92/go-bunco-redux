import React, { Component } from 'react';
import './Landing.css';

class Landing extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 text-center">
            <h1 className="mt-5">Go Bunco</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 text-center p-0">
            <button className="btn w-100 mt-5">Sign Up</button>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 text-center p-0">
            <button className="btn w-100 mt-5">Log In</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
