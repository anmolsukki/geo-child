import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionCreator from '../../../Redux/Actions/ActionTypes/index';
import LoginClass from './Login.module.css';

class Login extends Component {
  loginHandler = (e) => {
    const inputLength = e.target.value;
    if (inputLength.length > 0) {
      const nextLength = e.target.nextElementSibling;
      let addClass = `${LoginClass.unfocusLabel} ${LoginClass.unfocus}`;
      nextLength.className = addClass;
    } else {
      const nextLength = e.target.nextElementSibling;
      let addClass = `${LoginClass.floatingLabel}`;
      nextLength.className = addClass;
    }
  };

  render() {
    return (
      <div>
        <div className="row clr-margin">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mt-5 text-center">
            <div>
              <img src="img/bg.svg" alt="" className={LoginClass.bgImage} />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mt-5 text-center">
            <img src="img/avatar.svg" alt="" className={LoginClass.avatar} />
            <h2 className={LoginClass.heading}>Welcome</h2>
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mt-5">
                <div className={LoginClass.loginFormVertical}>
                  <div className={LoginClass.loginFormGroup}>
                    <div className={LoginClass.loginControl}>
                      <input
                        type="text"
                        className={LoginClass.formControl}
                        name="email"
                        onChange={(e) => this.loginHandler(e)}
                      />
                      <span className={LoginClass.floatingLabel}>Email</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className={LoginClass.loginFormVertical}>
                  <div className={LoginClass.loginFormGroup}>
                    <div className={LoginClass.loginControl}>
                      <input
                        type="password"
                        className={LoginClass.formControl}
                        name="password"
                        onChange={(e) => this.loginHandler(e)}
                      />
                      <span className={LoginClass.floatingLabel}>Password</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-3">
                <Link to="#" className={LoginClass.btnForgot}>
                  Forgot Password
                </Link>
              </div>
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <Link
                  to="#"
                  className={`${LoginClass.btn} ${LoginClass.btnLogin} ${LoginClass.btnAnimated}`}>
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const ctrUserData = state.CtrUser;
  return {
    userStateData: ctrUserData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userActionData: () => dispatch(actionCreator.UserAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
