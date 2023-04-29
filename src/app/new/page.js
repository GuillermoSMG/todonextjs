"use client";

import { useTasks } from "@/context/TaskContext";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

function Page({ params }) {
  const [task, setTask] = useState({
    title: "",
    description: "",
  });
  const router = useRouter();

  const { createTask, tasks, updateTask } = useTasks();

  const handleChange = (e) =>
    setTask({ ...task, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (params.id) {
      updateTask(params.id, task);
    } else {
      createTask(task?.title, task?.description);
    }
    router.push("/");
  };

  useEffect(() => {
    if (params.id) {
      const taskFound = tasks.find((task) => task.id === params.id);
      if (taskFound)
        setTask({
          title: taskFound.title,
          description: taskFound.description,
        });
    }
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        value={task.title}
        name="title"
        placeholder="Write a description"
      />
      <textarea
        onChange={handleChange}
        value={task.description}
        name="description"
        placeholder="Enter your task"
      />
      <button>Save</button>
    </form>
  );
}

export default Page;
