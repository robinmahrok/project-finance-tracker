import React from "react";
import './TransactionList.scss'

function TransactionListUI(props) {

  const { transactions } = props;

  return (
    <>
    <div className="transaction-list">
      <h2>Transaction List</h2>
      <ul>
        {transactions?.map(transaction => (
          <li key={transaction?.id} className="transaction-item">
            <div>
              <strong>{transaction?.title}</strong>
              {
                transaction?.isIncome ?  <span className="incomeAmount">&#8377;{transaction?.amount}</span>:
                <span className="expAmount">&#8377;{transaction?.amount}</span>
              }
            </div>
            <div>
              <span className="category">{transaction?.category}</span>
              <span className="date">{transaction?.date}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
}

export default TransactionListUI;
