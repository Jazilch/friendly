'use es6';

import React from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { friends } from '../data/friends';

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
  text-transform: capitalize;
`;

const FriendsList = () => {
  const params = useParams();
  const friendName = params.name;
  return (
    <FriendsListWrapper>
      <FriendsTitle>Saved Calendars</FriendsTitle>
      {friends.map(({ name, avatar }) => {
        return (
          <FriendItem active={friendName === name} to={`/calendar/${name}`}>
            <FriendInfo>
              <FriendAvatar src={avatar} />
              <FriendName>{name}</FriendName>
            </FriendInfo>
          </FriendItem>
        );
      })}
    </FriendsListWrapper>
  );
};

export default FriendsList;
