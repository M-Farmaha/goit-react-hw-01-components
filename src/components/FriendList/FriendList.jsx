import { FriendListItem } from './FriendListItem';
import * as Styles from './styles';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return (
    <Styles.FriendList>
      {friends.map(friend => (
        <FriendListItem friend={friend} key={friend.id} />
      ))}
    </Styles.FriendList>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
