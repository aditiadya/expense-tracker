const ExpenseTable = ({ expenses, deleteExpens }) => {
  return (
    <div className="expense-table-card">
      <h2 className="table-title">📜 Transactions</h2>
      <div className="expense-table-scroll">
        {expenses.length === 0 && <p className="empty-msg">No transactions yet.</p>}
        {expenses.map((expense, index) => (
          <div key={index} className="expense-row">
            <button 
              className="expense-delete-btn" 
              onClick={() => deleteExpens(expense._id)}
            >
              ✕
            </button>
            <div className="expense-text">{expense.text}</div>
            <div
              className="expense-amount"
              style={{ color: expense.amount > 0 ? '#27ae60' : '#c0392b' }}
            >
              ₹{expense.amount}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpenseTable;