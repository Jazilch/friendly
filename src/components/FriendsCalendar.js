/* eslint-disable react/jsx-curly-newline */

'use es6';

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Typography } from 'antd';
import { useParams } from 'react-router-dom';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
import styled from 'styled-components';
import { updateEvent } from '../actions/eventsActions';
import { showAddModal, showUpdateModal } from '../actions/modalActions';

const { Title } = Typography;

const StyledTitle = styled(Title)`
  text-transform: capitalize;
`;

const localizer = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(Calendar);

const StyledDnDCalendar = styled(DnDCalendar)``;

const FriendsCalendar = () => {
  const params = useParams();
  const friendName = params.name;
  const events = useSelector(state => state.eventsReducer.events);
  const dispatch = useDispatch();
  return (
    <>
      <StyledTitle level={3}>{`Viewing ${friendName} calendar`}</StyledTitle>
      <StyledDnDCalendar
        selectable
        defaultDate={new Date()}
        defaultView="month"
        events={events}
        localizer={localizer}
        resizable
        style={{ height: '100vh' }}
        onEventDrop={({ event, start, end }) =>
          dispatch(updateEvent(event.id, { start, end }))
        }
        onEventResize={({ event, start, end }) =>
          dispatch(updateEvent(event.id, { start, end }))
        }
        onSelectEvent={event => dispatch(showUpdateModal(event))}
        onSelectSlot={event => dispatch(showAddModal(event))}
      />
    </>
  );
};

export default FriendsCalendar;
