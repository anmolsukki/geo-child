import React from 'react';
import { connect } from 'react-redux';
import * as actionCreator from '../../Redux/Actions/ActionTypes/index';
import { Link } from 'react-router-dom';

class Magazines extends React.Component {
  componentDidMount = () => {
    this.props.myMagaZineActionData();
  };

  render() {
    return (
      <div className="pageWidth">
        <h3 className="mainHeader">My Magazines</h3>
        <div className="row clr-margin">
          {this.props.documentStateData.magzines &&
            this.props.documentStateData.magzines.map((data) => {
              return (
                <div
                  className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 my-4 cardSpace"
                  key={data._id}>
                  <div className="card">
                    <img
                      className="card-img-top imgClipPath"
                      src={`http://3.15.224.93:5050/api/v1/magzine/get-cover/${data.coverImages[0]}`}
                      alt=""
                    />
                    <div className="card-body home-card">
                      <h5 className="card-title magazinetitle">{data.name}</h5>
                      <p className="magMonth">{data.month}</p>
                      <p className="card-text texDesciption">{data.description}</p>
                      <Link
                        to={{ pathname: `/magazine/${data.magzineFile}` }}
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

export default connect(mapStateToProps, mapDispatchToProps)(Magazines);
