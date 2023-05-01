import styled from 'styled-components';

export const FriendList = styled.ul`
  font-size: 26px;
  text-align: center;
  color: #000000;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const FriendListItem = styled.li`
  box-sizing: border-box;
  background-color: #ffffff;
  color: #6b6b6b;
  max-width: 300px;
  display: flex;
  align-items: center;
  justify-content: left;
  gap: 15px;
  padding: 15px;
  padding-left: 30px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

export const Name = styled.p`
  margin: 0;
  padding: 0;
`;

export const Status = styled.span`
  height: 18px;
  width: 18px;
  border-radius: 50%;
  background-color: ${friend => (friend.isOnline ? 'green' : 'red')};

  animation-name: ${friend => (friend.isOnline ? 'scale' : 'blinking')};
  animation-duration: 1000ms;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-direction: alternate;

  @keyframes blinking {
    0% {
      opacity: 0%;
    }

    100% {
      opacity: 30%;
    }
  }

  @keyframes scale {
    0% {
      transform: scale(0.7);
    }

    100% {
      transform: scale(1);
    }
  }
`;
