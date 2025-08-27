import getComments, { IComments } from "@/libs/db/getComments";
import { PostProp } from "../home/Post";
import AllComments from "./AllComments";
import CaptionComment from "./CaptionComment";

const CommentBox = async ({ post }: PostProp) => {
  const allComments = await getComments(post) as IComments[];

  return (
    // <div className="h-96 overflow-y-auto m-1">
    <div className="h-96 overflow-y-auto  m-1 comments-scroll-container">
      <CaptionComment post={post} />
      <AllComments allComments={allComments} />
    </div>
  );
};

export default CommentBox;
