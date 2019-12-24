/* eslint-disable react/no-unused-prop-types */

'use es6';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { Modal, DatePicker, Form, Input, Row, Col } from 'antd';
import PropTypes from 'prop-types';
import { hideModal } from '../actions/modalActions';
import useForm from '../hooks/useForm';

const dateFormat = 'YYYY/MM/DD';

const AddEventModal = () => {
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
    handleAddEvent
  } = useForm();
  const addModalOpen = useSelector(state => state.modalReducer.addModalOpen);
  const { title, startValue, endValue } = values;
  return (
    <Modal
      title="Add a new event!"
      visible={addModalOpen}
      onOk={handleAddEvent}
      onCancel={() => dispatch(hideModal())}
    >
      <Form>
        <Row>
          <Form.Item label="Add a title">
            <Input
              required
              name="title"
              placeholder="Steve arrives!"
              value={title}
              onChange={handleTitleChange}
            />
          </Form.Item>
        </Row>
        <Row>
          <Col span={12}>
            <Form.Item label="Start">
              <DatePicker
                disabledDate={disabledStartDate}
                showTime
                defaultValue={moment(startValue)}
                defaultPickerValue={startValue}
                format={dateFormat}
                value={moment(startValue)}
                placeholder="Start"
                onChange={onStartChange}
                onOpenChange={handleStartOpenChange}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="End">
              <DatePicker
                disabledDate={disabledEndDate}
                showTime
                defaultValue={moment(endValue)}
                defaultPickerValue={endValue}
                format={dateFormat}
                value={moment(endValue)}
                placeholder="End"
                onChange={onEndChange}
                open={endOpen}
                onOpenChange={handleEndOpenChange}
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

AddEventModal.propTypes = {
  addModalOpen: PropTypes.bool.isRequired,
  disabledStartDate: PropTypes.func.isRequired,
  disabledEndDate: PropTypes.func.isRequired,
  handleAddEvent: PropTypes.func.isRequired,
  onStartChange: PropTypes.func.isRequired,
  onEndChange: PropTypes.func.isRequired,
  endOpen: PropTypes.bool.isRequired,
  hideModal: PropTypes.func.isRequired,
  handleStartOpenChange: PropTypes.func.isRequired,
  handleEndOpenChange: PropTypes.func.isRequired
};

export default AddEventModal;
