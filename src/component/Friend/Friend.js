import React from "react";

const Friend = (props) => {
  const { name, email, phone } = props.friend;
  return (
    <div>
      <h2>My name is {name}</h2>
      <h4>This is my Email {email}</h4>
      <p>Here my mobile no {phone}</p>
    </div>
  );
};

export default Friend;
