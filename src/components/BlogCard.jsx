// Import necessary components for the BlogCard
import Card from "./Card";
import Title from "./Title";
import Image from "./Image";
import Author from "./Author";
import Date from "./Date";
import Summary from "./Summary";

// Define the BlogCard component that displays a blog post
const BlogCard = ({ title, image, author, date, summary }) => {
  return (
    <Card>
      <Title title={title} /> {/* Display the blog post title */}
      <Image source={image} /> {/* Display the blog post image */}
      <div className="text-box">
        <Author author={author} /> {/* Display the blog post author */}
        <Summary summary={summary} /> {/* Display the blog post summary */}
        <Date date={date} /> {/* Display the blog post publication date */}
      </div>
    </Card>
  );
};

export default BlogCard; // Export the BlogCard component for use in the application
