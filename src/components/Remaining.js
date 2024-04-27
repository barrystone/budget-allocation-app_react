import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { calcTotalExpenses } from './Budget';
const Remaining = () => {
  const { expenses, budget, currency } = useContext(AppContext);
  const totalExpenses = calcTotalExpenses(expenses);

  const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';
  return (
    <div className={`alert ${alertType}`}>
      <span>
        Remaining: {currency} {budget - totalExpenses}
      </span>
    </div>
  );
};
export default Remaining;
