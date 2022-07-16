import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import CompliedTodo from "../CompliedTodo/CompliedTodo";
import Todo from "../Todo/Todo";

const TodoViewArea = () => {
  return (
    <div className="h-[95.6vh] grid grid-cols-7">
      <div className="col-span-2 bg-secondary p-2">
        <p>Sidebar</p>
      </div>
      <div className="col-span-5 bg-secondary-focus p-2">
        <h2 className="text-center text-3xl font-medium mb-4">Todo Task</h2>
        <Todo />

        {/* complied todo task render */}
        <h4 className="text-xl font-medium mt-10 border-l-2 pl-4">Complied Todo's</h4>
        <CompliedTodo/>

        <span className="absolute bottom-5 right-5">
          <FontAwesomeIcon
            icon={faPlus}
            className="border-2 rounded-full border-neutral p-2 cursor-pointer text-white bg-secondary"
          />
        </span>
      </div>
    </div>
  );
};

export default TodoViewArea;
