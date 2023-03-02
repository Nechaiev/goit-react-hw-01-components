import React from 'react';

import Profile from './Profile';
import Statistics from './Statistics';
import FriendList from './FriendList';

import userData from '../data/user.json';
import statsData from '../data/statistics.json';
import friends from '../data/friends.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <Statistics title="Upload stats" stats={statsData} />
      <FriendList friends={friends} />;
    </div>
  );
};

export default App;
