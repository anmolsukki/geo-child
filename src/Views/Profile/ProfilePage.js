import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionCreator from '../../Redux/Actions/ActionTypes/index';

class ProfilePage extends Component {
  state = {
    onStep: 1,
  };

  componentDidMount = () => {
    this.props.myMagaZineActionData();
  };

  goToStep = (step) => {
    if (step) {
      this.setState({
        onStep: step,
      });
    }
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-5 col-sm-12 col-12 mt-5 clr-padding mobMargin">
            <div className="sectionView">
              <ul className="sectionContainer">
                <li className="sectionList" onClick={() => this.goToStep(1)}>
                  <Link to="#" className={`sectonName ${this.state.onStep === 1 ? 'active' : ''}`}>
                    Profile
                  </Link>
                </li>
                <li className="sectionList" onClick={() => this.goToStep(2)}>
                  <Link to="#" className={`sectonName ${this.state.onStep === 2 ? 'active' : ''}`}>
                    Change Password
                  </Link>
                </li>
                <li className="sectionList" onClick={() => this.goToStep(3)}>
                  <Link to="#" className={`sectonName ${this.state.onStep === 3 ? 'active' : ''}`}>
                    My Magazine
                  </Link>
                </li>
                <li className="sectionList" onClick={() => this.goToStep(4)}>
                  <Link to="#" className={`sectonName ${this.state.onStep === 4 ? 'active' : ''}`}>
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-8 col-lg-8 col-md-7 col-sm-12 col-12 mt-5 text-center clr-padding mobMargin">
            <div className="bodyView formbody">
              {this.state.onStep === 1 ? (
                <div>
                  <div className="form-title">User Profile Details!</div>
                  <div className="form-body">
                    <div className="row">
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mx-auto">
                        <div className="bodyViewInputMain">
                          <input type="text" placeholder="Name" className="bodyViewInputForm" />
                        </div>
                      </div>
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mx-auto">
                        <div className="bodyViewInputMain">
                          <input type="text" placeholder="Email" className="bodyViewInputForm" />
                        </div>
                      </div>
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mx-auto">
                        <div className="bodyViewInputMain">
                          <input type="text" placeholder="Phone" className="bodyViewInputForm" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="rule"></div>
                  <div className="form-footer">
                    <Link to="#">
                      Submit!<span className="fa fa-thumbs-o-up"></span>
                    </Link>
                  </div>
                </div>
              ) : this.state.onStep === 2 ? (
                <div>
                  <div className="form-title">Change Password</div>
                  <div className="form-body">
                    <div className="row">
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mx-auto">
                        <div className="bodyViewInputMain">
                          <input
                            type="text"
                            placeholder="Current Password"
                            className="bodyViewInputForm"
                          />
                        </div>
                      </div>
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mx-auto">
                        <div className="bodyViewInputMain">
                          <input
                            type="text"
                            placeholder="New Password"
                            className="bodyViewInputForm"
                          />
                        </div>
                      </div>
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mx-auto">
                        <div className="bodyViewInputMain">
                          <input
                            type="text"
                            placeholder="Confirm Password"
                            className="bodyViewInputForm"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="rule"></div>
                  <div className="form-footer">
                    <Link to="#">
                      Submit!<span className="fa fa-thumbs-o-up"></span>
                    </Link>
                  </div>
                </div>
              ) : this.state.onStep === 3 ? (
                <div>
                  <div className="form-title">My Magazines</div>
                  <div className="row clr-margin">
                    {this.props.documentStateData.magzines &&
                      this.props.documentStateData.magzines.map((data) => {
                        return (
                          <div
                            className="col-xl-6 col-lg-6 col-md-10 col-sm-6 col-12 my-4 bodyCardSpace"
                            key={data._id}>
                            <div className="card">
                              <img
                                className="card-img-top bodyImgClipPath"
                                src={`http://3.15.224.93:5050/api/v1/magzine/get-cover/${data.coverImages[0]}`}
                                alt=""
                              />
                              <div className="card-body home-card">
                                <h5 className="card-title magazinetitle">{data.name}</h5>
                                <p className="magMonth">{data.month}</p>
                                <p className="card-text texDesciption">{data.description}</p>
                                <Link
                                  to={{ pathname: `/profile/${data.magzineFile}` }}
                                  className="btn btn-primary btnStyle">
                                  Read
                                </Link>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
              ) : this.state.onStep === 4 ? (
                <div>
                  <div className="form-title">Logout</div>
                  <div className="form-body"></div>
                  <div className="form-footer">
                    <Link to="#">Logout!</Link>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const ctrDocumentData = state.CtrMagazine.reMyMagzineData;
  return {
    documentStateData: ctrDocumentData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    myMagaZineActionData: () => dispatch(actionCreator.myMagaZineAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
