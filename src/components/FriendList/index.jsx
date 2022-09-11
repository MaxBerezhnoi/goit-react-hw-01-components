import "./FriendList.css";
import PropTypes from "prop-types";
import FriendListItems from "../FriendListItems";

export default function FriendList({friends}){
    return(

        <ul class="friend-list">
            {friends.map(friends=>(<li class="friend-list_item"><FriendListItems 
avatar ={friends.avatar}
name = {friends.name}
isOnline = {friends.isOnline}
/></li>))}

</ul>
    )
}

FriendList.propTypes = {
    friends: PropTypes.object,
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool
}