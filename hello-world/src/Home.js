import React, { Component }  from 'react';
import { Link } from 'react-router-dom';

export class Home extends Component {
    render() {
        return (
  <div>
    <h1>
      <Link to="/">Home Component</Link>
    </h1>
  </div>
      );
    }
}