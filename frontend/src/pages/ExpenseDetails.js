function ExpenseDetails({ incomeAmt, expenseAmt }) {
  const balance = incomeAmt - expenseAmt;

  return (
    <div className="expense-summary">
      <div className="balance-card">
        <h2>Your Balance</h2>
        <p className="balance-amount">₹ {balance}</p>
      </div>

      <div className="amounts-container">
        <div className="amount-card income-card">
          <h3>Income</h3>
          <span className="income-amount">+ ₹{incomeAmt}</span>
        </div>
        <div className="amount-card expense-card">
          <h3>Expense</h3>
          <span className="expense-amount">- ₹{expenseAmt}</span>
        </div>
      </div>
    </div>
  );
}

export default ExpenseDetails;