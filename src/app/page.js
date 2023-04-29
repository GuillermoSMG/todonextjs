"use client";

import TaskCard from "@/components/TaskCard";
import { useTasks } from "@/context/TaskContext";
import React from "react";

function HomePage() {
  const { tasks } = useTasks();
  return (
    <div>
      {tasks?.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default HomePage;
