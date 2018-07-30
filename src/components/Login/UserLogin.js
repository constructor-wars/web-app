import React from 'react';

function UserLogin(props) {
  return (
    <form>
      <label>
        {props.label}
        <input
          value={props.value}
          placeholder={props.placeholder}
          onChange={props.onChange}
          name={props.name}
        />
      </label>
    </form>
  );
}

export default UserLogin;
