import React, { createContext, useState } from 'react';

export const FormDataContext = createContext();

export const FormDataProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    option1: {
      WriterName: '',
      CategoryOfPost: '',
      country: '',
      place: '',
      about: '',
      sources: '',
      citations: '',
      MetaTwitterPostPageUserName: '',
      MetaTwitterImage: '',
      MetaTwitterDescription: '',
      AdsCode: ''
    }

    // Add more options if needed
  });

  const updateFormData = (option, newData) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      [option]: {
        ...prevFormData[option],
        ...newData
      }
    }));
  };

  return (
    <FormDataContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormDataContext.Provider>
  );
};

export default { FormDataContext, FormDataProvider}