import React, { Component } from "react";
import { Link } from 'react-router-dom';
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="landing">
        <div className="light-overlay landing-inner text-dark">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-4 mb-4">Work Pro</h1>
                <p className="lead">
                  Create your account to join active projects or start you own
                </p>
                <hr />
                <Link to="/register" className="btn btn-lg btn-success mr-2">
                  Sign Up
                </Link>
                <Link to="/login" className="btn btn-lg btn-secondary mr-2">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Index;
