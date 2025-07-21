import { jetBrainsMono } from "@/fonts/font";

const loading = () => {
  return (
    <main className={`h-screen flex justify-center items-center flex-row gap-2 ${jetBrainsMono.className}`}>
      <p>Loading</p>
      <div className="flex">
        <p className="animate-bounce delay-0">.</p>
        <p className="animate-bounce delay-100">.</p>
        <p className="animate-bounce delay-200">.</p>
      </div>
    </main>
  );
};

export default loading;