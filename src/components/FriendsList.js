/* eslint-disable react/state-in-constructor */

'use es6';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import OliAvatar from '../static/oli.jpg';
import RichAvatar from '../static/rich.jpg';
import BrettAvatar from '../static/brett.jpg';

const FriendsListWrapper = styled.div`
  width: 80%;
  max-width: 1020px;
  margin: 0 auto;
`;

const FriendsTitle = styled.h3`
  color: #fff;
`;

const FriendItem = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.5rem;
  color: #121212;
  border-radius: 10px;
  background-color: ${props => (props.active ? '#ccc' : '#fff')};
  margin: 5px 0;
  transition: background-color 0.3s;
  &:hover {
    background-color: #eee;
    color: #000;
  }
`;

const FriendInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

const FriendAvatar = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
`;

const FriendName = styled.span`
  margin-left: 5px;
`;

class FriendsList extends Component {
  state = {
    friends: [
      {
        avatar:
          '//cdn2.hubspot.net/hubfs/2676636/Awesome%20Logs%20Files/default-80.png',
        name: 'my-calendar'
      },
      { avatar: BrettAvatar, name: 'Brett' },
      { avatar: OliAvatar, name: 'Oli' },
      { avatar: RichAvatar, name: 'Rich' }
    ]
  };

  render() {
    const { friends } = this.state;
    const { friendName } = this.props;
    return (
      <FriendsListWrapper>
        <FriendsTitle>Saved Calendars</FriendsTitle>
        {friends.map(friend => {
          return (
            <FriendItem
              active={friendName === friend.name.toLowerCase()}
              to={`/calendar/${friend.name.toLowerCase()}`}
            >
              <FriendInfo>
                <FriendAvatar src={friend.avatar} />
                <FriendName>{friend.name}</FriendName>
              </FriendInfo>
            </FriendItem>
          );
        })}
      </FriendsListWrapper>
    );
  }
}

export default FriendsList;
