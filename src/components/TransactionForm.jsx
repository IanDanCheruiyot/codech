import React, { useState } from 'react';
import './TransactionForm.css';

function TransactionForm({ addTransaction }) {
  const [formData, setFormData] = useState({
    description: '',
    amount: '',
    category: '',
    date: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = { ...formData, id: Date.now() };
    addTransaction(newTransaction);
    setFormData({ description: '', amount: '', category: '', date: '' });
  };

  return (
    <form className="transaction-form" onSubmit={handleSubmit}>
       <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        className="form-input"
        required
      />
      <input
        type="text"
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
        className="form-input"
        required
      />
      <input
        type="text"
        name="category"
        value={formData.category}
        onChange={handleChange}
        placeholder="Category"
        className="form-input"
        required
      />
      <input
        type="number"
        name="amount"
        value={formData.amount}
        onChange={handleChange}
        placeholder="Amount"
        className="form-input"
        required
      />
      <button type="submit" className="form-button">Add Transaction</button>
    </form>
  );
}

export default TransactionForm;