import React, { useState } from "react";
import "./AmPm.css"

const AmPm = ({amPm, setAmPm}) => {
  // const [amPm, setAmPm] = useState("am");
  return (
    <div className="self-end flex gap-1">
      <button
        type="button"
        className={`btn btn-xs ${amPm === "am" && "btn-success"}`}
        onClick={() => setAmPm("am")}>
        AM
      </button>

      <button
        type="button"
        className={`btn btn-xs ${amPm === "pm" && "btn-success"}`}
        onClick={() => setAmPm("pm")}>
        PM
      </button>
    </div>
  );
};

export default AmPm;
