import React from 'react';
import PropTypes from 'prop-types';
import s from './Transaction.module.css';

const TransactionItem = ({ type, amount, currency }) => {
  return (
    <tr className={s.valuesRow}>
      <td className={s.transactionData}>{type}</td>
      <td className={s.transactionData}>{amount}</td>
      <td className={s.transactionData}>{currency}</td>
    </tr>
  );
};

export default TransactionItem;

TransactionItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
