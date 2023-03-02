import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';

import s from './Friend.module.css';

const FriendList = ({ friends }) => {
  if (friends.length === 0) return null;
  return <ul className={s.friendList}>
    {friends.map(FriendListItem)}
  </ul>;
};

export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
