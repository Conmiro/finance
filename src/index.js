import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App.jsx";

/*
This file is responsible for the main rendering of the page. It may link
to other components, but all rendering is sourced here..

Webpack attaches this script file to a copy of the template index.html file. This
is how it has access to the element with ID app.
 */

ReactDOM.render(
    <App />,
    document.getElementById('app')
);