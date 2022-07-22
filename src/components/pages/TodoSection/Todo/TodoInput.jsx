import React, { forwardRef, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { formatISO9075 } from "date-fns";
import { useGetTodoActive } from "../../../../hooks/useGetTodo";
import axiosPrivet from "../../../../api/AxiosPrivet";
import AmPm from "../../../Shared/AmPm/AmPm";
import FullScreenModal from "../../../Shared/Modal/FullScreenModal";


const TodoInput = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [isLoadingActive, errorActive, dataActive, refetchActive] =
    useGetTodoActive();

  const [amPmStart, setAmPmStart] = useState("am");
  const [amPmEnd, setAmPmEnd] = useState("am");

  const [time, setTime] = useState({
    start: {
      t: "",
      amPm: ""
    },
    end: {
      t: "",
      amPm: ""
    },
  });

  useEffect(() => {
    console.log(time);
  }, [time]);

  function handelNewTodo(e) {
    e.preventDefault();

    const todo = {
      title: e.target.title.value,
      description: e.target.description.value,
      status: "active",
      date: formatISO9075(startDate, { representation: "date" }),
      time: [{
        start: [time.start.t, time.start.amPm],
        end : [time.end.t, time.end.amPm]
      }],
    };

    if (todo.title && todo.description) {
      axiosPrivet.post("/todo", todo).then((res) => {
        refetchActive();
        document.getElementById("todo-input-form").reset();
      });
    }
  }

  const formatValidation = /^(1[0-2]|0?[1-9]){1}:([0-5][0-9]){1}$/;
  function handelStartTime(e) {
    if (
      !(e.key === "Backspace" || e.key === "Delete") &&
      e.target.value.length === 2
    ) {
      e.target.value = "" + e.target.value + ":";
    } else if (
      e.target.value.length === 5 &&
      !(e.key === "Backspace" || e.key === "Delete")
    ) {
      document.getElementById("time-end-input").focus();
      e.preventDefault();
    }
    console.log(e.target.value);

    if (formatValidation.test(e.target.value)) {
      setTime({...time, start: {t: e.target.value, amPm: amPmStart}});
    }
  }

  function handelEndTime(e) {
    if (
      e.target.value.length === 0 &&
      (e.key === "Backspace" || e.key === "Delete")
    ) {
      document.getElementById("time-start-input").focus();
      e.preventDefault();
    }

    if (
      !(e.key === "Backspace" || e.key === "Delete") &&
      e.target.value.length === 2
    ) {
      e.target.value = "" + e.target.value + ":";
    } else if (
      e.target.value.length >= 5 &&
      !(e.key === "Backspace" || e.key === "Delete")
    ) {
      e.target.blur();
    }

    if (formatValidation.test(e.target.value)) {
      setTime({...time, end: {t: e.target.value, amPm: amPmEnd}});
      
    }
  }

  return (
    <FullScreenModal>
      <form
      id="todo-input-form"
        onSubmit={handelNewTodo}
        className="flex flex-col gap-3 items-center justify-center">
        <input
          type="text"
          name="title"
          placeholder="Task title"
          className=" w-11/12 input input-sm input-bordered"
        />
        <input
          type="text"
          name="description"
          placeholder="Task note"
          className="w-11/12 input input-md input-bordered "
        />

        <div className="flex items-end gap-x-2">
          <div className="form-control w-11/12">
            <label className="label">
              <span className="label-text font-medium">Date</span>
            </label>

            <DatePicker
              className="border-green-500"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              customInput={<CustomInput />}
            />
          </div>

          {/* start time */}
          <div className="form-control w-11/12">
            <label className="label">
              <span className="label-text font-medium mr-1">Start Time</span>

              {/* am pm button */}
              <AmPm amPm={amPmStart} setAmPm={setAmPmStart}></AmPm>
            </label>
            <input
              type="text"
              id="time-start-input"
              placeholder="10:00"
              className="input input-sm w-full input-bordered"
              onKeyUp={handelStartTime}
            />
          </div>

          {/* End time */}
          <div className="form-control w-11/12">
            <label className="label ">
              <span className="label-text font-medium mr-1">End Time</span>

              {/* am pm button */}
              <AmPm amPm={amPmEnd} setAmPm={setAmPmEnd}></AmPm>
            </label>
            <input
              type="text"
              id="time-end-input"
              name="time_end"
              placeholder="10:00"
              className="input input-sm w-full input-bordered "
              onKeyUp={handelEndTime}
              onBlur={handelEndTime}
            />
          </div>
        </div>
        <button type="submit">
          <label htmlFor="todo-input-modal" className="btn btn-sm mt-5">
            Add task
          </label>
        </button>
      </form>
    </FullScreenModal>
  );
};

export default TodoInput;

const CustomInput = forwardRef(({ value, onClick }, ref) => {
  const [updatedValue, setUpdatedValue] = useState(value);

  return (
    <span className="example-custom-input">
      <input
        type="text"
        placeholder="Time"
        ref={ref}
        onClick={onClick}
        value={value}
        readOnly
        className="w-11/12 pl-2 input input-sm input-bordered"
      />
    </span>
  );
});

/* 
{
  "_id": "62d99a871da19584786fb019",
  "title": "I have to complite this todo ui 2",
  "description": "priority top",
  "status": "active",
  "date": "2022-07-22",
  "time": [
      {
          "start": [
              "12:00",
              "am"
          ],
          "end": [
              "12:00",
              "am"
          ]
      }
  ],
  "entryTime": "2022-07-21T18:25:40.604Z",
  "__v": 0
}
*/
