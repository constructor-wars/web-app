import React from 'react';

function UserLogin(props) {
  return (
    <form>
      <input
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </form>
  );
}

export default UserLogin;
