import React from 'react';
// import PDFViewer from 'pdf-viewer-reactjs';
// import { connect } from 'react-redux';
// import * as actionCreator from '../../Redux/Actions/ActionTypes/index';

class ViewMagazine extends React.Component {
  render() {
    return (
      <div>
        <iframe
          frameBorder="0"
          width="100%"
          height="800"
          src="https://test-online.flowpaper.com/9165088e-trial/magzineFile1590826069078559664052/#PreviewMode=Miniature"
          scrolling="no"
          marginWidth="0"
          marginHeight="0"
          title="1"
          allowFullScreen></iframe>
      </div>
      // <PDFViewer
      //   document={{
      //     url: `${process.env.REACT_APP_BASE_URL}/magzine/read-magzine/${this.props.match.params.id}`,
      //   }}
      // />
    );
  }
}

// const mapStateToProps = (state) => {
//   const ctrDocumentData = state.CtrMagazine.reViewMagzineData;
//   console.log('=======', ctrDocumentData);
//   return {
//     documentStateData: ctrDocumentData,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     viewMagaZineActionData: (pdf) => dispatch(actionCreator.viewMagaZineAction(pdf)),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(ViewMagazine);

export default ViewMagazine;
