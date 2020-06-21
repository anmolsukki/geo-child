import React from 'react';
import Draggable from 'react-draggable';

class ViewMagazine extends React.Component {
  state = {
    id: '',
    currentPage: 1,
  };

  componentDidMount = () => {
    const id = this.props.match.params.id;
    this.setState({
      id: id,
    });
  };

  previousHandler = () => {
    this.setState({
      currentPage: this.state.currentPage - 1,
    });
  };

  nextHandler = () => {
    this.setState({
      currentPage: this.state.currentPage + 1,
    });
  };

  zoominHandler = () => {
    var myImg = document.getElementById('map');
    var currHeight = myImg.clientHeight;
    if (currHeight === 2500) return false;
    else {
      myImg.style.height = currHeight + 100 + 'px';
    }
  };

  zoomoutHandler = () => {
    var myImg = document.getElementById('map');
    var currHeight = myImg.clientHeight;
    if (currHeight === 100) return false;
    else {
      myImg.style.height = currHeight - 100 + 'px';
    }
  };

  render() {
    return (
      <div className="fullScreen">
        <div className="main-bg">
          <div className="controls">
            <div className="control-inner">
              <div className="circle" onClick={this.zoominHandler}>
                <i className="fa fa-search-plus" style={{ fontSize: '24px' }}></i>
              </div>
              <div className="circle" onClick={this.zoomoutHandler}>
                <i className="fa fa-search-minus" style={{ fontSize: '24px' }}></i>
              </div>
            </div>
          </div>
          <div className="swipe">
            <div
              className="circle"
              onClick={this.state.currentPage > 1 ? this.previousHandler : null}>
              <div className="left-swipe">
                <i className="fas fa-chevron-left"></i>
              </div>
            </div>
            <div className="circle" onClick={this.state.currentPage < 33 ? this.nextHandler : null}>
              <div className="right-swipe">
                <i className="fas fa-chevron-right"></i>
              </div>
            </div>
          </div>
          <div className="image-container">
            <Draggable axis="x">
              <img
                id="map"
                draggable={false}
                src={`${process.env.REACT_APP_URL}/magzines/${this.state.id}/${this.state.currentPage}.jpg`}
                alt=""
              />
            </Draggable>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewMagazine;
