import css from "./FriendList.module.css";
import PropTypes from "prop-types";
import FriendListItems from "../FriendListItems";

export default function FriendList({friends}){
    return(

        <ul className={css.friendList}>
            {friends.map(friends=>(<li className={css.friendList_item} key = {friends.id}><FriendListItems 
avatar ={friends.avatar}
name = {friends.name}
isOnline = {friends.isOnline}
/></li>))}

</ul>
    )
}

FriendList.propTypes = {
    friends: PropTypes.array,
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool
}