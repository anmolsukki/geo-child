import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Routes from '../Config/Routes';
import { PrivateRoute } from '../Config/PrivateRoute';
import Loader from '../Utils/Loader';
import Navbar from './Toolbars/Toolbar';
import SideDrawer from './SideDrawer/SideDrawer';
import Backdrop from './BackDrop/BackDrop';

class Main extends React.Component {
  state = {
    sideDrawerOpen: false,
    navData: [
      {
        title: 'About',
        link: '/about',
        img: 'img/team.svg',
      },
      {
        title: 'Contact',
        link: '/contact',
        img: 'img/navContact.svg',
      },
      {
        title: 'Team',
        link: '/team',
        img: 'img/team.svg',
      },
      {
        title: 'Offers',
        link: '/magazine',
        img: 'img/magazine.svg',
      },
    ],
  };

  loading = () => (
    <div>
      <Loader />
    </div>
  );

  drawerToggleClickHandler = async () => {
    await this.setState((prevState) => {
      return {
        sideDrawerOpen: !prevState.sideDrawerOpen,
      };
    });
  };

  logoutHandler = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    this.props.history.push('/home');
  };

  render() {
    let backdrop;
    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.drawerToggleClickHandler} />;
    }
    return (
      <div>
        <Navbar
          drawerClickHandler={this.drawerToggleClickHandler}
          navClass={this.state.navData}
          logout={this.logoutHandler}
        />
        <SideDrawer
          show={this.state.sideDrawerOpen}
          bacDrawer={this.drawerToggleClickHandler}
          navClass={this.state.navData}
          logout={this.logoutHandler}
        />
        {backdrop}
        <main>
          <Suspense fallback={this.loading()}>
            <Switch>
              {Routes.map((route, idx) => {
                if (route.isPrivate) {
                  return (
                    <PrivateRoute
                      key={idx}
                      path={route.path}
                      exact={route.exact}
                      name={route.name}
                      component={route.component}
                    />
                  );
                }
                return route.component ? (
                  <Route
                    key={idx}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    render={(props) => <route.component {...props} />}
                  />
                ) : null;
              })}
              <Redirect from="/" to="/home" />
            </Switch>
          </Suspense>
        </main>
      </div>
    );
  }
}

export default Main;
