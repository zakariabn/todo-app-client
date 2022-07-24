import React from "react";
import { format, parseISO } from "date-fns";
import { useGetTodoActive } from "../../../../hooks/useGetTodo";
import useDeleteSingleTodo from "../../../../hooks/useDeleteSingleTodo";
import { useSpring, animated } from "@react-spring/web";
import axiosPrivet from "../../../../api/AxiosPrivet";
// import axiosPrivet from "../../../api/AxiosPrivet";
// import { useGetTodoActive } from "../../hooks/useGetTodo";
// import useDeleteSingleTodo from "../../hooks/useDeleteSingleTodo";

const CompliedSingleTodo = ({
  todo,
  selectedTodo,
  refetch,
  refetchComplied,
}) => {
  const { _id, date, description, title } = todo;
  const [isLoadingActive, errorActive, dataActive, refetchActive] =
    useGetTodoActive();
  const handelDelete = useDeleteSingleTodo();

  const props = useSpring({
    to: { opacity: 1, transform: "translateY(0px)" },
    from: { opacity: 0, transform: "translateY(-15px)" },
  });

  const formattedDate = (d) => {
    let fDate = format(parseISO(d), "PPp").split(",");
    fDate.splice(1, 1);
    return fDate.join(",");
  };

  function handelOnChange(e) {
    //
    if (e.target.checked) {
      selectedTodo(_id, true);
    } else {
      selectedTodo(_id, false);
    }
  }

  function handelTaskCompiled(id, isChecked) {
    // demo req url http://localhost:5000/todo/62d2e11892627d07ee210755?status=complied
    axiosPrivet.put(`/todo/${id}?status=active`).then((res) => {
     
      refetch();
      refetchActive();
    });
  }

  function handelTaskOnChange(e) {
    //
    if (e.target.checked) {
      handelTaskCompiled(_id, true);
    } else {
      handelTaskCompiled(_id, false);
    }
  }

  return (
    <animated.div style={props}>
      <div className="flex justify-start w-full bg-primary px-2 mb-1 rounded-lg border-red-500">
        <input
          type="checkbox"
          title="Select for delete"
          name=""
          id=""
          className={`mr-1 opacity-20 w-[13px] rounded-[500rem] checked:opacity-100 hover:opacity-100 transition`}
          onChange={handelOnChange}
        />
        <div className=" w-full flex justify-between items-center gap-4 bg-primary p-2 rounded-lg">
          <div className="flex items-center">
            <input
              type="checkbox"
              checked="checked"
              className="checkbox mr-4"
              onChange={handelTaskOnChange}
            />
            <span className="inline-flex flex-col items-center">
              <p>{title}</p>
              <small>{formattedDate(date)}</small>
            </span>
          </div>

          <div className="flex gap-4">
            <button className="btn btn-sm" onClick={() => handelDelete(_id)}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </animated.div>
  );
};

export default CompliedSingleTodo;
