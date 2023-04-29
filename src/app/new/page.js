"use client";

import { useForm } from "react-hook-form";
import { useTasks } from "@/context/TaskContext";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

function Page({ params }) {
  const [task, setTask] = useState({
    title: "",
    description: "",
  });
  const { tasks, updateTask, createTask } = useTasks();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  useEffect(() => {
    if (params.id) {
      const taskFound = tasks.find((task) => task.id === params.id);
      if (taskFound) {
        setValue("title", taskFound.title);
        setValue("description", taskFound.description);
      }
    }
  }, []);

  const onSubmit = handleSubmit((data) => {
    if (params.id) {
      updateTask(params.id, data);
      toast.success("Task updated!");
    } else {
      createTask(data.title, data.description);
      toast.success("Task created!");
    }
    router.push("/");
  });

  return (
    <div className="flex justify-center items-center h-full">
      <form className="bg-gray-700 p-10" onSubmit={onSubmit}>
        <input
          className="bg-gray-800 py-3 px-4 mb-2 block focus:outline-none w-full"
          {...register("title", { required: true })}
          placeholder="Write a description"
        />
        {errors.title && (
          <span className="block text-red-500 mb-2">
            This field is required
          </span>
        )}
        <textarea
          className="bg-gray-800 py-3 px-4 mb-2 block focus:outline-none w-full"
          {...register("description", { required: true })}
          placeholder="Enter your task"
        />
        {errors.description && (
          <span className="block text-red-500 mb-2">
            This field is required
          </span>
        )}
        <button className="bg-green-500 hover:bg-green-600 active:translate-y-1 rounded-sm px-4 py-2 disabled:opacity-50">
          Save ✔️
        </button>
      </form>
    </div>
  );
}

export default Page;
