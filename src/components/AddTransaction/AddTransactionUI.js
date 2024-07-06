import React, { useState } from "react";
import './AddTransaction.scss';


function AddTransactionUI(props) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const [type, setType] = useState('Income');

  const {showModal, setShowModal, actionHandler} = props;


  const handleSubmit = (e) => {
    e.preventDefault();
    let newTransaction = {
      title, amount, category, date, type
    }
    actionHandler(newTransaction);
  }

  const closeModal = () => {
    setTitle('');
    setAmount('');
    setCategory('');
    setDate('');
    setType('Income');
    setShowModal(false);
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
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="" disabled>Please select one</option>
              <option value="Income">Income</option>
              <option value="Housing">Housing</option>
              <option value="Food">Food</option>
              <option value="Utilities">Utilities</option>
              <option value="Fitness">Fitness</option>
              <option value="Other">Others</option>
            </select>
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
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <p>Your data is added successfully</p>
          </div>
        </div>
      )}
    </>
  );
}

export default AddTransactionUI;
