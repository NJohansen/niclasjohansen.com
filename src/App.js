import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Frontpage from './views/Frontpage/Frontpage';
import Portfolio from './views/Portfolio/Portfolio';
import Blog from './views/Blog/Blog';
import About from './views/About/About';
import Header from './components/Header/Header';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Header/>
          <Switch>
            <Route exact path="/" component={Frontpage}/>
            <Route path="/portfolio" component={Portfolio}/>
            <Route path="/blog" component={Blog}/>
            <Route path="/about" component={About}/>
          </Switch>
        </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
