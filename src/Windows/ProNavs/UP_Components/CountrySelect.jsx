import React, { useState } from 'react';
import Select from 'react-select';
import countryList from 'react-select-country-list';
import 'flag-icons/css/flag-icons.min.css';
import FormDataContext from './FormDataContext';

const CountrySelect = ({ formData, option, handleChange }) => {
  const options = countryList().getData();

  const customStyles = {
    control: (provided) => ({
      ...provided,
      borderRadius: '0.375rem',
      padding: '0.375rem',
      border: '1px solid #d1d5db',
      '&:focus': {
        borderColor: '#3b82f6',
        boxShadow: '0 0 0 1px #3b82f6',
      },
    }),
    option: (provided) => ({
      ...provided,
      display: 'flex',
      alignItems: 'center',
    }),
    singleValue: (provided) => ({
      ...provided,
      display: 'flex',
      alignItems: 'center',
    }),
  };

  const formatOptionLabel = ({ label, value }) => (
    <div className="flex items-center">
      <span className={`fi fi-${value.toLowerCase()} mr-2`} />
      {label}
    </div>
  );

  return (
    <div className="mb-4">
      <label className="block text-sm font-semibold mb-1">Country:</label>
      <Select
        options={options}
        styles={customStyles}
        formatOptionLabel={formatOptionLabel}
        value={options.find(c => c.value === formData[option].country)}
        onChange={(selectedOption) => handleChange({ target: { name: 'country', value: selectedOption.value } })}
      />
    </div>
  );
};

export default CountrySelect;
