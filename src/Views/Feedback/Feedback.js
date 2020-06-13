import React from 'react';
import { TextInput } from './TextInput';
import Footer from '../Footer/Footer';

class Magazines extends React.Component {
  state = {
    name: '',
    school: '',
    class: '',
    address: '',
    mobile: '',
    email: '',
    renderID: '',
  };

  getHelpFormHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    return (
      <React.Fragment>
        <div className="fadeInEffect bgImageFeedback">
          <div className="page-content-inner">
            <div className="feedback-form-vertical">
              <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mt-5 feedback-form-container">
                  <div className="counselling-page-header">
                    <div className="feedback-main-title">
                      <span>Feedback Form</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                      <TextInput
                        mainClass="feedback-form-group"
                        type="text"
                        className="feedback-form-control"
                        value={this.state.name}
                        name="name"
                        onChange={this.getHelpFormHandler}
                        label="Name"
                      />
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                      <TextInput
                        mainClass="feedback-form-group"
                        type="text"
                        className="feedback-form-control"
                        value={this.state.school}
                        name="school"
                        onChange={this.getHelpFormHandler}
                        label="School"
                      />
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                      <TextInput
                        mainClass="feedback-form-group"
                        type="text"
                        className="feedback-form-control"
                        value={this.state.class}
                        name="class"
                        onChange={this.getHelpFormHandler}
                        label="Class"
                      />
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                      <TextInput
                        mainClass="feedback-form-group"
                        type="text"
                        className="feedback-form-control"
                        value={this.state.mobile}
                        name="mobile"
                        onChange={this.getHelpFormHandler}
                        label="Mobile no."
                      />
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                      <TextInput
                        mainClass="feedback-form-group"
                        type="text"
                        className="feedback-form-control"
                        value={this.state.email}
                        name="email"
                        onChange={this.getHelpFormHandler}
                        label="E-mail ID"
                      />
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                      <TextInput
                        mainClass="feedback-form-group"
                        type="text"
                        className="feedback-form-control"
                        value={this.state.renderID}
                        name="renderID"
                        onChange={this.getHelpFormHandler}
                        label="Reader ID"
                      />
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <TextInput
                        mainClass="feedback-form-group"
                        type="text"
                        className="feedback-form-control"
                        value={this.state.address}
                        name="address"
                        onChange={this.getHelpFormHandler}
                        label="Address"
                      />
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <span className="check-heading">Age Group:</span>
                      <div className="row feedback-checkbox mx-auto">
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
                          <input type="radio" id="age1" name="age" value="30" />
                          <label htmlFor="age1" className="checkMarkValue">
                            6 - 9
                          </label>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
                          <input type="radio" id="age1" name="age" value="30" />
                          <label htmlFor="age1" className="checkMarkValue">
                            9 - 12
                          </label>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
                          <input type="radio" id="age1" name="age" value="30" />
                          <label htmlFor="age1" className="checkMarkValue">
                            12 - 15
                          </label>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
                          <input type="radio" id="age1" name="age" value="30" />
                          <label htmlFor="age1" className="checkMarkValue">
                            15 +
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <span className="check-heading">
                        How did you come to know about GeoChild Magazine?
                      </span>
                      <div className="row feedback-checkbox mx-auto">
                        <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
                          <input type="radio" id="age1" name="age" value="30" />
                          <label htmlFor="age1" className="checkMarkValue">
                            Internet
                          </label>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
                          <input type="radio" id="age1" name="age" value="30" />
                          <label htmlFor="age1" className="checkMarkValue">
                            Advertisement
                          </label>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
                          <input type="radio" id="age1" name="age" value="30" />
                          <label htmlFor="age1" className="checkMarkValue">
                            Classmate
                          </label>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
                          <input type="radio" id="age1" name="age" value="30" />
                          <label htmlFor="age1" className="checkMarkValue">
                            Radio
                          </label>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
                          <input type="radio" id="age1" name="age" value="30" />
                          <label htmlFor="age1" className="checkMarkValue">
                            TV
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <span className="check-heading">To whom has this magazine been helpful?</span>
                      <div className="row feedback-checkbox mx-auto">
                        <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
                          <input type="radio" id="age1" name="age" value="30" />
                          <label htmlFor="age1" className="checkMarkValue">
                            Siblings
                          </label>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
                          <input type="radio" id="age1" name="age" value="30" />
                          <label htmlFor="age1" className="checkMarkValue">
                            Classmate
                          </label>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
                          <input type="radio" id="age1" name="age" value="30" />
                          <label htmlFor="age1" className="checkMarkValue">
                            Teacher
                          </label>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
                          <input type="radio" id="age1" name="age" value="30" />
                          <label htmlFor="age1" className="checkMarkValue">
                            Parents
                          </label>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
                          <input type="radio" id="age1" name="age" value="30" />
                          <label htmlFor="age1" className="checkMarkValue">
                            Grandparents
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <span className="check-heading">
                        How much did you like the coverpage of the magazine?
                      </span>
                      <div className="row feedback-checkbox mx-auto">
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
                          <input type="radio" id="age1" name="age" value="30" />
                          <label htmlFor="age1" className="checkMarkValue">
                            Excellent
                          </label>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
                          <input type="radio" id="age1" name="age" value="30" />
                          <label htmlFor="age1" className="checkMarkValue">
                            Good
                          </label>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
                          <input type="radio" id="age1" name="age" value="30" />
                          <label htmlFor="age1" className="checkMarkValue">
                            Average
                          </label>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
                          <input type="radio" id="age1" name="age" value="30" />
                          <label htmlFor="age1" className="checkMarkValue">
                            Others
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <div className=".feedback-form-group">
                        <label className="feedback-control-label">
                          What is the most attractive feature of GeoChild?
                        </label>
                        <div className="textare-controls">
                          <textarea
                            rows="3"
                            className="form-textarea"
                            name="problemDescription"></textarea>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                      <div className="feedback-form-group">
                        <label className="feedback-control-label"></label>
                        <div className="feedback-controls">
                          <button
                            className="feedback-button-control"
                            onClick={this.getHelpFormSubmit}>
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Magazines;
