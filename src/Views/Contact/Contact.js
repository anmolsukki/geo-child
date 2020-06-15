import React from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { connect } from 'react-redux';
import * as actionCreator from '../../Redux/Actions/ActionTypes/index';
import Footer from '../Footer/Footer';

class Contact extends React.Component {
  state = {
    name: '',
  };

  componentDidMount = () => {
    // this.createBalloons(50);
  };

  random = (num) => {
    return Math.floor(Math.random() * num);
  };

  getRandomStyles = () => {
    var r = this.random(255);
    var g = this.random(255);
    var b = this.random(255);
    var mt = this.random(200);
    var ml = this.random(50);
    var dur = this.random(5) + 5;
    return `
    background-color: rgba(${r},${g},${b},0.7);
    color: rgba(${r},${g},${b},0.7); 
    box-shadow: inset -7px -3px 10px rgba(${r - 10},${g - 10},${b - 10},0.7);
    margin: ${mt}px 0 0 ${ml}px;
    animation: float ${dur}s ease-in infinite
    `;
  };

  createBalloons = (num) => {
    var balloonContainer = document.getElementById('balloon-container');
    for (var i = num; i > 0; i--) {
      var balloon = document.createElement('div');
      balloon.className = 'balloon';
      balloon.style.cssText = this.getRandomStyles();
      balloonContainer.append(balloon);
    }
  };

  contactusHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  contactSubmit = () => {
    const data = {
      name: this.state.name || '',
      email: this.state.email,
      phone: this.state.phone,
      message: this.state.message,
    };
    this.props.contactusActionData(data);
  };

  render() {
    return (
      <div className="bgImageContact">
        <ToastContainer limit={1} />
        <div className="container">
          <div className="col-md-10 col-lg-9 mx-auto contact-form-manage">
            <div className="contact-form">
              <div className="contact-image">
                <img src="https://image.ibb.co/kUagtU/rocket_contact.png" alt="rocket_contact" />
              </div>
              <div className="contactForm">
                <h3>Get In Touch</h3>
                <div className="row">
                  <div className="col-md-5">
                    <div className="address">
                      <h5>Head Office</h5>
                      <ul className="list-unstyled">
                        <li>Flat No. 100, Sector- 33,</li>
                        <li>Noida - 201301 (U.P.)</li>
                      </ul>
                    </div>
                    <div className="address">
                      <p className="contact-phone">Haryana Office</p>
                      <ul className="list-unstyled">
                        <li>H. No. 1123, Sector- 6,</li>
                        <li>Bahadurgarh – 124507 (HR.)</li>
                      </ul>
                    </div>
                    <div className="email">
                      <p className="contact-phone">Dealership Enquiry:</p>
                      <ul className="list-unstyled">
                        <li> admn.geochild@gmail.com</li>
                      </ul>
                    </div>
                    <div className="email">
                      <p className="contact-phone">Subscription Enquiry:</p>
                      <ul className="list-unstyled">
                        <li> subscription.geochild@gmail.com</li>
                      </ul>
                    </div>
                    <div className="email">
                      <p className="contact-phone">Complaint/Suggestions:</p>
                      <ul className="list-unstyled">
                        <li>complaint.geochild@gmail.com</li>
                      </ul>
                    </div>
                    <div className="phone">
                      <p className="contact-phone">Phone:</p>
                      <ul className="list-unstyled">
                        <li> +91-8901089898</li>
                        <li> +91-8901189898</li>
                      </ul>
                    </div>
                    <hr />
                    <div className="social">
                      <ul className="list-inline list-unstyled">
                        <li className="list-inline-item">
                          <Link to="http://www.facebook.com/geo.child.75">
                            <i className="fa fa-facebook-square fa-2x socialIconColor"></i>
                          </Link>
                        </li>
                        <li className="list-inline-item">
                          <Link to="https://google.com/">
                            <i className="fa fa-google-plus-square fa-2x socialIconColor"></i>
                          </Link>
                        </li>
                        <li className="list-inline-item">
                          <Link to="https://youtube.com/">
                            <i className="fa fa-youtube-play fa-2x socialIconColor"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Your Name *"
                        onChange={this.contactusHandler}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        name="email"
                        className="form-control"
                        placeholder="Your Email *"
                        onChange={this.contactusHandler}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        name="phone"
                        className="form-control"
                        placeholder="Your Phone Number *"
                        onChange={this.contactusHandler}
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        name="message"
                        className="form-control"
                        placeholder="Your Message *"
                        onChange={this.contactusHandler}
                        style={{ width: '100%', height: '150px' }}></textarea>
                    </div>
                    <div className="form-group">
                      <button
                        className="btnContact"
                        onClick={this.contactSubmit}
                        disabled={this.state.name.length > 0 ? false : true}>
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
        {/* <div id="balloon-container"></div> */}
      </div>
    );
  }
}

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    contactusActionData: (data) => dispatch(actionCreator.contactusAction(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
