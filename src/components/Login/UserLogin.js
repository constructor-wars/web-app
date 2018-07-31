import React from 'react';

function UserLogin(props) {
  return (
    <label>
      {props.label}
      <input
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
        name={props.name}
      />
    </label>
  );
}

export default UserLogin;
