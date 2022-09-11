import "./Profile.css";
import PropTypes from "prop-types";
import Statistics from "components/Statistics";
import data from "../../data.json";
export default function Profile ({avatar, username, tag, location, stats}){
  
  return(
  <div className="profile">
  <div className="description">
    <img
      src={avatar}
      alt="User avatar"
      className="avatar"
      width = "240"
    />
    <p className="name">{username}</p>
    <p className="tag">@{tag}</p>
    <p className="location">{location}</p>
  </div>

  <ul className="stats">
    <li>
      <span className="label">Followers</span>
      <span className="quantity"> {stats.followers}</span>
    </li>
    <li>
      <span className="label">Views</span>
      <span className="quantity"> {stats.views}</span>
    </li>
    <li>
      <span className="label">Likes</span>
      <span className="quantity"> {stats.likes}</span>
    </li>
  </ul>
  <Statistics key={data.id}
title={data.title}/>
</div>);
}

Profile.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.object,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number
}