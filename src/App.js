//import React from "react";
//import ReactDOM from "react-dom";
import Profile from "components/Profile";
import FriendList from "components/FriendList";
import TransactionHistory from "components/TransactionHistory";


import user from './user.json';
import friends from "./friends.json";
import items from "./transactions.json";


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
        width: 800
      }}
    >
      <Profile 
      username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}></Profile>



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



