import { inter } from "@/fonts/font";
import { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Snapgram - Login",
  description: "Login Page for Snpgram",
};

const LoginLayout = ({ children }: Readonly<{ children: React.ReactNode; }>) => {
  return (
    <html lang="en" data-theme="black">
      <body className={`${inter.className}`}>
          {children}
      </body>
    </html>
  );
};

export default LoginLayout;