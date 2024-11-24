import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Danis Cindrak | Software Engineer",
  description: "Software engineer with a passion for building products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
      >
        {children}
      </body>
    </html>
  );
}
