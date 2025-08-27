"use client";

import { MessageCircle } from "lucide-react";
import CreateComment from "../comments/CreateComment";
import { PostProp } from "../home/Post";
import { ReactNode } from "react";

interface CommentsModalProps extends PostProp {
  children: ReactNode;
}

const CommentsModal = ({ post, children }: CommentsModalProps) => {
  const modalId = `message-modal-${post._id}`;

  const handleMessageOpen = () => {
    const messageModal = document.getElementById(modalId) as HTMLDialogElement;
    messageModal.showModal();
  };

  return (
    <div className="h-fit w-fit">
      <button className="btn h-fit w-fit p-0 bg-transparent border-0 shadow-none" onClick={handleMessageOpen}>
        <MessageCircle />
      </button>
      <dialog id={modalId} className="modal">
        <div className="modal-box p-0 m-0 ">
          <CreateComment post={post} />
          {children}
        </div>
        <form method="dialog" className="modal-backdrop">
          <button className="backdrop-blur-sm">close</button>
        </form>
      </dialog>
    </div>
  );
};

export default CommentsModal;
