import React, { Component } from 'react';
import { ReactRouter, BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';

export default class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route render= { () => <p>Not found</p> }/>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}
