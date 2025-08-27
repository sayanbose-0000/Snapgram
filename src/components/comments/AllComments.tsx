"use client";

import { IComments } from "@/libs/db/getComments";
import SingleComment from "./SingleComment";

interface AllCommentsProps {
  allComments: IComments[];
}

const AllComments = ({ allComments }: AllCommentsProps) => {
  console.log(allComments);

  return (
    <>
      {
        allComments.map(comment => (
          <SingleComment comment={comment} key={comment._id} />
        ))
      }
    </>
  );
};

export default AllComments;
