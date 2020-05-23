import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreator from '../../Redux/Actions/ActionTypes/index';
import Loader from '../../Utils/Loader';
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
        <div className="container-fluid">
          <div className="row clr-margin">
            {documentStateData.reMagzineData.map((data) => {
              return (
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-6 mt-3" key={data._id}>
                  <div className={HomeClass.hvrbox}>
                    <img
                      src={`https://geochild.herokuapp.com/api/v1/magzine/get-cover/${data.coverImages[0]}`}
                      alt={data.name}
                      className={`img-thumbnail ${HomeClass.itemImg}`}
                    />
                    <div className={`${HomeClass.hvrboxLayerTop} ${HomeClass.hvrboxLayerScale}`}>
                      <div className={HomeClass.hvrboxText}>{data.name}</div>
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
