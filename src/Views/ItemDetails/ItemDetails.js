import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionCreator from '../../Redux/Actions/ActionTypes/index';
import Loader from '../../Utils/Loader';
import Footer from '../Footer/Footer';

class ItemDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderID: '',
    };
  }

  componentDidMount = () => {
    this.props.AllMagaZineActionData({ id: this.props.match.params.id });
  };

  imageChangeHandler = (image) => {
    var container = document.getElementById('imageContainer');
    container.src = image;
  };

  RequestOrderPayment = () => {
    let magzineId = this.props.documentStateData.reMagzineData[0]._id;
    let ammunt = this.props.documentStateData.reMagzineData[0].price;
    var myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${localStorage.getItem('token')}`);
    myHeaders.append('Content-Type', 'application/json');

    var raw = JSON.stringify({ magzineId });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch('http://3.15.224.93:5050/api/v1/buy', requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        this.setState({
          orderID: result.data.order_id,
        });
        var options = {
          key_id: 'rzp_test_DB15Tgu6YWUNcJ',
          amount: ammunt,
          currency: 'INR',
          name: 'Geochild',
          description: 'Pay to Geochild',
          order_id: this.state.orderID,
          handler: function (response) {
            let data = { ...response };
            var xhr = new XMLHttpRequest();
            xhr.addEventListener('readystatechange', function () {
              if (this.readyState === 4) {
              }
            });
            xhr.open('POST', 'http://3.15.224.93:5050/api/v1/buy/make-payment');
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.setRequestHeader('Authorization', `Bearer ${localStorage.getItem('token')}`);
            xhr.setRequestHeader('userId', '{{USERID}}');
            xhr.send(JSON.stringify(data));
          },
          prefill: {
            name: 'Rupesh',
            email: 'rupesh.kumar@hsc.com',
            contact: '8860979460',
          },
          notes: {
            address: '',
          },
          theme: {
            color: '#F37254',
          },
        };
        var rzp1 = new window.Razorpay(options);
        rzp1.open();
      })
      .catch((err) => {
        console.log('error====>>>>', err.message);
      });
  };

  render() {
    const { documentStateData } = this.props;
    console.log('fgbfb', documentStateData);

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
                              <button
                                to="#"
                                id="rzp-button1"
                                className="btn btn-primary btnStyle buyBtn"
                                onClick={() => this.RequestOrderPayment()}>
                                Buy Now!
                              </button>
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
