import { TaskProvider } from "@/context/TaskContext";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "./Toaster";
import Layout from "@/components/Layout";

export const metadata = {
  title: "Tasks App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TaskProvider>
          <Navbar />
          <Layout>{children}</Layout>
          <Toaster />
        </TaskProvider>
      </body>
    </html>
  );
}
