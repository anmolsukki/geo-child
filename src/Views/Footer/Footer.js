import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="container bottom_border">
          <div className="row">
            <div className=" col-sm-4 col-md col-sm-4  col-12 col">
              <h5 className="headin5_amrc col_white_amrc pt2">Find us</h5>
              <p className="mb10">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s
              </p>
              <p>
                <i className="fa fa-location-arrow"></i> 9878/25 sec 9 rohini 35
              </p>
              <p>
                <i className="fa fa-phone"></i> +91-9999878398
              </p>
              <p>
                <i className="fa fa fa-envelope"></i> info@example.com
              </p>
            </div>

            <div className=" col-sm-4 col-md  col-6 col">
              <h5 className="headin5_amrc col_white_amrc pt2">Quick links</h5>
              <ul className="footer_ul_amrc">
                <li>
                  <a href="//webenlance.com">Image Rectoucing</a>
                </li>
                <li>
                  <a href="//webenlance.com">Clipping Path</a>
                </li>
                <li>
                  <a href="//webenlance.com">Hollow Man Montage</a>
                </li>
                <li>
                  <a href="//webenlance.com">Ebay & Amazon</a>
                </li>
                <li>
                  <a href="//webenlance.com">Hair Masking/Clipping</a>
                </li>
                <li>
                  <a href="//webenlance.com">Image Cropping</a>
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
                  <Link to="#">
                    <i className="fab fa-twitter fleft padding-right"></i>{' '}
                  </Link>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing...
                    <Link to="#">https://www.lipsum.com/</Link>
                  </p>
                </li>
                <li>
                  <Link to="#">
                    <i className="fab fa-twitter fleft padding-right"></i>{' '}
                  </Link>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing...
                    <Link to="#">https://www.lipsum.com/</Link>
                  </p>
                </li>
                <li>
                  <Link to="#">
                    <i className="fab fa-twitter fleft padding-right"></i>{' '}
                  </Link>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing...
                    <Link to="#">https://www.lipsum.com/</Link>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container">
          <ul className="foote_bottom_ul_amrc">
            <li>
              <a href="//webenlance.com">Home</a>
            </li>
            <li>
              <a href="//webenlance.com">About</a>
            </li>
            <li>
              <a href="//webenlance.com">Services</a>
            </li>
            <li>
              <a href="//webenlance.com">Pricing</a>
            </li>
            <li>
              <a href="//webenlance.com">Blog</a>
            </li>
            <li>
              <a href="//webenlance.com">Contact</a>
            </li>
          </ul>
          <p className="text-center">
            Copyright @2020 | Designed With by <Link to="#">Webmarkups</Link>
          </p>

          <ul className="social_footer_ul">
            <li>
              <a href="//webenlance.com">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="//webenlance.com">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="//webenlance.com">
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="//webenlance.com">
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