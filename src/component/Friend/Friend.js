import React from "react";

const Friend = (props) => {
  const { name, email, phone } = props.friend;
  return (
    <div>
     <p>this is single friend{name}</p>
    </div>
  );
};

export default Friend;
