import { IoMdNotificationsOutline } from "react-icons/io";

const Notification = () => {
  return (
    <div role="alert" className="alert alert-horizontal lg-tb:w-sm lp:w-sm lg-lp:w-lg">
      {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info h-6 w-6 shrink-0">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
       */}
      <IoMdNotificationsOutline className="size-6" />
      <div>
        <h3 className="font-bold">New message!</h3>
        <div className="text-xs">You have 1 unread message</div>
      </div>
      <button className="btn btn-sm">See</button>
    </div>
  );
};

export default Notification;