/* eslint-disable react/no-unused-prop-types */

'use es6';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Icon, Row, Col, DatePicker, Input, Form } from 'antd';
import moment from 'moment';
import PropTypes from 'prop-types';
import { hideModal } from '../actions/modalActions';
import useForm from '../hooks/useForm';

const dateFormat = 'YYYY/MM/DD';

const UpdateEventModal = () => {
  const dispatch = useDispatch();
  const {
    values,
    endOpen,
    disabledStartDate,
    disabledEndDate,
    handleTitleChange,
    onStartChange,
    onEndChange,
    handleStartOpenChange,
    handleEndOpenChange,
    handleDelete,
    handleUpdateEvent
  } = useForm();
  const updateModalOpen = useSelector(
    state => state.modalReducer.updateModalOpen
  );
  const { title, startValue, endValue } = values;
  return (
    <Modal
      title="Update event!!"
      onOk={handleUpdateEvent}
      visible={updateModalOpen}
      onCancel={() => dispatch(hideModal())}
    >
      <Form>
        <Form.Item label="Title:">
          <Input name="title" value={title} onChange={handleTitleChange} />
        </Form.Item>
        <Row>
          <Col span={12}>
            <Form.Item label="Start:">
              <DatePicker
                name="startValue"
                disabledDate={disabledStartDate}
                defaultValue={moment(startValue)}
                defaultPickerValue={startValue}
                value={moment(startValue)}
                format={dateFormat}
                onChange={onStartChange}
                onOpenChange={handleStartOpenChange}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="End:">
              <DatePicker
                disabledDate={disabledEndDate}
                defaultValue={moment(endValue)}
                defaultPickerValue={endValue}
                value={moment(endValue)}
                format={dateFormat}
                onChange={onEndChange}
                open={endOpen}
                onOpenChange={handleEndOpenChange}
              />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item label="Delete Event?">
          <Icon type="delete" onClick={handleDelete} />
        </Form.Item>
      </Form>
    </Modal>
  );
};

UpdateEventModal.propTypes = {
  updateModalOpen: PropTypes.bool.isRequired,
  disabledStartDate: PropTypes.func.isRequired,
  disabledEndDate: PropTypes.func.isRequired,
  handleUpdateEvent: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  onStartChange: PropTypes.func.isRequired,
  onEndChange: PropTypes.func.isRequired,
  endOpen: PropTypes.bool.isRequired,
  handleStartOpenChange: PropTypes.func.isRequired,
  handleEndOpenChange: PropTypes.func.isRequired
};

export default UpdateEventModal;
