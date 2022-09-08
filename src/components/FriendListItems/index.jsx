
export default function FriendListItems ({avatar, name, isOnline}){
  return (
    <section class="friendCard">
      <li class="item">
  <span class="status">{isOnline}</span>
  <img class="avatar" src={avatar} alt="User avatar" width="48" />
  <p class="name">{name}</p>
</li>
</section>
   
  )
}