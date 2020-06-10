import React from 'react';
import { connect } from 'react-redux';
import * as actionCreator from '../../Redux/Actions/ActionTypes/index';
import Footer from '../Footer/Footer';

class Team extends React.Component {
  componentDidMount = () => {
    this.props.teamActionData();
  };

  render() {
    return (
      <div className="main">
        <div className="banner about-img">
          <img src="img/teamSlide.jpeg" alt="" />
        </div>
        <div className="bg-level-2 first-part" style={{ width: '69.5px' }}></div>
        <section className="">
          <div className="container">
            <div className="our_team">
              <h1 className="ribbon">
                <strong className="ribbon-content">Patrons</strong>
              </h1>
              <div className="row">
                {this.props.teamStoreData.map((data) =>
                  data.type === 'patron' ? (
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 my-4" key={data._id}>
                      <div className="card team-card">
                        <img
                          className="card-img-top imgClipPath team-img"
                          src={`data:image/jpeg;base64,${data.photo}`}
                          alt=""
                        />
                        <div className="card-body">
                          <h5 className="card-title titleStyle team-name">{data.name}</h5>
                          <p className="card-text texOverflow team-designation">
                            {data.designation}
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : null
                )}
              </div>
            </div>
          </div>
        </section>
        <section className="two">
          <div className="container">
            <div className="our_team">
              <h3 className="title">Our Team</h3>
              <div className="row">
                {this.props.teamStoreData.map((data) =>
                  data.type === 'member' ? (
                    <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-12 my-4" key={data._id}>
                      <div className="card team-card2">
                        <img
                          className="card-img-top imgClipPath"
                          src={`data:image/jpeg;base64,${data.photo}`}
                          alt=""
                        />
                        <div className="team-description">
                          <h5 className="card-title titleStyle team-name team-titile2">
                            {data.name}
                          </h5>
                          <p className="card-text texOverflow team-designation team2">
                            {data.designation}
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : null
                )}
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
  const ctrTeamData = state.CtrTeam.reTeamData;
  return {
    teamStoreData: ctrTeamData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    teamActionData: () => dispatch(actionCreator.teamAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Team);
