import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionCreator from '../../Redux/Actions/ActionTypes/index';
import Loader from '../../Utils/Loader';
import Footer from '../Footer/Footer';

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
      return <div className="ErrMessage">ERROR: {documentStateData.error}</div>;
    }
    return (
      <div className="fadeInEffect">
        <section className="Carousel">
          <div className="sliderCircle"></div>
          <div className="carousel slide" id="main-carousel" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#main-carousel" data-slide-to="0" className="active"></li>
              <li data-target="#main-carousel" data-slide-to="1"></li>
              <li data-target="#main-carousel" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block img-fluid" src="img/slider1.png" alt="" />
              </div>
              <div className="carousel-item">
                <img className="d-block img-fluid" src="img/slider2.jpg" alt="" />
              </div>
              <div className="carousel-item">
                <img className="d-block img-fluid" src="img/slider3.jpg" alt="" />
              </div>
            </div>
            <a href="#main-carousel" className="carousel-control-prev" data-slide="prev">
              <span className="carousel-control-prev-icon"></span>
              <span className="sr-only" aria-hidden="true">
                Prev
              </span>
            </a>
            <a href="#main-carousel" className="carousel-control-next" data-slide="next">
              <span className="carousel-control-next-icon"></span>
              <span className="sr-only" aria-hidden="true">
                Next
              </span>
            </a>
          </div>
        </section>
        <div className="pageWidth">
          <h3 className="mainHeader">Our Magazines</h3>
          <div className="row clr-margin">
            {documentStateData.reMagzineData.map((data) => {
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
                        to={{ pathname: `/home/${data._id}` }}
                        className="btn btn-primary btnStyle">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <Footer />
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
