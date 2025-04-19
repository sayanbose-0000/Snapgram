import { archivo } from "@/fonts/font";
import { Metadata } from "next";
import "@/styles/globals.css"

export const metadata: Metadata = {
  title: "Insta",
  description: "Social Media Platform For Everybody"
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode; }>) => {
  return (
    <html lang="en">
      <body className={`${archivo.className} antialiased`}>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;