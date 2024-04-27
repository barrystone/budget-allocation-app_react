import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const currencySymbolsToTextMap = {
  $: 'Dollar',
  '£': 'Pound',
  '€': 'Euro',
  '₹': 'Ruppee'
};
const currencyOptions = Object.keys(currencySymbolsToTextMap);

const CurrencyDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { currency, dispatch } = useContext(AppContext);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleDropdownClick = (currency) => {
    dispatch({
      type: 'CHG_CURRENCY',
      payload: currency
    });
    setIsOpen(false);
  };

  return (
    <div className="alert alert-secondary">
      <div className="dropdown" onClick={toggleDropdown}>
        <button className="btn border text-white bg-lightgreen dropdown-toggle ">
          Currency{' '}
          {'(' + currency + ' ' + currencySymbolsToTextMap[currency] + ')'}
          <i className="fa fa-caret-down"></i>
        </button>
        {isOpen && (
          <div className="dropdown-content rounded border-custom w-50 mt-1">
            {currencyOptions.map((option) => (
              <div
                key={option}
                className={`list-group-item p-3 pt-2 pb-2 ${
                  option === currency ? 'bg-white' : 'bg-lightgreen'
                } list-group-item-custom`}
                onClick={() => handleDropdownClick(option)}
              >
                {option} {currencySymbolsToTextMap[option]}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CurrencyDropdown;
