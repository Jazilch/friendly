/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/state-in-constructor */

'use es6';

import React, { Component } from 'react';
import { Modal, Icon, Typography, Row, Col, DatePicker } from 'antd';
import moment from 'moment';

const { Paragraph } = Typography;

const dateFormat = 'YYYY/MM/DD';

class UpdateEventModal extends Component {
  state = {
    title: '',
    startValue: null,
    endValue: null,
    endOpen: false
  };

  componentDidMount() {
    const { activeEvent } = this.props;
    this.setState({
      title: activeEvent.title,
      startValue: activeEvent.start,
      endValue: activeEvent.end
    });
  }

  disabledStartDate = startValue => {
    const { endValue } = this.state;
    if (!startValue || !endValue) {
      return false;
    }
    return startValue.valueOf() > endValue.valueOf();
  };

  disabledEndDate = endValue => {
    const { startValue } = this.state;
    if (!endValue || !startValue) {
      return false;
    }
    return endValue.valueOf() < startValue.valueOf();
  };

  onChange = (field, value) => {
    this.setState({
      [field]: value
    });
  };

  onTitleChange = value => {
    this.onChange('title', value);
  };

  onStartChange = value => {
    this.onChange('startValue', value);
  };

  onEndChange = value => {
    this.onChange('endValue', value);
  };

  handleStartOpenChange = open => {
    if (!open) {
      this.setState({ endOpen: true });
    }
  };

  handleEndOpenChange = open => {
    this.setState({ endOpen: open });
  };

  handleDelete = () => {
    const { activeEvent, deleteEvent, hideModal } = this.props;
    deleteEvent(activeEvent.id);
    hideModal();
  };

  handleUpdateEvent = () => {
    const { activeEvent, updateEvent, hideModal } = this.props;
    const { title, startValue, endValue } = this.state;
    const updates = {
      title,
      start: startValue,
      end: endValue
    };
    updateEvent(activeEvent.id, updates);
    hideModal();
  };

  render() {
    const { modalOpen, hideModal } = this.props;
    const { title, startValue, endValue, endOpen } = this.state;
    return (
      <Modal
        title={
          <Paragraph editable={{ onChange: this.onTitleChange }}>
            {title}
          </Paragraph>
        }
        onOk={this.handleUpdateEvent}
        visible={modalOpen}
        onCancel={hideModal}
      >
        <Row>
          <Col span={12}>
            <p>Start:</p>
            <DatePicker
              defaultValue={moment(startValue)}
              defaultPickerValue={startValue}
              value={moment(startValue)}
              format={dateFormat}
              onChange={this.onStartChange}
              onOpenChange={this.handleStartOpenChange}
            />
          </Col>
          <Col span={12}>
            <p>End:</p>
            <DatePicker
              defaultValue={moment(endValue)}
              defaultPickerValue={endValue}
              value={moment(endValue)}
              format={dateFormat}
              onChange={this.onEndChange}
              open={endOpen}
              onOpenChange={this.handleEndOpenChange}
            />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <div style={{ marginTop: '20px' }}>
              <h3>Delete Event?</h3>
              <Icon type="delete" onClick={this.handleDelete} />
            </div>
          </Col>
        </Row>
      </Modal>
    );
  }
}

export default UpdateEventModal;
