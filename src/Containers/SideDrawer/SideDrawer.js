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
        <img
          src="https://img.icons8.com/officel/32/000000/add-user-male.png"
          alt="icon"
          className={SideDrawerClass.AuthUser}
        />
        <div className={SideDrawerClass.authOption}>
          <Link to="/login" onClick={() => props.bacDrawer()}>
            Login
          </Link>
          <Link to="/register" onClick={() => props.bacDrawer()}>
            Register
          </Link>
        </div>
      </div>
      <ul>
        {props.navClass.map((item) => {
          return (
            <li key={item.link}>
              <Link
                to={item.link}
                className={`${SideDrawerClass.navOption} ${
                  item.isSelected === true ? SideDrawerClass.active : ''
                }`}
                onClick={() => props.bacDrawer() && props.addClass(item)}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default sideDrawer;
