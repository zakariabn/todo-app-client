import { format, parseISO } from "date-fns";
import React from "react";
import axiosPrivet from "../../api/AxiosPrivet";

const SingleTodo = ({ todo, selectedTodo, refetch }) => {
  const { _id, date, description, title, } = todo;

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
    axiosPrivet.put(`/todo/${id}?status=complied`).then((res) => {
      console.log(res.data);
      refetch();
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
            className="checkbox mr-4"
            onChange={handelTaskOnChange}
          />
          <span className="inline-flex flex-col items-center">
            <p>{title}</p>
            <small>{formattedDate(date)}</small>
          </span>
        </div>

        <div className="flex gap-4">
          <button className="btn btn-sm">Edit</button>
          <button className="btn btn-sm">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default SingleTodo;
