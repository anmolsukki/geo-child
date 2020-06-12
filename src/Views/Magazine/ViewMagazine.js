import React from 'react';
import PDFViewer from 'pdf-viewer-reactjs';
import { connect } from 'react-redux';
import * as actionCreator from '../../Redux/Actions/ActionTypes/index';

class ViewMagazine extends React.Component {
  render() {
    return (
      <iframe
        frameborder="0"
        width="800"
        height="600"
        src="https://test-online.flowpaper.com/951f08f9-trial/march164/#PreviewMode=Miniature"
        scrolling="no"
        marginwidth="0"
        marginheight="0"
        title="1"
        allowFullScreen></iframe>
      // <PDFViewer
      //   document={{
      //     url: `${process.env.REACT_APP_BASE_URL}/magzine/read-magzine/magzineFile-1591446797670-499373875.pdf`,
      //   }}
      // />
    );
  }
}

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

// export default ViewMagazine;
