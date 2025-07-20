"use client";

import { MessageCircle } from "lucide-react";
import CommentBox from "../comments/CommentBox";
import CreateComment from "../comments/CreateComment";

const CommentsModal = () => {
  const handleMessageOpen = () => {
    const messageModal = document.getElementById('message-modal') as HTMLDialogElement;
    messageModal.showModal();
  };

  return (
    <div className="h-fit w-fit">
      <button className="btn h-fit w-fit p-0 bg-transparent border-0 shadow-none" onClick={handleMessageOpen}>< MessageCircle /></button>
      <dialog id="message-modal" className="modal">
        <div className="modal-box p-0 m-0 ">
          <CreateComment />
          <CommentBox />
        </div>
        <form method="dialog" className="modal-backdrop">
          <button className="backdrop-blur-sm">close</button>
        </form>
      </dialog>
    </div>
  );
};

export default CommentsModal;