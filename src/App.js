// Import necessary components and assets
import "./App.css";
import BlogCard from "./components/BlogCard";
import ReactImage from "./assets/React.jpg";
import VueImage from "./assets/Vue.jpg";
import NodeImage from "./assets/Node.jpg";
import CssImage from "./assets/Css.jpg";
import JsImage from "./assets/Javascript.jpg";
import PandasImage from "./assets/Pandas.jpg";

function App() {
  return (
    <>
      <h1>My Blog</h1> {/* Display the blog title */}
      <div className="card-grid">
        {" "}
        {/* Create a grid layout for blog cards */}
        {/* Render individual blog cards with respective data */}
        <BlogCard
          title="Introduction to React"
          image={ReactImage}
          author="John Doe"
          date="September 15, 2022"
          summary="Learn the basics of React and start building amazing web applications."
        />
        <BlogCard
          title="Getting Started with Vue.js"
          image={VueImage}
          author="Emily Rodriguez"
          date="February 28, 2023"
          summary="An introduction to Vue.js, a progressive JavaScript framework for building user interfaces."
        />
        <BlogCard
          title="Mastering CSS Flexbox"
          image={CssImage}
          author="Alex Johnson"
          date="November 10, 2022"
          summary="Become a pro in CSS layout by mastering the Flexbox model."
        />
        <BlogCard
          title="JavaScript Testing with Jest"
          image={JsImage}
          author="Michael Brown"
          date="January 15, 2023"
          summary="A comprehensive guide to writing tests for JavaScript applications using Jest."
        />
        <BlogCard
          title="Building Scalable APIs with Node.js"
          image={NodeImage}
          author="Jane Smith"
          date="October 2, 2022"
          summary="Discover how to design and implement scalable APIs using Node.js and Express."
        />
        <BlogCard
          title="Python Data Analysis with Pandas"
          image={PandasImage}
          author="Sarah Thompson"
          date="December 5, 2022"
          summary="Learn how to manipulate and analyze data using the powerful Pandas library in Python."
        />
      </div>
    </>
  );
}

export default App; // Export the App component for use in other parts of the application
