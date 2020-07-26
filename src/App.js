import React from 'react';
import * as Containers from './containers/index';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Layout from './layouts/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import './stylesheets/styles.css';

const App = () => {
  return (
    <Router>
      <Switch>
        <Layout exact path="/" component={Containers.Home} header={true} footer={true}/>
        <Layout exact path="/about" component={Containers.About} header={true} footer={false}/>
        <Layout exact path="/profile" component={Containers.Profile} header={true} footer={true}/>
      </Switch>
    </Router>
  );
}

export default App;
