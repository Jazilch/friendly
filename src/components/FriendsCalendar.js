/* eslint-disable react/state-in-constructor */

'use es6';

import React, { Component } from 'react';
import { Typography } from 'antd';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
import styled from 'styled-components';

const { Title } = Typography;

const localizer = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(Calendar);

const StyledDnDCalendar = styled(DnDCalendar)``;

class FriendsCalendar extends Component {
  updateEventHandler = ({ event, start, end }) => {
    const { updateEvent } = this.props;
    const updates = {
      start,
      end
    };
    updateEvent(event.id, updates);
  };

  render() {
    const { friendName, events, showAddModal, showUpdateModal } = this.props;
    return (
      <>
        <Title level={3}>{`Viewing ${friendName} calendar`}</Title>
        <StyledDnDCalendar
          selectable
          defaultDate={new Date()}
          defaultView="month"
          events={events}
          localizer={localizer}
          resizable
          style={{ height: '100vh' }}
          onEventDrop={this.updateEventHandler}
          onEventResize={this.updateEventHandler}
          onSelectEvent={showUpdateModal}
          onSelectSlot={showAddModal}
        />
      </>
    );
  }
}

export default FriendsCalendar;
