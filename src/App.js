import React, { Component } from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';


import Players from './components/player/Players';
import Header from './components/layout/Header';
import { Provider } from './context';
import AddPlayer from './components/player/AddPlayer';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import EditPlayer from './components/player/EditPlayer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Players}/>
                <Route exact path="/player/add" component={AddPlayer}/>
                <Route exact path="/player/edit/:id" component={EditPlayer}/>
                <Route exact path="/about/" component={About} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
      
    );
  }
}
export default App;
