import React, { useState } from "react";

const Friend = (props) => {
  const { name, email } = props.friend;
  return (
    <div>
      <p>
        My name is {name} and {email}
      </p>
    </div>
  );
};

export default Friend;
