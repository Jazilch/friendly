'use es6';

import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import FriendsCalendar from '../components/FriendsCalendar';
import { showAddModal, showUpdateModal } from '../actions/modalActions';
import { addEvent, updateEvent } from '../actions/eventsActions';

const mapStateToProps = (state, { match: { params } }) => {
  return {
    events: state.eventsReducer.events,
    friendName: params.name
  };
};

const mapDispatchToProps = {
  showAddModal,
  showUpdateModal,
  addEvent,
  updateEvent
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(FriendsCalendar);
