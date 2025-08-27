"use client";

import { Send } from "lucide-react";
import { MdClose } from "react-icons/md";

const ShareModal = () => {
  const handleShareOpen = () => {
    const messageModal = document.getElementById('share-modal') as HTMLDialogElement;
    messageModal.showModal();
  };

  return (
    <div className="h-fit w-fit">
      <button className="btn h-fit w-fit p-0 bg-transparent border-0 shadow-none" onClick={handleShareOpen}><Send /></button>
      <dialog id="share-modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Share</h3>
          <p className="py-4">Press ESC key or click outside to close</p>

          {/* Closing button */}
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn h-fit w-fit p-0"><MdClose className="text-2xl" /></button>
            </form>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default ShareModal;
