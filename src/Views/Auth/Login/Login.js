import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import * as actionCreator from '../../../Redux/Actions/ActionTypes/index';
import Error from './Error';
import LoginClass from './Login.module.css';

const ValidationSchema = Yup.object().shape({
  email: Yup.string().email('Must be an email address').max(255, 'Too Long!').required('Required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .max(16, 'Too Long!')
    .required('Required'),
});

class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  render() {
    return (
      <div>
        <div className={LoginClass.bgImage}>
          <div className="row clr-margin">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-5 ml-auto text-center">
              <div className={LoginClass.formCOntainer}>
                <img src="img/avatar.svg" alt="" className={LoginClass.avatar} />
                <h2 className={LoginClass.heading}>Login</h2>
                <Formik
                  initialValues={{ email: '', password: '' }}
                  validationSchema={ValidationSchema}
                  onSubmit={(values, { setSubmitting, resetForm }) => {
                    this.props.LoginActionData(values);
                    setSubmitting(true);
                    resetForm();
                    setSubmitting(false);
                  }}>
                  {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mt-5">
                          <div className={LoginClass.loginFormVertical}>
                            <div className={LoginClass.loginFormGroup}>
                              <div className={LoginClass.loginControl}>
                                <input
                                  type="text"
                                  name="email"
                                  className={`${LoginClass.formControl} ${
                                    touched.email && errors.email ? 'has-error' : null
                                  }`}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.email}
                                />
                                <span className={LoginClass.floatingLabel}>Email</span>
                                <Error touched={touched.email} message={errors.email} />
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
                                  name="password"
                                  className={`${LoginClass.formControl} ${
                                    touched.email && errors.email ? 'has-error' : null
                                  }`}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.password}
                                />
                                <span className={LoginClass.floatingLabel}>Password</span>
                                <Error touched={touched.password} message={errors.password} />
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
                          <button
                            className={`${LoginClass.btnClass} ${LoginClass.btnAnimated} ${LoginClass.btn}`}
                            type="submit">
                            Login
                          </button>
                        </div>
                      </div>
                    </form>
                  )}
                </Formik>
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
    LoginActionData: (data) => dispatch(actionCreator.LoginAction(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
