import React from 'react';
import { TextInput } from './TextInput';

class Magazines extends React.Component {
  state = {
    fullName: '',
  };

  getHelpFormHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    return (
      <div className="fadeInEffect bgImageFeedback">
        <div className="page-content-inner">
          {/* <div className="counselling-page-header">
            <div className="feedback-main-title">
              <span>hfghfd</span>
            </div>
          </div> */}
          <div className="feedback-form-vertical">
            {/* <div className="feedback-form-info">
              <p>ddfgd</p>
            </div> */}
            <div className="row">
              <div className="col-xl-12 col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="row">
                  <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                    <TextInput
                      mainClass="feedback-form-group"
                      type="text"
                      className="feedback-form-control"
                      value={this.state.fullName}
                      name="fullName"
                      onChange={this.getHelpFormHandler}
                      label="Full Name"
                    />
                  </div>
                  <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                    <TextInput
                      mainClass="feedback-form-group"
                      type="text"
                      className="feedback-form-control"
                      value={this.state.fullName}
                      name="fullName"
                      onChange={this.getHelpFormHandler}
                      label="Full Name"
                    />
                  </div>
                  <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                    <TextInput
                      mainClass="feedback-form-group"
                      type="text"
                      className="feedback-form-control"
                      value={this.state.fullName}
                      name="fullName"
                      onChange={this.getHelpFormHandler}
                      label="Full Name"
                    />
                  </div>
                  <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                    <TextInput
                      mainClass="feedback-form-group"
                      type="text"
                      className="feedback-form-control"
                      value={this.state.fullName}
                      name="fullName"
                      onChange={this.getHelpFormHandler}
                      label="Full Name"
                    />
                  </div>
                  <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                    <TextInput
                      mainClass="feedback-form-group"
                      type="text"
                      className="feedback-form-control"
                      value={this.state.fullName}
                      name="fullName"
                      onChange={this.getHelpFormHandler}
                      label="Full Name"
                    />
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="row">
                  <div className="col-xl-6 col-lg-8 col-md-12 col-sm-12 col-12">
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
    );
  }
}

export default Magazines;
