import postComments from "@/libs/db/postComment";
import { PostProp } from "../home/Post";

const CreateComment = ({ post }: PostProp) => {
  return (
    <form action={postComments} className="p-2 flex gap-1">
      <input type="text" placeholder="Add a comment..." className="grow outline-none" id="post-comment" name="post-comment" />
      <input type="hidden" defaultValue={post._id?.toString()} name="post-id" />
      <button className="p-1 px-2 bg-neutral text-neutral-content rounded-sm cursor-pointer" type="submit">Post</button>
    </form>
  );
};

export default CreateComment;
