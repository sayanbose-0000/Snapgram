import { jetBrainsMono } from "@/fonts/font";

const NotFound = () => {
  return (
    <main className={`flex-1 flex justify-center items-center flex-col ${jetBrainsMono.className} gap-2`}>
      <h1 className="text-3xl font-bold">404!</h1>
      <p className="text-xl">Page Not Found</p>
    </main>
  );
};

export default NotFound;