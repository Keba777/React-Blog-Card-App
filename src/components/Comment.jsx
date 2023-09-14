import React, { useState } from "react";

const Comment = () => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleCommentSubmit = () => {
    if (comment.trim() !== "") {
      const newComment = {
        text: comment,
        timestamp: new Date().toLocaleString(),
      };
      setComments([...comments, newComment]);
      setComment(""); // Clear the comment input field
    }
  };

  return (
    <div>
      <h2>Comments</h2>
      <div>
        <textarea
          rows="4"
          placeholder="Add a comment..."
          value={comment}
          onChange={handleCommentChange}
        ></textarea>
        <button onClick={handleCommentSubmit}>Add Comment</button>
      </div>
      <ul>
        {comments.map((c, index) => (
          <li key={index}>
            <strong>{c.timestamp}</strong>: {c.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Comment;
