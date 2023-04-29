import { useTasks } from "@/context/TaskContext";
import { useRouter } from "next/navigation";
import React from "react";

function TaskCard({ task }) {
  const router = useRouter();

  const { deleteTask } = useTasks();
  return (
    <div
      style={{ backgroundColor: "#242424", color: "#fff" }}
      onClick={() => router.push(`/edit/${task.id}`)}
    >
      <h2>{task.title}</h2>
      <button
        onClick={(e) => {
          deleteTask(task.id);
          e.stopPropagation();
        }}
      >
        Delete
      </button>
      <p>{task.description}</p>
    </div>
  );
}

export default TaskCard;
