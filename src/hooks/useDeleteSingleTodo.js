import axiosPrivet from "../api/AxiosPrivet";
import { useGetTodoActive, useGetTodoComplied } from "./useGetTodo";

const useDeleteSingleTodo = () => {
  const [isLoadingActive, errorActive, dataActive, refetchActive] =
    useGetTodoActive();
  const [isLoadingComplied, errorComplied, dataComplied, refetchComplied] =
    useGetTodoComplied();
  
  if (isLoadingActive || isLoadingComplied) {
    return <p>loading...</p>
  }

  function handelDelete(id) {
    axiosPrivet.delete(`/todo/${id}`).then((res) => console.log(res.message));
    refetchActive();
    refetchComplied();
  }
  return handelDelete;
};

export default useDeleteSingleTodo;
