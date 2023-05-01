import styled from 'styled-components';

export const TransactionHistory = styled.table`
  width: 450px;
  font-size: 16px;
  text-align: center;
  background-color: #6c6c6c;
  color: #6b6b6b;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
  margin-top: 25px;
  margin-bottom: 25px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  overflow: hidden;
  border-collapse: collapse;
  border: 1px solid #6c6c6c;
`;

export const Head = styled.th`
  text-transform: uppercase;
  height: 50px;
  background-color: #00ced1;
  color: #ffffff;
  border: 1px solid #6c6c6c;
`;

export const Raw = styled.tr`
  height: 40px;
  background-color: ${props => (props.index % 2 === 0 ? '#ffffff' : '#dde3eb')};
`;

export const Cell = styled.td`
  border-left: 1px solid #6c6c6c;
  border-right: 1px solid #6c6c6c;
`;
