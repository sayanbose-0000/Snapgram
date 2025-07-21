import { jetBrainsMono } from "@/fonts/font";

const NotFound = () => {
  return (
    <div className={`h-screen flex justify-center items-center flex-col ${jetBrainsMono.className} gap-2`}>
      <h1 className="text-3xl font-bold">404!</h1>
      <p className="text-xl">Page Not Found</p>
    </div>
  );
};

export default NotFound;