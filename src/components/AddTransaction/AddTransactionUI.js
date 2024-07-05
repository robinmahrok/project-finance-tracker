import React, { useState } from "react";
import './AddTransaction.scss';


function AddTransactionUI(props) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const [type, setType] = useState('Income');

  const handleSubmit = (e) => {
    e.preventDefault();
    let newTransaction = {
      title, amount, category, date, type
    }
    props.actionHandler(newTransaction);
  }

  return (
    <>
    <div className="addTransaction">
      <h2>Add New Transaction</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter title"
            required
          />
        </div>
        <div className="form-control">
          <label>Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            required
          />
        </div>
        <div className="form-control">
          <label>Category</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Enter category"
            required
          />
        </div>
        <div className="form-control">
          <label>Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="form-control">
          <label>Is it a part of Income or Expenditure?</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                value="Income"
                checked={type === 'Income'}
                onChange={() => setType('Income')}
              />
              Income
            </label>
            <label>
              <input
                type="radio"
                value="Expenditure"
                checked={type === 'Expenditure'}
                onChange={() => setType('Expenditure')}
              />
              Expenditure
            </label>
          </div>
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </div>
    </>
  );
}

export default AddTransactionUI;
