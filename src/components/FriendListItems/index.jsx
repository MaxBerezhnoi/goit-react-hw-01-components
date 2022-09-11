
import "./FriendListItems.css";
import PropTypes from "prop-types";
export default function FriendListItems ({avatar, name, isOnline}){
  return (
    <section className="friendCard">
      <li className="item">
        {isOnline === true ? (<span className="status">On{isOnline}</span>) : (<span className="statusOff">Off{isOnline}</span>)}
  
  <img className="avatar" src={avatar} alt="User avatar" width="48" />
  <p className="name">{name}</p>
</li>
</section>
   
  )
}

FriendListItems.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool
}