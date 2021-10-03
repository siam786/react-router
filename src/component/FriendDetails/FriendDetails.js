import React from "react";
import { useHistory, useParams } from "react-router";
import { useEffect, useState } from "react/cjs/react.development";

const FriendDetails = () => {
    const history = useHistory();
  const { friendId } = useParams();
  const [friendDetail, setFriendDetail] = useState({});
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFriendDetail(data));
  }, []);
  const seeAllFriends = () =>{
      history.push(`/friends`)
  }
  return (
    <div className="App">
      <h2>Friend Detials Coming Soon .{friendId} </h2>
      <h1>{friendDetail.name}</h1>
      <h2>{friendDetail.phone}</h2>
      <h2>{friendDetail.email}</h2>
      <h4>{friendDetail.username}</h4>
      <h4>{friendDetail.company?.name}</h4>
      <button onClick={seeAllFriends}>See all friends</button>
    </div>
  );
};

export default FriendDetails;
