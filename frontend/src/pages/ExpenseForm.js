import React, { useState } from 'react';
import { handleError } from '../utils';

function ExpenseForm({ addTransaction }) {
  const [expenseInfo, setExpenseInfo] = useState({
    type: '', 
    text: '',
    amount: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpenseInfo({ ...expenseInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { type, text, amount } = expenseInfo;

    if (!text || !amount) {
      handleError('Please fill all fields');
      return;
    }

    const finalAmount = type === 'income' ? Math.abs(Number(amount)) : -Math.abs(Number(amount));

    addTransaction({ text, amount: finalAmount });
    setExpenseInfo({ type: 'expense', text: '', amount: '' });
  };

  return (
    <div className="expense-form-card">
      <h1 className="expense-form-title">💰 Expense Tracker</h1>
      <form onSubmit={handleSubmit} className="expense-form">
        <div className="form-field">
          <label htmlFor="type">Type</label>
          <select
            name="type"
            value={expenseInfo.type}
            onChange={handleChange}
          >
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>

        <div className="form-field">
          <label htmlFor="text">
            {expenseInfo.type === 'income' ? 'Income Source' : 'Expense Detail'}
          </label>
          <input
            type="text"
            name="text"
            placeholder={
              expenseInfo.type === 'income' ? 'Enter income source...' : 'Enter expense detail...'
            }
            value={expenseInfo.text}
            onChange={handleChange}
          />
        </div>

        <div className="form-field">
          <label htmlFor="amount">
            {expenseInfo.type === 'income' ? 'Income Amount' : 'Expense Amount'}
          </label>
          <input
            type="number"
            name="amount"
            placeholder={
              expenseInfo.type === 'income' ? 'Enter income amount...' : 'Enter expense amount...'
            }
            value={expenseInfo.amount}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="expense-btn">
          + Add {expenseInfo.type === 'income' ? 'Income' : 'Expense'}
        </button>
      </form>
    </div>
  );
}

export default ExpenseForm;