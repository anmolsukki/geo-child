import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import loadable from 'loadable-components';
import Loader from './Utils/Loader';
import './Assets/PortalTheme.css';

const Loading = () => (
  <div>
    <Loader />
  </div>
);

const DefaultLayout = loadable(() => import('./Containers'), {
  LoadingComponent: Loading,
});

class App extends Component {
  componentWillMount = () => {
    document.addEventListener('contextmenu', (event) => event.preventDefault());
  };

  render() {
    return (
      <main className="pageHight">
        <HashRouter>
          <Switch>
            <Route path="/" component={DefaultLayout} />
          </Switch>
        </HashRouter>
      </main>
    );
  }
}

export default App;
