import React, { useState } from "react";
import FillHeart from "../assets/icons/heart.png";
import UnFillHeart from "../assets/icons/love.png";

const Like = ({ likeCount, onLikeClick }) => {
  const [status, setStatus] = useState(false);

  const toggleStatus = () => {
    setStatus(!status);
    onLikeClick(!status);
  };

  return (
    <span onClick={toggleStatus}>
      <img
        className="like-icon"
        src={status ? FillHeart : UnFillHeart}
        alt="like"
      />
      {likeCount}
    </span>
  );
};

export default Like;
