import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Contact = () => {
  return (
    <div>
      <div className="banner about-img">
        <img src="img/contact.jpg" alt="" />
      </div>

      <div className="container">
        <div className="col-md-10 col-lg-9 mx-auto">
          <div className="contact-form">
            <div className="contact-image">
              <img src="https://image.ibb.co/kUagtU/rocket_contact.png" alt="rocket_contact" />
            </div>
            <form method="post">
              <h3>Get In Touch</h3>
              <div className="row">
                <div className="col-md-5">
                  <div className="address">
                    <h5>Address:</h5>
                    <ul className="list-unstyled">
                      <li> T-Mobile Customer Relations</li>
                      <li> PO Box 37380</li>
                      <li> Albuquerque, NM 87176-7380</li>
                    </ul>
                    <p>Please don't send anything to this address.</p>
                  </div>
                  <div className="email">
                    <h5>Email:</h5>
                    <ul className="list-unstyled">
                      <li> info@email.com</li>
                      <li> info@email.com</li>
                    </ul>
                  </div>
                  <div className="phone">
                    <h5>Phone:</h5>
                    <ul className="list-unstyled">
                      <li> +91- 8800XXXXXX34</li>
                      <li> +91- 8800XXXXXX34</li>
                    </ul>
                  </div>
                  <hr />
                  <div className="social">
                    <ul className="list-inline list-unstyled">
                      <li className="list-inline-item">
                        <Link to="#">
                          <i className="fa fa-facebook-square fa-2x"></i>
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link to="#">
                          <i className="fa fa-google-plus-square fa-2x"></i>
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link to="#">
                          <i className="fa fa-youtube-play fa-2x"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="form-group">
                    <input
                      type="text"
                      name="txtName"
                      className="form-control"
                      placeholder="Your Name *"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="txtEmail"
                      className="form-control"
                      placeholder="Your Email *"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="txtPhone"
                      className="form-control"
                      placeholder="Your Phone Number *"
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      name="txtMsg"
                      className="form-control"
                      placeholder="Your Message *"
                      style={{ width: '100%', height: '150px' }}></textarea>
                  </div>
                  <div className="form-group">
                    <input type="submit" name="btnSubmit" className="btnContact" />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
