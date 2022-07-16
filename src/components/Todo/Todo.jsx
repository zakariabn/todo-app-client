import React, { useState } from "react";
import { useQuery } from "react-query";
import axiosPrivet from "../../api/AxiosPrivet";
import SingleTodo from "./SingleTodo";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import addDays from "date-fns/addDays";

const Todo = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [selectedIds, setSelectedIds] = useState([]);

  const {
    isLoading,
    error,
    data: todo,
    refetch,
  } = useQuery(
    ["todo", "active"],
    async () =>
      await axiosPrivet.get("/todo?status=active").then((res) => res.data),
    {
      refetchOnWindowFocus: true,
    }
  );

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

  // console.log(todo);
  return (
    <div className="relative">
      {todo?.result?.map((todo, i) => (
        <SingleTodo key={todo._id} todo={todo} selectedTodo={selectedTodo} refetch={refetch} />
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
