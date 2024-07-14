import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "@/app/globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rest Countries",
  description: "Rest Countries Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
        </body>
    </html>
  );
}
