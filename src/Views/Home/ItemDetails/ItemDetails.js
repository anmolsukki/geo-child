import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionCreator from '../../../Redux/Actions/ActionTypes/index';
import Loader from '../../../Utils/Loader';
import DetailClass from './ItemDetails.module.css';

class ItemDetails extends Component {
  componentDidMount = () => {
    this.props.AllMagaZineActionData({ id: this.props.match.params.id });
  };

  imageChangeHandler = (image) => {
    var container = document.getElementById(`${DetailClass.imageContainer}`);
    container.src = image;
  };

  render() {
    const { documentStateData } = this.props;
    if (documentStateData.isLoading) {
      return <Loader />;
    } else if (documentStateData.error) {
      return <div className={DetailClass.ErrMessage}>ERROR: {documentStateData.error}</div>;
    }

    return (
      <div className="fadeInEffect">
        <div className="container">
          <div className="row clr-margin">
            {documentStateData.reMagzineData.map((data) => {
              return (
                <React.Fragment key={data._id}>
                  <div
                    className={`col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 my-5 fadeInEffectLeft ${DetailClass.itemMargin}`}>
                    <div className={DetailClass.itemCard}>
                      <div className={DetailClass.topSection}>
                        <img
                          id={DetailClass.imageContainer}
                          src={`${process.env.REACT_APP_BASE_URL}/magzine/get-cover/${data.coverImages[0]}`}
                          alt=""
                          className="fadeInEffectImage"
                        />
                        <div className={DetailClass.selectImage}>
                          <img
                            onClick={() =>
                              this.imageChangeHandler(
                                `${process.env.REACT_APP_BASE_URL}/magzine/get-cover/${data.coverImages[0]}`
                              )
                            }
                            src={`${process.env.REACT_APP_BASE_URL}/magzine/get-cover/${data.coverImages[0]}`}
                            alt=""
                          />
                          <img
                            onClick={() =>
                              this.imageChangeHandler(
                                `${process.env.REACT_APP_BASE_URL}/magzine/get-cover/${data.coverImages[1]}`
                              )
                            }
                            src={`${process.env.REACT_APP_BASE_URL}/magzine/get-cover/${data.coverImages[1]}`}
                            alt=""
                          />
                        </div>
                        <div className={DetailClass.price}>{`₹${data.price}`}</div>
                      </div>

                      <div className={DetailClass.productInfo}>
                        <div className={DetailClass.name}>{data.name}</div>
                        <Link to="#" className="btn btn-primary btnStyle buyBtn">
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12 my-5 fadeInEffectRight ${DetailClass.itemMargin}`}>
                    <div className={DetailClass.description}>
                      <h1>{data.name}</h1>
                      <div>
                        <span className={DetailClass.badge}>{data.tags}</span>
                        <span className={DetailClass.language}>{data.language}</span>
                      </div>
                      <div className={DetailClass.specialPrices}>
                        <span>Special price</span>
                      </div>
                      <div className={DetailClass.prices}>
                        <div className={DetailClass.pricesTag}>{`₹${data.price}`}</div>
                      </div>
                      <div className={DetailClass.descrptionDetail}>
                        <p>{data.description}</p>
                      </div>
                      <div className={DetailClass.descPoint}>
                        <div className={DetailClass.pointsLine}>
                          <img
                            src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png?q=90"
                            alt=""
                            width="18"
                            height="18"
                            className={DetailClass.pointImage}
                          />
                          <li>{data.frequency}</li>
                        </div>
                        <div className={DetailClass.pointsLine}>
                          <img
                            src="https://img.icons8.com/cute-clipart/64/000000/time-span.png"
                            alt=""
                            width="18"
                            height="18"
                            className={DetailClass.pointImage}
                          />
                          <li>{data.month}</li>
                        </div>
                        <div className={DetailClass.pointsLine}>
                          <img
                            src="https://img.icons8.com/color/48/000000/shuttlecraft-type-9.png"
                            alt=""
                            width="18"
                            height="18"
                            className={DetailClass.pointImage}
                          />
                          <li>{data.type}</li>
                        </div>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
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
    AllMagaZineActionData: (id) => dispatch(actionCreator.AllMagaZineAction(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetails);
