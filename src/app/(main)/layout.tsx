import { inter } from "@/fonts/font";
import { Metadata, Viewport } from "next";
import "@/styles/globals.css";
import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";
import Dock from "@/components/dock/Dock";
import DetailsBar from "@/components/details/DetailsBar";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "Snapgram",
  description: "Social Media Platform For Everybody",
};

export const viewPort: Viewport = {
  viewportFit: 'cover',
};

const MainLayout = ({ children }: Readonly<{ children: React.ReactNode; }>) => {
  return (
    <html lang="en" data-theme="forest" suppressHydrationWarning>
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <ThemeProvider defaultTheme="forest">
          <Navbar />
          <section className="flex flex-grow">
            <Sidebar />
            {children}
            <DetailsBar />
          </section>
          <Dock />
        </ThemeProvider>
      </body>
    </html>
  );
};

export default MainLayout;
