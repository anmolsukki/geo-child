import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { connect } from 'react-redux';
import * as actionCreator from '../../../Redux/Actions/ActionTypes/index';
import Error from './Error';
import AuthClass from '../Auth.module.css';

const ValidationSchema = Yup.object().shape({
  email: Yup.string().email('Must be an email address').max(255, 'Too Long!').required('Required*'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .max(16, 'Too Long!')
    .required('Required*'),
});

class Login extends Component {
  state = {
    email: '',
    password: '',
    forgotEmail: '',
  };

  forgotHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitFogot = () => {
    const data = {
      email: this.state.forgotEmail,
    };
    this.props.forgotActionData(data);
  };

  render() {
    return (
      <div className="fadeInEffect">
        <ToastContainer limit={1} />
        <div className={AuthClass.bgImageLogin}>
          <div className="row clr-margin">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-5 ml-auto text-center">
              <div className={AuthClass.formCOntainer}>
                <img src="img/avatar.svg" alt="" className={AuthClass.avatar} />
                <h2 className={AuthClass.heading}>Login</h2>
                <Formik
                  initialValues={{ email: '', password: '' }}
                  validationSchema={ValidationSchema}
                  onSubmit={(values, { setSubmitting }) => {
                    this.props.LoginActionData(values);
                    setSubmitting(true);
                  }}>
                  {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mt-5">
                          <div className={AuthClass.AuthFormVertical}>
                            <div className={AuthClass.authFormGroup}>
                              <div className={AuthClass.loginControl}>
                                <input
                                  type="text"
                                  name="email"
                                  className={`${AuthClass.formControl} ${
                                    touched.email && errors.email ? 'has-error' : null
                                  }`}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.email}
                                />
                                <span className={AuthClass.floatingLabel}>Email</span>
                                <Error touched={touched.email} message={errors.email} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                          <div className={AuthClass.AuthFormVertical}>
                            <div className={AuthClass.authFormGroup}>
                              <div className={AuthClass.loginControl}>
                                <input
                                  type="password"
                                  name="password"
                                  className={`${AuthClass.formControl} ${
                                    touched.email && errors.email ? 'has-error' : null
                                  }`}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.password}
                                />
                                <span className={AuthClass.floatingLabel}>Password</span>
                                <Error touched={touched.password} message={errors.password} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-3">
                          <Link
                            to="#"
                            className={AuthClass.btnForgot}
                            data-toggle="modal"
                            data-target="#form">
                            Forgot Password
                          </Link>
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                          <button
                            className={`${AuthClass.btnClass} ${AuthClass.btnAnimated} ${AuthClass.btn}`}
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
        <div
          className="modal fade"
          id="form"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header border-bottom-0">
                <h5 className="modal-title" id="exampleModalLabel">
                  Forgot Password
                </h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label htmlFor="email1">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email1"
                    name="forgotEmail"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    onChange={this.forgotHandler}
                  />
                </div>
              </div>
              <div className="modal-footer border-top-0 d-flex justify-content-center">
                <button type="submit" className="btn btn-success" onClick={this.submitFogot}>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    LoginActionData: (data) => dispatch(actionCreator.LoginAction(data)),
    forgotActionData: (data) => dispatch(actionCreator.ForgotAction(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
