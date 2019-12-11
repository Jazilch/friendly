'use es6';

import { connect } from 'react-redux';
import UpdateEventModal from '../components/UpdateEventModal';
import { hideModal } from '../actions/modalActions';
import { updateEvent, deleteEvent } from '../actions/eventsActions';

const mapStateToProps = state => {
  return {
    modalOpen: state.modalReducer.updateModalOpen,
    activeEvent: state.modalReducer.activeEvent
  };
};

const mapDispatchToProps = {
  hideModal,
  updateEvent,
  deleteEvent
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateEventModal);
