import React from "react";
import "./TimeBlock.css";

const TimeBlock = () => {
  const lowersSpan = 4;

  const timeStamp = {
    first: 3,
    firstHalf: 2,
    secondHalf: 1,
    last: 0,
  };

  return (
    <div className="time-block-container">
      <div className="time-box">
        <span>01</span>
        <span>02</span>
        <span>03</span>
        <span>04</span>
        <span>05</span>
        <span>06</span>
        <span>07</span>
        <span>08</span>
        <span>09</span>
        <span>10</span>
        <span>11</span>
        <span>12</span>
        <span>01-a</span>
        <span>02-a</span>
        <span>03-a</span>
        <span>04-a</span>
        <span>05-a</span>
        <span>06-a</span>
        <span>07-a</span>
        <span>08-a</span>
        <span>09-a</span>
        <span>10-a</span>
        <span>11-a</span>
        <span>12-a</span>

        <div className="time-block">
          <span
            style={{
              gridRowStart: `${lowersSpan * 1 - timeStamp.secondHalf}`,
              gridRowEnd: `span ${2}`,
            }}>
            faefae
          </span>

          <span
            style={{
              gridRowStart: `${lowersSpan * 9 - timeStamp.last}`,
              gridRowEnd: `span ${lowersSpan - 1}`,
            }}>
            faefae
          </span>
        </div>
      </div>
    </div>
  );
};

export default TimeBlock;
