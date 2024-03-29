//import React from "react";
//import ReactDOM from "react-dom";
import Profile from 'components/Profile';
import FriendList from 'components/FriendList';
import TransactionHistory from 'components/TransactionHistory';
import Statistics from 'components/Statistics';
import StatisticsItems from 'components/StatisticsItems';

import data from './Data/data.json';
import user from './Data/user.json';
import friends from './Data/friends.json';
import items from './Data/transactions.json';

export default function App() {
  return (
    <div
      style={{
        height: '100vh',
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101',
        width: 800,
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      >
        <Statistics title="Statistics" data={data}>
          {data.map(data => (
            <StatisticsItems
              key={data.id}
              label={data.label}
              percentage={data.percentage}
            />
          ))}
        </Statistics>
      </Profile>

      <FriendList friends={friends} />

      <TransactionHistory items={items} />
    </div>
  );
}
