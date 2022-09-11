import "./Profile.css";
import PropTypes from "prop-types";
import Statistics from "components/Statistics";
import data from "../../data.json";
export default function Profile ({avatar, username, tag, location, stats}){
  
  return(
  <div class="profile">
  <div class="description">
    <img
      src={avatar}
      alt="User avatar"
      class="avatar"
      width = "240"
    />
    <p class="name">{username}</p>
    <p class="tag">@{tag}</p>
    <p class="location">{location}</p>
  </div>

  <ul class="stats">
    <li>
      <span class="label">Followers</span>
      <span class="quantity"> {stats.followers}</span>
    </li>
    <li>
      <span class="label">Views</span>
      <span class="quantity"> {stats.views}</span>
    </li>
    <li>
      <span class="label">Likes</span>
      <span class="quantity"> {stats.likes}</span>
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