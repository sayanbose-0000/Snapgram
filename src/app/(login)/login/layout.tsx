import { archivo } from "@/fonts/font";
import { Metadata, Viewport } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Snapgram- Login",
  description: "Login Page for Snpgram",
};

const LoginLayout = ({ children }: Readonly<{ children: React.ReactNode; }>) => {
  return (
    <html lang="en" data-theme="black">
      <body className={`${archivo.className} antialiased`}>
          {children}
      </body>
    </html>
  );
};

export default LoginLayout;