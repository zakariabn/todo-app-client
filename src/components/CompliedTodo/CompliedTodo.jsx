import React from "react";
import { useGetTodoComplied } from "../../hooks/useGetTodo";
import SingleTodo from "../Todo/SingleTodo";

const CompliedTodo = () => {
  const [isLoading, error, data, refetch] = useGetTodoComplied();

// query error and loading handling
  if (error) {
    console.log(error);
  }
  if (isLoading) {
    return "Loading...";
  }

  return (
    <div>
      {data?.result?.map((todo, i) => (
        <SingleTodo key={todo._id} todo={todo} refetch={refetch} />
      ))}
    </div>
  );
};

export default CompliedTodo;
