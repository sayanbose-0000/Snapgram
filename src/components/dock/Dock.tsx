import getUserDetails from "@/libs/auth/getUserDetails";
import DockCurrent from "./DockCurrent";

const Dock = async () => {
  const user = await getUserDetails();

  return (
    <div className="dock lp:hidden lg-tb:w-lg rounded-2xl mx-auto">
      <DockCurrent username={user?.username}/>
    </div>
  );
};

export default Dock;
