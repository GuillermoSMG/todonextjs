"use client";

import { TaskProvider } from "@/context/TaskContext";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Tasks App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TaskProvider>
          <Navbar />
          {children}
        </TaskProvider>
      </body>
    </html>
  );
}
