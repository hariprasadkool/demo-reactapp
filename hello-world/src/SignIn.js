import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

export class SignIn extends Component {
  render() {
    return (
      <div>
        <h1>
          SignIn page
          <div>
          <Link prefetch href="/home" to="/home">
            <a>
              Home page
            </a>
          </Link>
          </div>
        </h1>
      </div>
    );
  }
}