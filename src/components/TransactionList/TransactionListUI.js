import React from "react";
import './TransactionList.scss'

function TransactionListUI(props) {

  const { transactions, setEndDate, setStartDate, startDate, endDate } = props;

  return (
    <>
    <div className="transaction-list">
      <h2>Transaction List</h2>
      <div className="filter-controls">
          <div className="form-control">
            <label>Start Date</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label>End Date</label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
        </div>
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
