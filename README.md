# React-Blog-Card-App
The repository is the task given by A2SV for creating react app for Blog Card App.

React Components with useState Hook
In this project, we use the useState hook from React to manage state within our functional components. The useState hook allows us to add stateful behavior to our components without the need for class components.

Like Component
The Like component is responsible for managing and displaying the like count for a blog post. Here's how the useState hook is used in this component:

In the Like component, we declare a state variable status using useState, initially set to false. This state represents whether the post has been liked (true) or not (false).

The toggleStatus function is called when the user clicks the like button. It toggles the status state and calls the onLikeClick prop function, which is provided by the parent component, to handle the like count.

Comment Component
The Comment component allows users to add comments to a blog post. Here's how useState is used in this component:
The Comment component uses two state variables: comment and comments.

comment represents the text of the current comment being typed in the input field, and comments is an array that stores all the submitted comments.

The handleCommentChange function updates the comment state as the user types in the input field.

When the user clicks the "Add Comment" button, the handleCommentSubmit function is called. It adds the current comment to the comments array with a timestamp and clears the comment input field.

BlogCard Component
The BlogCard component displays a blog post, including the title, image, author, date, summary, like button (Like component), and comment section (Comment component). Here's how useState is used in this component:
In the BlogCard component, we use useState to manage the likeCount state for the blog post's likes.

The handleLikeClick function is passed as a prop to the Like component. When a user clicks the like button in the Like component, it calls this function to update the likeCount in the BlogCard component.

These components illustrate how to use the useState hook to add and manage state within functional components, enabling them to respond to user interactions and display dynamic data.
