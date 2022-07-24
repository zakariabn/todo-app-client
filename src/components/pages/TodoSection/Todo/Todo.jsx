import React, { useState } from "react";
import { useGetTodoActive, useGetTodoComplied } from "../../../../hooks/useGetTodo";
import SingleTodo from "./SingleTodo";

const Todo = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [selectedIds, setSelectedIds] = useState([]);
  const [isLoading, error, data, refetch] = useGetTodoActive();
  const [isLoadingComplied, errorComplied, dataComplied, refetchComplied] = useGetTodoComplied();


  console.log("Data", data);

  // query error and loading handling
  if (error) {
    console.log(error);
  }
  if (isLoading) {
    return "Loading...";
  }

  function selectedTodo(id, isChecked) {
    if (isChecked) {
      setSelectedIds([...selectedIds, id]);
    } else {
      const newTodoIds = selectedIds.filter((mId) => mId !== id);
      setSelectedIds([...newTodoIds]);
    }
  }

  return (
    <div className="relative">
      {data?.result.length <= 0
        ? <p className="text-center">Task not found</p>
        : data?.result?.map((todo, i) => (
            <SingleTodo
              key={todo._id}
              todo={todo}
              selectedTodo={selectedTodo}
              refetch={refetch}
              refetchComplied = {refetchComplied}
            />
          ))}
    </div>
  );
};
/* 
<DatePicker
        // selected={startDate}
        onChange={(date) => setStartDate(date)}
      /> */
export default Todo;
