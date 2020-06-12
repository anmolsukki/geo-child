import React from 'react';

class ViewMagazine extends React.Component {
  render() {
    return (
      <div className="fullScreen">
        <div className="main-bg">
          <div className="controls">
            <div className="control-inner">
              <div className="circle">
                <i className="fa fa-search-plus" style={{ fontSize: '24px' }}></i>
              </div>
              <div className="circle">
                <i className="fa fa-search-minus" style={{ fontSize: '24px' }}></i>
              </div>
            </div>
          </div>
          <div className="swipe">
            <div className="circle">
              <div className="left-swipe">
                <i className="fas fa-chevron-left"></i>
              </div>
            </div>
            <div className="circle">
              <div className="right-swipe">
                <i className="fas fa-chevron-right"></i>
              </div>
            </div>
          </div>
          <div className="image-container">
            <img src="https://picsum.photos/200" alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default ViewMagazine;
