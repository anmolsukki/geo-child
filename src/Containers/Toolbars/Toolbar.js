import React from 'react';
import { Link } from 'react-router-dom';
import DrawerToggleButton from '../DrawerToggle/DrawerToggleButton';
import ToolbarClass from './Toolbar.module.css';

const navbar = (props) => {
  return (
    <header className={ToolbarClass.toolbar}>
      <nav className={ToolbarClass.toolbarNavigation}>
        <div className={ToolbarClass.toolbarToggleButton}>
          <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <div className={ToolbarClass.logo}>
          <Link to="/home">
            <img src="img/logo.svg" alt="" />
          </Link>
        </div>
        <div className={ToolbarClass.spacer} />
        <div className={ToolbarClass.toolbarNavigationItems}>
          <ul>
            {props.navClass.map((item) => {
              return (
                <li key={item.link} className={ToolbarClass.menuBar}>
                  <Link to={item.link}>
                    <img src={item.img} alt="" className={ToolbarClass.navImage} />
                  </Link>
                  <Link to={item.link}>{item.title}</Link>
                </li>
              );
            })}
            <li className={ToolbarClass.menuBar}>
              <aside className={ToolbarClass.menu}>
                <Link to="#">
                  <img src="img/user.svg" alt="" className={ToolbarClass.navImage} />
                </Link>
                <Link to="#">Profile</Link>
                <div className={ToolbarClass.ArrowUp}></div>
                {localStorage.getItem('token') ? (
                  <div className={ToolbarClass.DropContainer}>
                    <Link to="#">{localStorage.getItem('name')}</Link>
                    <Link to="#" onClick={() => props.logout()}>
                      Logout
                    </Link>
                  </div>
                ) : (
                  <div className={ToolbarClass.DropContainer}>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                  </div>
                )}
              </aside>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default navbar;
