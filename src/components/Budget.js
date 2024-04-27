import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

export const calcTotalExpenses = (expenses) =>
  expenses.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);

const Budget = () => {
  const { budget, expenses, currency, dispatch } = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget);

  const handleBudgetChange = (event) => setNewBudget(event.target.value);

  const handleBudgetBlur = (event) => {
    const budgetValue = event.target.value;
    const totalExpenses = calcTotalExpenses(expenses);

    if (budgetValue < totalExpenses) {
      alert('The budget value cannot be lower than the spendings!');
      setNewBudget(budget);
      return;
    }
    dispatch({
      type: 'SET_BUDGET',
      payload: budgetValue
    });
  };
  return (
    <div className="alert alert-secondary">
      <span>
        Budget: {currency} {/* {budget} */}
      </span>
      <input
        type="number"
        step="10"
        value={newBudget}
        onChange={handleBudgetChange}
        onBlur={handleBudgetBlur}
      ></input>
    </div>
  );
};
export default Budget;
