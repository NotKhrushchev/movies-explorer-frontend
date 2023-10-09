import React from 'react';

const AccountActionsBtn = ({ addtlClass, text }) => {
  return (
    <button className={`btn ${addtlClass}`}>{text}</button>
  );
};

export default AccountActionsBtn;