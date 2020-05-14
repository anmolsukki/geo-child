import React from 'react';
import { connect } from 'react-redux';
import * as actionCreator from '../Redux/Actions/ActionTypes/index';
import Loader from '../Utils/Loader';

class Home extends React.Component {
  componentDidMount = () => {
    this.props.userActionData();
  };

  render() {
    if (this.props.userStateData.isLoading) {
      return <Loader />;
    } else if (this.props.userStateData.error) {
      return <div style={{ color: 'red' }}>ERROR: {this.props.userStateData.error}</div>;
    }
    return (
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>isActive</th>
            <th>Posts</th>
            <th>Messages</th>
          </tr>
        </thead>
        <tbody>
          {this.props.userStateData.reUserData.map((user) => (
            <tr key={user.id}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.active ? 'Yes' : 'No'}</td>
              <td>{user.posts}</td>
              <td>{user.messages}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => {
  const ctrUserData = state.CtrUser;
  return {
    userStateData: ctrUserData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userActionData: () => dispatch(actionCreator.UserAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
