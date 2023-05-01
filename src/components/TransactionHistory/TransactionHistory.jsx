import PropTypes from 'prop-types';
import * as Styles from './styles';

export const TransactionHistory = ({ items }) => {
  return (
    <Styles.TransactionHistory>
      <thead>
        <tr>
          <Styles.Head>Type</Styles.Head>
          <Styles.Head>Amount</Styles.Head>
          <Styles.Head>Currency</Styles.Head>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <Styles.Raw key={item.id} index={index}>
            <Styles.Cell>{item.type}</Styles.Cell>
            <Styles.Cell>{item.amount}</Styles.Cell>
            <Styles.Cell>{item.currency}</Styles.Cell>
          </Styles.Raw>
        ))}
      </tbody>
    </Styles.TransactionHistory>
  );
};

TransactionHistory.prototype = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
