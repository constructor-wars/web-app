import React from 'react';

function UserLogin(props) {
  return (
    <label className="label_container">
      {props.label}
      <input
        className="inputfield"
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
        name={props.name}
      />
    </label>
  );
}

export default UserLogin;
