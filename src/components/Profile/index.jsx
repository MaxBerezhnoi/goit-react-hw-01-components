import css from "./Profile.module.css";
import PropTypes from "prop-types";
import Statistics from "components/Statistics";
import data from "../../Data/data.json";
export default function Profile ({avatar, username, tag, location, stats}){
  
  return(
    <div className={css.profile}>
      <div className={css.description}>
    <img
      src={avatar}
      alt="User avatar"
      className={css.avatar}
      width = "240"
    />
    <p className={css.name}>{username}</p>
    <p className={css.tag}>@{tag}</p>
    <p className={css.location}>{location}</p>
  </div>

  <ul className={css.stats}>
    <li>
      <span className={css.label}>Followers</span>
      <span className={css.quantity}> {stats.followers}</span>
    </li>
    <li>
      <span className={css.label}>Views</span>
      <span className={css.quantity}> {stats.views}</span>
    </li>
    <li>
      <span className={css.label}>Likes</span>
      <span className={css.quantity}> {stats.likes}</span>
    </li>
  </ul>
  <Statistics key={data.id}
title={data.title}/>
</div>);
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.object,
  /*followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number*/
}