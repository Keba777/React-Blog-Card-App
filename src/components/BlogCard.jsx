// Import necessary components for the BlogCard
import Card from "./Card";
import Title from "./Title";
import Image from "./Image";
import Author from "./Author";
import Date from "./Date";
import Summary from "./Summary";
import Like from "./Like";
import { useState } from "react";
import Comment from "./Comment";

// Define the BlogCard component that displays a blog post
const BlogCard = ({ title, image, author, date, summary }) => {
  const [likeCount, setLikeCount] = useState(0);

  const handleLikeClick = (liked) => {
    setLikeCount(liked ? likeCount + 1 : likeCount - 1);
  };

  return (
    <Card>
      <Title title={title} /> {/* Display the blog post title */}
      <Image source={image} /> {/* Display the blog post image */}
      <div className="text-box">
        <Author author={author} /> {/* Display the blog post author */}
        <Summary summary={summary} /> {/* Display the blog post summary */}
        <Date date={date} /> {/* Display the blog post publication date */}
      </div>
      <Like likeCount={likeCount} onLikeClick={handleLikeClick} />
      <Comment />
    </Card>
  );
};

export default BlogCard; // Export the BlogCard component for use in the application
