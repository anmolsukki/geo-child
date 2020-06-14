import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { connect } from 'react-redux';
import * as actionCreator from '../../Redux/Actions/ActionTypes/index';
import { TextInput } from './TextInput';
import Footer from '../Footer/Footer';

class Magazines extends React.Component {
  state = {};

  getHelpFormHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  feedbackSubmit = () => {
    const data = {
      name: this.state.name,
      father: this.state.fname,
      school: this.state.school,
      class: this.state.class,
      address: this.state.address,
      mobile: this.state.mobile,
      email: this.state.email,
      readerId: this.state.renderID,
      ageGroup: this.state.ageGroup,
      informationFrom: this.state.knowGeo,
      helpfulTo: this.state.helpful,
      coverPageLike: this.state.coverpage,
      mostAttractiveFeature: this.state.feature,
      moreInfo: this.state.moreInfo,
      bestArticle: this.state.bestArticle,
      contributeArticle: this.state.contribute,
      rating: this.state.rate,
    };
    this.props.feedbackActionData(data);
  };

  render() {
    return (
      <React.Fragment>
        <ToastContainer limit={1} />
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
                        value={this.state.fname}
                        name="fname"
                        onChange={this.getHelpFormHandler}
                        label="Father's Name"
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
                        type="number"
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
                        value={this.state.school}
                        name="school"
                        onChange={this.getHelpFormHandler}
                        label="School"
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
                        label="Residential Address"
                      />
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <span className="check-heading">Age Group:</span>
                      <div className="row feedback-checkbox mx-auto">
                        <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6">
                          <input
                            type="radio"
                            id="6-9"
                            name="ageGroup"
                            value="6-9"
                            onChange={this.getHelpFormHandler}
                          />
                          <label htmlFor="6-9" className="checkMarkValue">
                            6 - 9
                          </label>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-6">
                          <input
                            type="radio"
                            id="9-12"
                            name="ageGroup"
                            value="9-12"
                            onChange={this.getHelpFormHandler}
                          />
                          <label htmlFor="9-12" className="checkMarkValue">
                            9 - 12
                          </label>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6">
                          <input
                            type="radio"
                            id="12-15"
                            name="ageGroup"
                            value="12-15"
                            onChange={this.getHelpFormHandler}
                          />
                          <label htmlFor="12-15" className="checkMarkValue">
                            12 - 15
                          </label>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6">
                          <input
                            type="radio"
                            id="15-18"
                            name="ageGroup"
                            value="15-18"
                            onChange={this.getHelpFormHandler}
                          />
                          <label htmlFor="15-18" className="checkMarkValue">
                            15 - 18
                          </label>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-12">
                          <input
                            type="radio"
                            id="adult"
                            name="ageGroup"
                            value="Adult"
                            onChange={this.getHelpFormHandler}
                          />
                          <label htmlFor="adult" className="checkMarkValue">
                            Adult
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <span className="check-heading">
                        How did you come to know about GeoChild Magazine?
                      </span>
                      <div className="row feedback-checkbox mx-auto">
                        <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6">
                          <input
                            type="radio"
                            id="internet"
                            name="knowGeo"
                            value="Internet"
                            onChange={this.getHelpFormHandler}
                          />
                          <label htmlFor="internet" className="checkMarkValue">
                            Internet
                          </label>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6">
                          <input
                            type="radio"
                            id="tv"
                            name="knowGeo"
                            value="TV"
                            onChange={this.getHelpFormHandler}
                          />
                          <label htmlFor="tv" className="checkMarkValue">
                            TV
                          </label>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-6">
                          <input
                            type="radio"
                            id="classmate"
                            name="knowGeo"
                            value="Classmate"
                            onChange={this.getHelpFormHandler}
                          />
                          <label htmlFor="classmate" className="checkMarkValue">
                            Classmate
                          </label>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6">
                          <input
                            type="radio"
                            id="radio"
                            name="knowGeo"
                            value="Radio"
                            onChange={this.getHelpFormHandler}
                          />
                          <label htmlFor="radio" className="checkMarkValue">
                            Radio
                          </label>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-4 col-12">
                          <input
                            type="radio"
                            id="advertise"
                            name="knowGeo"
                            value="Advertisement"
                            onChange={this.getHelpFormHandler}
                          />
                          <label htmlFor="advertise" className="checkMarkValue">
                            Advertisement
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <span className="check-heading">To whom has this magazine been helpful?</span>
                      <div className="row feedback-checkbox mx-auto">
                        <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6">
                          <input
                            type="radio"
                            id="sibling"
                            name="helpful"
                            value="Siblings"
                            onChange={this.getHelpFormHandler}
                          />
                          <label htmlFor="sibling" className="checkMarkValue">
                            Siblings
                          </label>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-6">
                          <input
                            type="radio"
                            id="classmate1"
                            name="helpful"
                            value="Classmate"
                            onChange={this.getHelpFormHandler}
                          />
                          <label htmlFor="classmate1" className="checkMarkValue">
                            Classmate
                          </label>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6">
                          <input
                            type="radio"
                            id="teacher"
                            name="helpful"
                            value="Teacher"
                            onChange={this.getHelpFormHandler}
                          />
                          <label htmlFor="teacher" className="checkMarkValue">
                            Teacher
                          </label>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6">
                          <input
                            type="radio"
                            id="parent"
                            name="helpful"
                            value="Parents"
                            onChange={this.getHelpFormHandler}
                          />
                          <label htmlFor="parent" className="checkMarkValue">
                            Parents
                          </label>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-4 col-12">
                          <input
                            type="radio"
                            id="gparent"
                            name="helpful"
                            value="Grandparents"
                            onChange={this.getHelpFormHandler}
                          />
                          <label htmlFor="gparent" className="checkMarkValue">
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
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6">
                          <input
                            type="radio"
                            id="excellent"
                            name="coverpage"
                            value="Excellent"
                            onChange={this.getHelpFormHandler}
                          />
                          <label htmlFor="excellent" className="checkMarkValue">
                            Excellent
                          </label>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6">
                          <input
                            type="radio"
                            id="good"
                            name="coverpage"
                            value="Good"
                            onChange={this.getHelpFormHandler}
                          />
                          <label htmlFor="good" className="checkMarkValue">
                            Good
                          </label>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6">
                          <input
                            type="radio"
                            id="average"
                            name="coverpage"
                            value="Average"
                            onChange={this.getHelpFormHandler}
                          />
                          <label htmlFor="average" className="checkMarkValue">
                            Average
                          </label>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6">
                          <input
                            type="radio"
                            id="other"
                            name="coverpage"
                            value="Others"
                            onChange={this.getHelpFormHandler}
                          />
                          <label htmlFor="other" className="checkMarkValue">
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
                            name="feature"
                            onChange={this.getHelpFormHandler}></textarea>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <div className=".feedback-form-group">
                        <label className="feedback-control-label">
                          On what topics do you want GeoChild to provide more information on?
                        </label>
                        <div className="textare-controls">
                          <textarea
                            rows="3"
                            className="form-textarea"
                            name="moreInfo"
                            onChange={this.getHelpFormHandler}></textarea>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <div className=".feedback-form-group">
                        <label className="feedback-control-label">
                          Which was the best article in the magazine and why?
                        </label>
                        <div className="textare-controls">
                          <textarea
                            rows="3"
                            className="form-textarea"
                            name="bestArticle"
                            onChange={this.getHelpFormHandler}></textarea>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <div className=".feedback-form-group">
                        <label className="feedback-control-label">
                          Do you want to contribute articles to GeoChild? If Yes, please mention
                          topics.
                        </label>
                        <div className="textare-controls">
                          <textarea
                            rows="3"
                            className="form-textarea"
                            name="contribute"
                            onChange={this.getHelpFormHandler}></textarea>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <span className="check-heading">
                        How would you rate GeoChild on a score of 10?
                      </span>
                      <div className="row feedback-checkbox mx-auto ratingHeight">
                        <div className="col-xl-1 col-lg-2 col-md-2 col-sm-2 col-3">
                          <input
                            type="radio"
                            id="10"
                            name="rate"
                            value="10"
                            onChange={this.getHelpFormHandler}
                          />
                          <label htmlFor="10" className="checkMarkValue">
                            10
                          </label>
                        </div>
                        <div className="col-xl-1 col-lg-2 col-md-2 col-sm-2 col-3">
                          <input
                            type="radio"
                            id="9"
                            name="rate"
                            value="9"
                            onChange={this.getHelpFormHandler}
                          />
                          <label htmlFor="9" className="checkMarkValue">
                            9
                          </label>
                        </div>
                        <div className="col-xl-1 col-lg-2 col-md-2 col-sm-2 col-3">
                          <input
                            type="radio"
                            id="8"
                            name="rate"
                            value="8"
                            onChange={this.getHelpFormHandler}
                          />
                          <label htmlFor="8" className="checkMarkValue">
                            8
                          </label>
                        </div>
                        <div className="col-xl-1 col-lg-2 col-md-2 col-sm-2 col-3">
                          <input
                            type="radio"
                            id="7"
                            name="rate"
                            value="7"
                            onChange={this.getHelpFormHandler}
                          />
                          <label htmlFor="7" className="checkMarkValue">
                            7
                          </label>
                        </div>
                        <div className="col-xl-1 col-lg-2 col-md-2 col-sm-2 col-3">
                          <input
                            type="radio"
                            id="6"
                            name="rate"
                            value="6"
                            onChange={this.getHelpFormHandler}
                          />
                          <label htmlFor="6" className="checkMarkValue">
                            6
                          </label>
                        </div>
                        <div className="col-xl-1 col-lg-2 col-md-2 col-sm-2 col-3">
                          <input
                            type="radio"
                            id="5"
                            name="rate"
                            value="5"
                            onChange={this.getHelpFormHandler}
                          />
                          <label htmlFor="5" className="checkMarkValue">
                            5
                          </label>
                        </div>
                        <div className="col-xl-1 col-lg-2 col-md-2 col-sm-2 col-3">
                          <input
                            type="radio"
                            id="4"
                            name="rate"
                            value="4"
                            onChange={this.getHelpFormHandler}
                          />
                          <label htmlFor="4" className="checkMarkValue">
                            4
                          </label>
                        </div>
                        <div className="col-xl-1 col-lg-2 col-md-2 col-sm-2 col-3">
                          <input
                            type="radio"
                            id="3"
                            name="rate"
                            value="3"
                            onChange={this.getHelpFormHandler}
                          />
                          <label htmlFor="3" className="checkMarkValue">
                            3
                          </label>
                        </div>
                        <div className="col-xl-1 col-lg-2 col-md-2 col-sm-2 col-3">
                          <input
                            type="radio"
                            id="2"
                            name="rate"
                            value="2"
                            onChange={this.getHelpFormHandler}
                          />
                          <label htmlFor="2" className="checkMarkValue">
                            2
                          </label>
                        </div>
                        <div className="col-xl-1 col-lg-2 col-md-2 col-sm-2 col-3">
                          <input
                            type="radio"
                            id="1"
                            name="rate"
                            value="1"
                            onChange={this.getHelpFormHandler}
                          />
                          <label htmlFor="1" className="checkMarkValue">
                            1
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ml-auto">
                      <div className="feedback-form-group">
                        <label className="feedback-control-label"></label>
                        <div className="feedback-controls">
                          <button className="feedback-button-control" onClick={this.feedbackSubmit}>
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

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    feedbackActionData: (data) => dispatch(actionCreator.feedbackAction(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Magazines);
