import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionCreator from '../../../Redux/Actions/ActionTypes/index';
import Loader from '../../../Utils/Loader';
import HomeClass from './Home.module.css';

class Home extends Component {
  state = {
    page: 1,
  };

  componentDidMount = () => {
    this.loadDocuments();
  };

  loadDocuments = () => {
    const { page } = this.state;
    this.props.AllMagaZineActionData(page);
  };

  render() {
    const { documentStateData } = this.props;
    if (documentStateData.isLoading) {
      return <Loader />;
    } else if (documentStateData.error) {
      return <div className={HomeClass.ErrMessage}>ERROR: {documentStateData.error}</div>;
    }
    return (
      <div className="fadeInEffect">
        <div className={HomeClass.homeWidth}>
          <div className="row clr-margin">
            {documentStateData.reMagzineData.map((data) => {
              return (
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 my-4" key={data._id}>
                  <div className="card">
                    <img
                      className="card-img-top animate__animated animate__fadeIn imgClipPath"
                      src={`${process.env.REACT_APP_BASE_URL}/magzine/get-cover/${data.coverImages[0]}`}
                      alt=""
                    />
                    <div className="card-body">
                      <h5 className="card-title">{data.name}</h5>
                      <p className="card-text texOverflow">{data.description}</p>
                      <Link
                        to={{ pathname: `/home/${data._id}` }}
                        className="btn btn-primary btn-style">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const ctrDocumentData = state.CtrMagazine;
  return {
    documentStateData: ctrDocumentData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    AllMagaZineActionData: (data) => dispatch(actionCreator.AllMagaZineAction(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
