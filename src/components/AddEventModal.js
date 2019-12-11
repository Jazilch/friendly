/* eslint-disable react/state-in-constructor */

'use es6';

import React, { Component } from 'react';
import moment from 'moment';
import { Modal, DatePicker, Form, Input, Row, Col } from 'antd';

class AddEventModal extends Component {
  state = {
    title: '',
    startValue: null,
    endValue: null,
    endOpen: false
  };

  componentDidMount() {
    const { activeEvent } = this.props;
    this.setState({
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

  onTitleChange = ({ target: { value } }) => {
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

  handleAddEvent = () => {
    const { addEvent, hideModal } = this.props;
    const { title, startValue, endValue } = this.state;
    const eventInfo = {
      start: startValue,
      end: endValue,
      title
    };
    addEvent(eventInfo);
    hideModal();
    this.setState({
      title: '',
      startValue: null,
      endValue: null
    });
  };

  render() {
    const { modalOpen, hideModal } = this.props;
    const { title, startValue, endValue, endOpen } = this.state;
    return (
      <Modal
        title="Add a new event!"
        visible={modalOpen}
        onOk={this.handleAddEvent}
        onCancel={hideModal}
      >
        <Form>
          <Row>
            <Form.Item label="Add a title">
              <Input
                required
                name="title"
                placeholder="Add a title"
                value={title}
                onChange={this.onTitleChange}
              />
            </Form.Item>
          </Row>
          <Row>
            <Col span={12}>
              <Form.Item label="Start">
                <DatePicker
                  name="startValue"
                  disabledDate={this.disabledStartDate}
                  showTime
                  defaultValue={moment(startValue)}
                  defaultPickerValue={startValue}
                  format="YYYY-MM-DD HH:mm:ss"
                  value={moment(startValue)}
                  placeholder="Start"
                  onChange={this.onStartChange}
                  onOpenChange={this.handleStartOpenChange}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="End">
                <DatePicker
                  name="endValue"
                  disabledDate={this.disabledEndDate}
                  showTime
                  defaultValue={moment(endValue)}
                  defaultPickerValue={endValue}
                  format="YYYY-MM-DD HH:mm:ss"
                  value={moment(endValue)}
                  placeholder="End"
                  onChange={this.onEndChange}
                  open={endOpen}
                  onOpenChange={this.handleEndOpenChange}
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    );
  }
}

export default AddEventModal;
