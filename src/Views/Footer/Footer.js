import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>
      <div className="banner about-img">
        <img src="img/grass.png" alt="" />
      </div>
      <footer className="footer">
        <div className="container bottom_border">
          <div className="row">
            <div className=" col-sm-4 col-md col-sm-4  col-12 col">
              <h5 className="headin5_amrc col_white_amrc pt2">Head Office</h5>
              <p className="mb10">Flat No. 100, Sector- 33, Noida - 201301 (U.P.)</p>
              <p>
                <b>
                  <b>Haryana Office </b>
                </b>
              </p>
              <p>H. No. 1123, Sector- 6, Bahadurgarh – 124507 (HR.)</p>
              <p>
                <i className="fa fa-location-arrow"></i> +91-8901089898
              </p>
              <p>
                <i className="fa fa-phone"></i> +91-8901189898
              </p>
              <p>
                <i className="fa fa fa-envelope"></i> admn.geochild@gmail.com
              </p>
            </div>

            <div className=" col-sm-4 col-md  col-6 col">
              <h5 className="headin5_amrc col_white_amrc pt2">Disclaimer</h5>
              <ul className="footer_ul_amrc">
                <li>
                  <a href="//webenlance.com" style={{ fontSize: '10px', textAlign: 'justify' }}>
                    The material published on this website is protected by copyright. No part or
                    thereof shall be copied, reproduced or imitated in any form i.e. print, text,
                    digital, video or audio. Articles, photos or other content once submitted,
                    becomes the property of GeoChild. It may only be used for research or
                    educational purposes with the prior permission from GeoChild. Authors may not
                    sell, alter or further reproduce or distribute any part, once it becomes part of
                    this publication. Failure to comply with the terms of this warning or any other
                    violation may expose to legal action for copyright infringement. All the
                    disputes, if arise, will be settled in District court of G.B. Nagar.
                  </a>
                </li>
              </ul>
            </div>

            <div className=" col-sm-4 col-md  col-6 col">
              <h5 className="headin5_amrc col_white_amrc pt2">Quick links</h5>
              <ul className="footer_ul_amrc">
                <li>
                  <a href="//webenlance.com">Remove Background</a>
                </li>
                <li>
                  <a href="//webenlance.com">Shadows & Mirror Reflection</a>
                </li>
                <li>
                  <a href="//webenlance.com">Logo Design</a>
                </li>
                <li>
                  <a href="//webenlance.com">Vectorization</a>
                </li>
                <li>
                  <a href="//webenlance.com">Hair Masking/Clipping</a>
                </li>
                <li>
                  <a href="//webenlance.com">Image Cropping</a>
                </li>
              </ul>
            </div>

            <div className=" col-sm-4 col-md  col-12 col">
              <h5 className="headin5_amrc col_white_amrc pt2">Follow us</h5>

              <ul className="footer_ul2_amrc">
                <li>
                  <a
                    href="http://www.facebook.com/geo.child.75"
                    target="_blank"
                    rel="noopener noreferrer">
                    <i className="fab fa-facebook fleft padding-right"></i>{' '}
                  </a>
                  <p>
                    <a
                      href="http://www.facebook.com/geo.child.75"
                      target="_blank"
                      rel="noopener noreferrer">
                      http://www.facebook.com/geo.child.75
                    </a>
                  </p>
                </li>
                <li>
                  <a href="https://twitter.com/ChildGeo" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter fleft padding-right"></i>{' '}
                  </a>
                  <p>
                    <a
                      href="https://twitter.com/ChildGeo"
                      target="_blank"
                      rel="noopener noreferrer">
                      https://twitter.com/ChildGeo
                    </a>
                  </p>
                </li>
                <li>
                  <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin fleft padding-right"></i>{' '}
                  </a>
                  <p>
                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                      https://www.linkedin.com/
                    </a>
                  </p>
                </li>
                <li>
                  <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram fleft padding-right"></i>{' '}
                  </a>
                  <p>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                      https://www.instagram.com/
                    </a>
                  </p>
                </li>
                <li>
                  <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-youtube fleft padding-right"></i>{' '}
                  </a>
                  <p>
                    <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer">
                      https://youtube.com/
                    </a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container">
          <ul className="foote_bottom_ul_amrc">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
            <li>
              <Link to="/team">Team</Link>
            </li>
            <li>
              <Link to="/magazine">Magazine</Link>
            </li>
            <li>
              <Link to="#">Special</Link>
            </li>
          </ul>
          <p className="text-center">
            Copyright @2020 | Developed With{' '}
            <Link to="#">
              <span className="fa fa-heart copyright"></span>
            </Link>
          </p>

          <ul className="social_footer_ul">
            <li>
              <a
                href="http://www.facebook.com/geo.child.75"
                target="_blank"
                rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/ChildGeo" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
