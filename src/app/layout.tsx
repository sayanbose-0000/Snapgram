import { archivo } from "@/fonts/font";
import { Metadata, Viewport } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Snapgram",
  description: "Welcome to the world of social media!",
};

export const viewPort: Viewport = {
  viewportFit: 'cover',
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode; }>) => {
  return (
    <html lang="en" data-theme="black">
      <body className={`${archivo.className} antialiased flex flex-col min-h-screen`}>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;