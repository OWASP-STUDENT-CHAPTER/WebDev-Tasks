import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/common/Button";

function Yashvardhan() {
  const tasks = [
    {
      id: 1,
      name: "Task 1",
      url: "task1",
    },
    {
      id: 2,
      name: "Task 2",
      url: "task2",
    },
  ];
  return (
    <div className="flex flex-col text-gray-200">
      <div>
        <h1 className="text-4xl py-4 font-semibold">
          Hi 👋! I am Yashvardhan.
        </h1>
        <p className="text-base">This is just an example for you.</p>
      </div>
      <div className="my-12">
        <h2 className="text-xl font-medium">
          You can see my completed tasks here:
        </h2>
        <div className="mt-4 grid grid-cols-4 gap-8 text-black">
          {tasks.map((task) => {
            return (
              <Link to={task.url} className="w-full text-lg">
                <Button key={task.id}>{task.name}</Button>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Yashvardhan;
