import SingleComment from "./SingleComment";

const CommentBox = () => {
  return (
    // <div className="h-96 overflow-y-auto m-1">
    <div className="h-96 overflow-y-auto  m-1 comments-scroll-container">
      <SingleComment />
      <SingleComment />
      <SingleComment />
      <SingleComment />
      <SingleComment />
      <SingleComment />
      <SingleComment />
      <SingleComment />
      <SingleComment />
    </div>
  );
};

export default CommentBox;