import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionCreator from '../../Redux/Actions/ActionTypes/index';
import Loader from '../../Utils/Loader';
import Footer from '../Footer/Footer';

class ItemDetails extends Component {
  componentDidMount = () => {
    this.props.AllMagaZineActionData({ id: this.props.match.params.id });
  };

  imageChangeHandler = (image) => {
    var container = document.getElementById('imageContainer');
    container.src = image;
  };

  buyMagazine = (price) => {
    const data = {
      amount: price,
      magzineId: this.props.match.params.id,
    };
    this.props.buyMagazineActionData(data);
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
        <section className="first">
          <div className="container">
            <div className="col-md-10 col-12 mx-auto detailSpace">
              <div className="card detail-card">
                <div className="row clr-margin">
                  {documentStateData.reMagzineData.map((data) => {
                    return (
                      <React.Fragment key={data._id}>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-5 itemMargin">
                          <div className="row">
                            <div className="col-md-3 col-sm-3 col-3">
                              <div className="selectImage">
                                <img
                                  src={`${process.env.REACT_APP_BASE_URL}/magzine/get-cover/${data.coverImages[0]}`}
                                  alt=""
                                  onClick={() =>
                                    this.imageChangeHandler(
                                      `${process.env.REACT_APP_BASE_URL}/magzine/get-cover/${data.coverImages[0]}`
                                    )
                                  }
                                />
                                <img
                                  src={`${process.env.REACT_APP_BASE_URL}/magzine/get-cover/${data.coverImages[1]}`}
                                  alt=""
                                  onClick={() =>
                                    this.imageChangeHandler(
                                      `${process.env.REACT_APP_BASE_URL}/magzine/get-cover/${data.coverImages[1]}`
                                    )
                                  }
                                />
                              </div>
                            </div>
                            <div className="col-md-9 col-sm-9 col-9">
                              <div className="itemCard">
                                <div className="topSection">
                                  <img
                                    id="imageContainer"
                                    src={`${process.env.REACT_APP_BASE_URL}/magzine/get-cover/${data.coverImages[0]}`}
                                    alt=""
                                  />
                                  <div className="price">{`₹${data.price}`}</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-5">
                          <div className="description">
                            <h1>{data.name}</h1>
                            <div>
                              <span className="badge">{data.tags}</span>
                              <span className="language">{data.language}</span>
                            </div>
                            <div className="specialPrices">
                              <span>Special price</span>
                            </div>
                            <div className="prices">
                              <div className="pricesTag">{`₹${data.price}`}</div>
                            </div>
                            <div className="descrptionDetail">
                              <p>{data.description}</p>
                            </div>
                            <div className="descPoint">
                              <div className="pointsLine">
                                <img
                                  src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png?q=90"
                                  alt=""
                                  width="18"
                                  height="18"
                                  className="pointImage"
                                />
                                <li>{data.frequency}</li>
                              </div>
                              <div className="pointsLine">
                                <img
                                  src="https://img.icons8.com/cute-clipart/64/000000/time-span.png"
                                  alt=""
                                  width="18"
                                  height="18"
                                  className="pointImage"
                                />
                                <li>{data.month}</li>
                              </div>
                              <div className="pointsLine">
                                <img
                                  src="https://img.icons8.com/color/48/000000/shuttlecraft-type-9.png"
                                  alt=""
                                  width="18"
                                  height="18"
                                  className="pointImage"
                                />
                                <li>{data.type}</li>
                              </div>
                            </div>
                            <div className="productInfo">
                              <Link
                                to="#"
                                className="btn btn-primary btnStyle buyBtn"
                                onClick={() => this.buyMagazine(data.price)}>
                                Buy Now!
                              </Link>
                            </div>
                          </div>
                        </div>
                      </React.Fragment>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
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
    AllMagaZineActionData: (id) => dispatch(actionCreator.AllMagaZineAction(id)),
    buyMagazineActionData: (data) => dispatch(actionCreator.buyMagazineAction(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetails);
