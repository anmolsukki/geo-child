import React from 'react';
import { Link } from 'react-router-dom';
import SideDrawerClass from './SideDrawer.module.css';

const sideDrawer = (props) => {
  let drawerClasses = [SideDrawerClass.sideDrawer];
  if (props.show) {
    drawerClasses = `${SideDrawerClass.sideDrawer} ${SideDrawerClass.open}`;
  }

  return (
    <nav className={drawerClasses}>
      <div className={SideDrawerClass.main}>
        <img src="img/user.svg" alt="icon" className={SideDrawerClass.AuthUser} />
        {localStorage.getItem('token') ? (
          <div className={SideDrawerClass.authOption}>
            <Link to="#">{localStorage.getItem('name')}</Link>
          </div>
        ) : (
          <div className={SideDrawerClass.authOption}>
            <Link to="/login" onClick={() => props.bacDrawer()}>
              Login
            </Link>
            <Link to="/register" onClick={() => props.bacDrawer()}>
              Register
            </Link>
          </div>
        )}
      </div>
      <ul>
        {props.navClass.map((item) => {
          return (
            <li key={item.link}>
              <Link
                to={item.link}
                className={`${SideDrawerClass.navOption}`}
                onClick={() => props.bacDrawer()}>
                {item.title}
              </Link>
            </li>
          );
        })}
        {localStorage.getItem('token') ? (
          <React.Fragment>
            <li>
              <Link
                to="/profile"
                className={`${SideDrawerClass.navOption}`}
                onClick={() => props.bacDrawer()}>
                Profile
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className={`${SideDrawerClass.navOption}`}
                onClick={() => props.bacDrawer() && props.logout()}>
                Logout
              </Link>
            </li>
          </React.Fragment>
        ) : null}
      </ul>
    </nav>
  );
};

export default sideDrawer;
