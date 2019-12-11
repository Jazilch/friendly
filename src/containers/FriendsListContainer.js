'use es6';

import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import FriendsList from '../components/FriendsList';

const mapStateToProps = (state, { match: { params } }) => {
  return {
    friendName: params.name
  };
};

export default compose(withRouter, connect(mapStateToProps, null))(FriendsList);
