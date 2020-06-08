import React from 'react';
import PDFViewer from 'pdf-viewer-reactjs';
import { connect } from 'react-redux';
import * as actionCreator from '../../Redux/Actions/ActionTypes/index';

const ViewMagazine = () => {
  return (
    <PDFViewer
      document={{
        url:
          'http://3.15.224.93:5050/api/v1/magzine/read-magzine/magzineFile-1591458760856-691256234.pdf',
      }}
    />
  );
};

const mapStateToProps = (state) => {
  const ctrDocumentData = state.CtrMagazine.reViewMagzineData;
  console.log('=======', ctrDocumentData);
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
