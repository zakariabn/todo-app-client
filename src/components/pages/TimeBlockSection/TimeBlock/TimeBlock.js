import React from "react";
import { useGetTodoActive } from "../../../../hooks/useGetTodo";
import SingleBlock from "../SingleBlock/SingleBlock";
import "./TimeBlock.css";

const TimeBlock = () => {
  const [isLoading, error, data, refetch] = useGetTodoActive();


  return (
    <div className="time-block-container">
      <div className="time-box">
        <>
          <span>
            01 <small className="font-bold text-xs">AM</small>
          </span>
          <span>
            02 <small className="font-bold text-xs">AM</small>
          </span>
          <span>
            03 <small className="font-bold text-xs">AM</small>
          </span>
          <span>
            04 <small className="font-bold text-xs">AM</small>
          </span>
          <span>
            05 <small className="font-bold text-xs">AM</small>
          </span>
          <span>
            06 <small className="font-bold text-xs">AM</small>
          </span>
          <span>
            07 <small className="font-bold text-xs">AM</small>
          </span>
          <span>
            08 <small className="font-bold text-xs">AM</small>
          </span>
          <span>
            09 <small className="font-bold text-xs">AM</small>
          </span>
          <span>
            10 <small className="font-bold text-xs">AM</small>
          </span>
          <span>
            11 <small className="font-bold text-xs">AM</small>
          </span>
          <span>
            12 <small className="font-bold text-xs">AM</small>
          </span>
          <span>
            01 <small className="font-bold text-xs">PM</small>
          </span>
          <span>
            02 <small className="font-bold text-xs">PM</small>
          </span>
          <span>
            03 <small className="font-bold text-xs">PM</small>
          </span>
          <span>
            04 <small className="font-bold text-xs">PM</small>
          </span>
          <span>
            05 <small className="font-bold text-xs">PM</small>
          </span>
          <span>
            06 <small className="font-bold text-xs">PM</small>
          </span>
          <span>
            07 <small className="font-bold text-xs">PM</small>
          </span>
          <span>
            08 <small className="font-bold text-xs">PM</small>
          </span>
          <span>
            09 <small className="font-bold text-xs">PM</small>
          </span>
          <span>
            10 <small className="font-bold text-xs">PM</small>
          </span>
          <span>
            11 <small className="font-bold text-xs">PM</small>
          </span>
          <span>
            12 <small className="font-bold text-xs">PM</small>
          </span>
        </>

        <div className="time-block">
          {data?.result?.map((td) => (
            <SingleBlock key={td._id} time={td.time} title={td.title} status={td.status} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimeBlock;
