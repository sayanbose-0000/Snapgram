"use client";

import { useState } from "react";
import SingleReply from "./SingleReply";

const ReplySection = () => {
  const [repliesVisible, setRepliesVisible] = useState<boolean>(false);

  const handleReplesVisible = () => {
    setRepliesVisible(prev => !prev);
  };

  return (
    <div className="pt-2">
      {!repliesVisible ?
        <button className="text-gray-500 cursor-pointer dropdown" onClick={handleReplesVisible}>↓ Show Replies</button>
        :
        <div>
          <button className="text-gray-500 cursor-pointer dropdown" onClick={handleReplesVisible}>↑ Hide Replies</button>
          <SingleReply />
          <SingleReply />
        </div>
      }
    </div>
  );
};

export default ReplySection;