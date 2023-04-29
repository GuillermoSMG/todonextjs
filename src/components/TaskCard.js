import { useTasks } from "@/context/TaskContext";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

function TaskCard({ task }) {
  const router = useRouter();

  const { deleteTask } = useTasks();
  return (
    <div
      className="bg-gray-700 hover:bg-gray-600 hover:scale-105 cursor-pointer px-20 py-5 m-2 active:translate-y-1"
      onClick={() => router.push(`/edit/${task.id}`)}
    >
      <div className="flex justify-between">
        <h2>{task.title}</h2>
        <button
          className="bg-red-700 hover:bg-red-600 px-3 py-1 inline-flex items-center active:translate-y-1"
          onClick={(e) => {
            e.stopPropagation();
            deleteTask(task.id);
            toast.success("Task deleted!");
          }}
        >
          Delete
        </button>
      </div>
      <p className="text-gray-300">{task.description}</p>
      <span className="text-gray-400 text-xs">ID:{task.id}</span>
    </div>
  );
}

export default TaskCard;
