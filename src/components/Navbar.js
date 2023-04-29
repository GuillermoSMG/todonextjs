"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useTasks } from "@/context/TaskContext";

function Navbar() {
  const router = useRouter();
  const { tasks } = useTasks();
  return (
    <header className="flex justify-between items-center bg-gray-800 px-28 py-3">
      <Link className="flex" href="/">
        <h1 className="font-bold text-3xl text-white">Task App</h1>
        <span className="text-white">{tasks.length}</span>
      </Link>
      <div>
        <button
          className="bg-green-500 hover:bg-green-400 px-5 py-2 text-gray-50 font-bold rounded-sm inline-flex items-center active:translate-y-1"
          onClick={() => router.push("/new")}
        >
          Add task
        </button>
      </div>
    </header>
  );
}

export default Navbar;
