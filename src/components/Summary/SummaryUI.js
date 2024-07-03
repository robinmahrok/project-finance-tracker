import React from "react";
import "./Summary.scss";
function SummaryUI(props) {
  const { totalIncome, totalExpenses, balance } = props;
  return (
    <>
      <div className="summary">
        <h2>Summary</h2>
        <div className="summary-item">
          <strong>Total Income:</strong>
          <span>&#8377;{totalIncome.toFixed(2)}</span>
        </div>
        <div className="summary-item">
          <strong>Total Expenses:</strong>
          <span>&#8377;{totalExpenses.toFixed(2)}</span>
        </div>
        <div className="summary-item">
          <strong>Balance:</strong>
          <span>&#8377;{balance.toFixed(2)}</span>
        </div>
      </div>
    </>
  );
}

export default SummaryUI;
