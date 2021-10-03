import React from "react";
import { Link,useHistory } from "react-router-dom";

const Friend = (props) => {
  const history = useHistory();
  const { id,name, email, phone, address } = props.friend;
  const friendStyle ={
   
    border: '3px solid goldenrod',
    borderRadius: '10px',
    padding: '20px 20px',
    textAlign:'center'
  }
  const url = `./friend/${id}`
  const handleClick = () => {
    history.push(`/friend/${id}`)
  }
  return (
    <div style={friendStyle}>
      <h2>My name is {name}</h2>
      <h4>Phone no:{phone}</h4>
      <p>I live in: {address.city},{address.suite},{address.street}</p>
      <p>Email: {email}</p>
      <button onClick={handleClick}>Visit me</button>
    </div>
  );
};

export default Friend;
