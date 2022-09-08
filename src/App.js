//import React from "react";
//import ReactDOM from "react-dom";
import Profile from "../src/components/Profile";
import Statistics from "../src/components/Statistics";
import FriendList from "../src/components/FriendList";
import TransactionHistory from "../src/components/TransactionHistory";

import data from "./data.json";
import user from './user.json';
import friends from "./friends.json";
import items from "./transactions.json";


export default function App() {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101'
      }}
    >
      <Profile 
      username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}/>

<Statistics key={data.id}
title={data.title}/>

<FriendList
key = {friends.id}
friends ={friends}
/>

<TransactionHistory 
key = {items.id}
items = {items}
/>
  
    </div>
  );
};



