"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

function Navbar() {
  const router = useRouter();
  return (
    <header>
      <Link href="/">
        <h1>Task App</h1>
      </Link>
      <div>
        <button onClick={() => router.push("/new")}>Add task</button>
      </div>
    </header>
  );
}

export default Navbar;
