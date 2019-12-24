/* eslint-disable no-shadow */

'use es6';

import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addEvent, updateEvent, deleteEvent } from '../actions/eventsActions';
import { hideModal } from '../actions/modalActions';

const formInitialValue = {
  title: '',
  startValue: null,
  endValue: null
};

const useForm = () => {
  const [values, setValues] = useState(formInitialValue);
  const [endOpen, setEndOpen] = useState(false);

  const activeEvent = useSelector(state => state.modalReducer.activeEvent);

  const dispatch = useDispatch();

  useEffect(() => {
    setValues({
      title: activeEvent.title,
      startValue: activeEvent.start,
      endValue: activeEvent.end
    });
  }, []);

  const disabledStartDate = () => {
    const { startValue, endValue } = values;
    if (!startValue || !endValue) {
      return false;
    }
    return startValue.valueOf() > endValue.valueOf();
  };

  const disabledEndDate = () => {
    const { startValue, endValue } = values;
    if (!endValue || !startValue) {
      return false;
    }
    return endValue.valueOf() < startValue.valueOf();
  };

  const handleTitleChange = ({ target: { value } }) => {
    setValues(values => ({ ...values, title: value }));
  };

  const onStartChange = value => {
    setValues(values => ({ ...values, startValue: value }));
  };

  const onEndChange = value => {
    setValues(values => ({ ...values, endValue: value }));
  };

  const handleStartOpenChange = open => {
    if (!open) {
      setEndOpen({ endOpen: true });
    }
  };

  const handleEndOpenChange = open => {
    setEndOpen({ endOpen: open });
  };

  const handleAddEvent = () => {
    const { title, startValue, endValue } = values;
    const eventInfo = {
      start: startValue,
      end: endValue,
      title
    };
    dispatch(addEvent(eventInfo));
    dispatch(hideModal());
    setValues(formInitialValue);
  };

  const handleDelete = () => {
    dispatch(deleteEvent(activeEvent.id));
    dispatch(hideModal());
  };

  const handleUpdateEvent = () => {
    const { title, startValue, endValue } = values;
    const updates = {
      start: startValue,
      end: endValue,
      title
    };
    dispatch(updateEvent(activeEvent.id, updates));
    dispatch(hideModal());
  };

  return {
    values,
    endOpen,
    disabledStartDate,
    disabledEndDate,
    handleTitleChange,
    onStartChange,
    onEndChange,
    handleStartOpenChange,
    handleEndOpenChange,
    handleAddEvent,
    handleDelete,
    handleUpdateEvent
  };
};

export default useForm;
