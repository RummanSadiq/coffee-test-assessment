import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Coffee test",
  description: "Coffee time",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
