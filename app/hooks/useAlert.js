import { useState as UseState } from 'react';

const UseAlert = () => {
  const [alert, setAlert] = UseState({
    show: false,
    text: '',
    type: 'danger',
  });

  const showAlert = ({ text, type = 'danger' }) => {
    setAlert({
      show: true,
      text,
      type,
    });
  };
  const hideAlert = () => {
    setAlert({
      show: false,
      text: '',
      type: 'danger',
    });
  };

  return { alert, showAlert, hideAlert };
};

export default UseAlert;
