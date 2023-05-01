import * as Styles from './styles';

export const FriendListItem = ({ friend }) => {
  return (
    <Styles.FriendListItem>
      <Styles.Status isOnline={friend.isOnline} />
      <img
        className="avatar"
        src={friend.avatar}
        alt={friend.name}
        width="48"
      />
      <Styles.Name>{friend.name}</Styles.Name>
    </Styles.FriendListItem>
  );
};
