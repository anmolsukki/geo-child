import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProfilePage extends Component {
  render() {
    return (
      <div className="container">
        <main className="ProfileMain">
          <div className="user-view">
            <nav className="user-view__menu">
              <ul className="side-nav">
                <li className="side-nav--active">
                  <Link to="#">Profile</Link>
                </li>
                <li>
                  <Link to="#">Settings</Link>
                </li>
                <li>
                  <Link to="#">My reviews</Link>
                </li>
                <li>
                  <Link to="#">Billing</Link>
                </li>
              </ul>
            </nav>
            <div className="user-view__content">
              <div className="user-view__form-container">
                <h2 className="heading-secondary ma-bt-md">Your account settings</h2>
                <form className="form form-user-data">
                  <div className="form__group">
                    <label className="form__label" htmlFor="name">
                      Name
                    </label>
                    <input className="form__input" id="name" type="text" required="required" />
                  </div>
                  <div className="form__group ma-bt-md">
                    <label className="form__label" htmlFor="email">
                      Email address
                    </label>
                    <input className="form__input" id="email" type="email" required="required" />
                  </div>
                  <div className="form__group right">
                    <button className="btn btn--small btn--green">Save settings</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default ProfilePage;
