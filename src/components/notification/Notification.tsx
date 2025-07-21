import { IoMdNotificationsOutline } from "react-icons/io";

const Notification = () => {
  return (
    <div role="alert" className="alert alert-horizontal lg-tb:w-sm lp:w-sm lg-lp:w-lg border-2 border-base-content">
      <IoMdNotificationsOutline className="size-6" />
      <div>
        <h3 className="font-bold">New message!</h3>
        <div className="text-xs">You have 1 unread message</div>
      </div>
      <button className="btn btn-sm hover:bg-base-content hover:text-base-100">See</button>
    </div>
  );
};

export default Notification;
