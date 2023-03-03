import React from 'react';
import PropTypes from 'prop-types';
import s from './Transaction.module.css';
import TransactionItem from './TransactionItem'

const Transactions = ({ transactions }) => {
  return (
    <table className={s.transactionHistoryTable}>
      <thead className={s.hederRow}>
        <tr className={s.valuesRow}>
          <th className={s.columnHeader}>Type</th>
          <th className={s.columnHeader}>Amount</th>
          <th className={s.columnHeader}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(({ id, type, amount, currency }) => (
          <TransactionItem
            key={id}
            type={type}
            amount={amount}
            currency={currency}
          />
        ))}
      </tbody>
    </table>
  );
};
export default Transactions;

Transactions.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
