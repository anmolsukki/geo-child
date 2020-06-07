import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreator from '../../Redux/Actions/ActionTypes/index';

class ViewMagazine extends Component {
  componentDidMount = () => {
    this.props.viewMagaZineActionData({ pdf: this.props.match.params.id });
  };

  render() {
    return (
      <div>
        <iframe
          src="http://flowpaper.com/flipbook/http://conorlastowka.com/book/CitationNeededBook-Sample.pdf"
          width="100%"
          height="800"
          title="1"
          style={{ border: 'none' }}
          allowFullScreen></iframe>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const ctrDocumentData = state.CtrMagazine.reViewMagzineData;
  return {
    documentStateData: ctrDocumentData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    viewMagaZineActionData: (pdf) => dispatch(actionCreator.viewMagaZineAction(pdf)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewMagazine);
