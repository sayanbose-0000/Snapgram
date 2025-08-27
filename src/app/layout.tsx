import { inter } from "@/fonts/font";
import { Metadata, Viewport } from "next";
import "@/styles/globals.css";
import Dock from "@/components/dock/Dock";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "Snapgram",
  description: "Social Media Platform For Everybody",
};

export const viewport: Viewport = {
  viewportFit: 'cover',
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode; }>) => {
  return (
    <html lang="en" data-theme="forest" suppressHydrationWarning>
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <ThemeProvider defaultTheme="forest">
          <main className="overflow-y-auto w-full flex flex-col items-center">
            {children}
          </main>
          <Dock />
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
