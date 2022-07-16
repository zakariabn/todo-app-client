import { useQuery } from "react-query";
import axiosPrivet from "../api/AxiosPrivet";

const useGetTodoActive = () => {
  const { isLoading, error, data, refetch } = useQuery(
    ["todo-active"],
    async () =>
      await axiosPrivet.get("/todo?status=active").then((res) => res.data),
    {
      refetchOnWindowFocus: true,
    }
  );
  return [isLoading, error, data, refetch];
};

const useGetTodoComplied = () => {
  const { isLoading, error, data, refetch } = useQuery(
    ["todo-complied"],
    async () =>
      await axiosPrivet.get("/todo?status=complied").then((res) => res.data),
    {
      refetchOnWindowFocus: true,
    }
  );
  return [isLoading, error, data, refetch];
};

export { useGetTodoActive, useGetTodoComplied };
