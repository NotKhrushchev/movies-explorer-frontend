import React from 'react';

const AccountActionsBtn = ({ additionalClass, text }) => {
  return (
    <button className={`btn ${additionalClass}`}>{text}</button>
  );
};

export default AccountActionsBtn;