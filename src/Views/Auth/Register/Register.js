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
  name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required*'),
  email: Yup.string().email('Must be an email address').max(255, 'Too Long!').required('Required*'),
  mobile: Yup.string().min(10, 'Too Short!').max(10, 'Too Long!').required('Required*'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .max(16, 'Too Long!')
    .required('Required*'),
});

class Register extends Component {
  state = {
    name: '',
    email: '',
    mobile: '',
    password: '',
  };

  render() {
    return (
      <div className="fadeInEffect">
        <ToastContainer limit={1} />
        <div className={AuthClass.bgImageRegister}>
          <div className="row clr-margin">
            <div className="col-xl-5 col-lg-6 col-md-6 col-sm-12 col-12 my-5 ml-auto text-center">
              <div className={AuthClass.formCOntainer}>
                <img src="img/avatar.svg" alt="" className={AuthClass.avatar} />
                <h2 className={AuthClass.heading}>Signup</h2>
                <Formik
                  initialValues={{ name: '', email: '', mobile: '', password: '' }}
                  validationSchema={ValidationSchema}
                  onSubmit={(values, { setSubmitting }) => {
                    this.props.registerActionData(values);
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
                                  name="name"
                                  className={`${AuthClass.formControl} ${
                                    touched.name && errors.name ? 'has-error' : null
                                  }`}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.name}
                                />
                                <span className={AuthClass.floatingLabel}>Name</span>
                                <Error touched={touched.name} message={errors.name} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
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
                                  type="text"
                                  name="mobile"
                                  className={`${AuthClass.formControl} ${
                                    touched.mobile && errors.mobile ? 'has-error' : null
                                  }`}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.mobile}
                                />
                                <span className={AuthClass.floatingLabel}>Mobile</span>
                                <Error touched={touched.mobile} message={errors.mobile} />
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
                                    touched.password && errors.password ? 'has-error' : null
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
                          <Link to="/login" className={`text-right ${AuthClass.btnForgot}`}>
                            Login
                          </Link>
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                          <button
                            className={`${AuthClass.btnClass} ${AuthClass.btnAnimated} ${AuthClass.btn}`}
                            type="submit">
                            Register
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

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    registerActionData: (data) => dispatch(actionCreator.RegisterAction(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
