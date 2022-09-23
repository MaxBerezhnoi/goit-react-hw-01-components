
import css from  "./FriendListItems.module.css";
import PropTypes from "prop-types";
export default function FriendListItems ({avatar, name, isOnline}){
  return (
    <section className={css.friendCard}>
      <li className={css.item}>
        {isOnline === true ? (<span className={css.status}>On{isOnline}</span>) : (<span className={css.statusOff}>Off{isOnline}</span>)}
  
  <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
  <p className={css.name}>{name}</p>
</li>
</section>
   
  )
}

FriendListItems.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool
}