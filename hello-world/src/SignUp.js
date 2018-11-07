import React, { Component } from 'react';
import { Home } from './Home';
import { SignIn } from './SignIn';
import { Link,Router, Route, IndexRoute, BrowserRouter, browserHistory, Redirect } from 'react-router-dom';

export class SignUp extends Component {

    constructor(props) {
        super(props);
      }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ message: 'Sending...' }, this.sendFormData);
    }

    sendFormData() {
        var formData = {
            Title: this.refs.Title.value,
            Author: this.refs.Author.value,
            Genre: this.refs.Genre.value,
            YearReleased: this.refs.YearReleased.value
        };
        setTimeout(() => {
            console.log(formData);
            this.setState({ message: 'data sent!' });
        }, 3000);
    }

 
    render() {
        return (
            <div>
                <h1>
                    SignUp to log in to your account
                </h1>
                <form onSubmit={(e)=>this.handleSubmit(e)}>
                    <p> <label for="title">Name</label><input id="title" type="text" ref="Title" /></p>
                    <p><label for="author">Mobile</label><input id="author" type="text" ref="Author" /></p>
                    <p><label for="genre">Gender</label><input id="genre" type="text" ref="Genre" /></p>
                    <p><label for="first_published">Date of birth</label><input id="first_published" type="text" ref="YearReleased" /></p>
                    <p><input type="submit" /></p>
                </form>

                    <Link prefetch href="/signin" to="/signin">
                      <a>
                        login
                      </a>
                    </Link>

            </div>
        );
    }
}