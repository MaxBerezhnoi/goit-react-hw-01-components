
import "./FriendListItems.css";
import PropTypes from "prop-types";
export default function FriendListItems ({avatar, name, isOnline}){
  return (
    <section class="friendCard">
      <li class="item">
        {isOnline === true ? (<span class="status">On{isOnline}</span>) : (<span class="statusOff">Off{isOnline}</span>)}
  
  <img class="avatar" src={avatar} alt="User avatar" width="48" />
  <p class="name">{name}</p>
</li>
</section>
   
  )
}

FriendListItems.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool
}