import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import TimeBlock from "../pages/TimeBlockSection/TimeBlock/TimeBlock";
import TodoSection from "../pages/TodoSection/TodoSection";

const TodoViewArea = () => {
  return (
    <div className="h-[95.6vh] grid grid-cols-7">
      <div className="col-span-2 md:col-span-2 xl:col-span-1 bg-secondary p-2">
        <Link to="/">
          <p className="bg-primary p-2 rounded mb-1">Todo</p>
        </Link>

        <Link to="/time-block">
          <p className="bg-primary p-2 rounded mb-1">Time Block</p>
        </Link>
      </div>

      <div className="col-span-5 xl:col-span-6 bg-secondary-focus p-2">
        <Routes>
          <Route path="/" element={<TodoSection />} />
          <Route path="/time-block" element={<TimeBlock />} />
        </Routes>
      </div>
    </div>
  );
};

export default TodoViewArea;
