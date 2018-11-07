import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Home extends Component {
  render() {
    return (
      <div>
        <h1>
            Home Page
            <div>
          <Link prefetch href="/menu" to="/menu">
            <a>
              Menu page
            </a>
          </Link>
          </div>
        </h1>
      </div>
    );
  }
}