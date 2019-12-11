'use es6';

import { connect } from 'react-redux';
import AddEventModal from '../components/AddEventModal';
import { hideModal } from '../actions/modalActions';
import { addEvent } from '../actions/eventsActions';

const mapStateToProps = state => {
  return {
    modalOpen: state.modalReducer.addModalOpen,
    activeEvent: state.modalReducer.activeEvent
  };
};

const mapDispatchToProps = {
  addEvent,
  hideModal
};

export default connect(mapStateToProps, mapDispatchToProps)(AddEventModal);
