import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import TimeBlock from "../TimeBlockSection/TimeBlock/TimeBlock";
// import Todo from '../../Todo/Todo';
import CompliedTodo from "./CompliedTodo/CompliedTodo";
import Todo from "./Todo/Todo";
import TodoInput from "./Todo/TodoInput";

const TodoSection = () => {
  return (
    <div className="grid grid-cols-6 gap-4">
      <div className="col-span-6 xl:col-span-4">
        <h2 className="text-center text-3xl font-medium mb-4">Todo Task</h2>
        <Todo />

        {/* complied todo task render */}
        <h4 className="text-xl font-medium mt-10 mb-5 border-l-2 pl-4">
          Complied Todo's
        </h4>
        <CompliedTodo />

        <label
          htmlFor="todo-input-modal"
          className="absolute rounded-full bottom-5 right-5 cursor-pointer">
          <FontAwesomeIcon
            icon={faPlus}
            className="relative top-[1.5px] border-2 rounded-full border-neutral p-2 cursor-pointer text-white bg-secondary"
          />
        </label>

        <TodoInput></TodoInput>
      </div>

      <div className="col-span-0 hidden xl:block xl:col-span-2">
        <TimeBlock/>
      </div>
    </div>
  );
};

export default TodoSection;
