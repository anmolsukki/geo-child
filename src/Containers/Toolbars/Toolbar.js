import React from 'react';
import { Link } from 'react-router-dom';
import DrawerToggleButton from '../DrawerToggle/DrawerToggleButton';
import ToolbarClass from './Toolbar.module.css';

const navbar = (props) => {
  const myFunction = () => {
    var element = document.getElementsByClassName(ToolbarClass.active);
    if (element.length) {
      element[0].classList.remove(ToolbarClass.active);
    }
  };

  return (
    <header className={ToolbarClass.toolbar}>
      <nav className={ToolbarClass.toolbarNavigation}>
        <div className={ToolbarClass.toolbarToggleButton}>
          <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <div className={ToolbarClass.logo} onClick={myFunction}>
          <Link to="/home">
            <span>GeoChild</span>
            <p className={ToolbarClass.brand}>India's first child rights magazine</p>
          </Link>
        </div>
        <div className={ToolbarClass.spacer} />
        <div className={ToolbarClass.toolbarNavigationItems}>
          <ul>
            {props.navClass.map((item) => {
              return (
                <li key={item.link}>
                  <Link to={item.link} className={`${ToolbarClass.navOption}`}>
                    {item.title}
                  </Link>
                </li>
              );
            })}
            <li>
              <aside className={ToolbarClass.menu}>
                <img src="img/user.svg" alt="" style={{ width: '30px' }} />
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
