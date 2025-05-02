import { archivo } from "@/fonts/font";
import { Metadata, Viewport } from "next";
import "@/styles/globals.css";
import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";
import Dock from "@/components/dock/Dock";

export const metadata: Metadata = {
  title: "Snapgram",
  description: "Social Media Platform For Everybody",
};

export const viewPort: Viewport = {
  viewportFit: 'cover',
};

const MainLayout = ({ children }: Readonly<{ children: React.ReactNode; }>) => {
  return (
    <html lang="en" data-theme="black">
      <body className={`${archivo.className} antialiased flex flex-col min-h-screen`}>
        <Navbar />
        <section className="flex flex-grow">
          <Sidebar />
          {children}
        </section>
        <Dock />
      </body>
    </html>
  );
};

export default MainLayout;