import FriendListItems from "../FriendListItems";



export default function FriendList({friends}){
    return(

        <ul class="friend-list">
            {friends.map(friends=>(<li><FriendListItems 
avatar ={friends.avatar}
name = {friends.name}
isOnline = {friends.isOnline}
/></li>))}

</ul>
    )
}