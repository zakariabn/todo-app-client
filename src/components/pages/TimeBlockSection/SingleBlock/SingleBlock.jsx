import { useSpring, animated } from "@react-spring/web";
import React from "react";

const SingleBlock = ({ time, title }) => {

  // console.log(time);
  
  const start = time[0].start[0];
  const startHour = parseInt(start.split(":")[0]);
  const startMinute = parseInt(start.split(":")[1]);
  const startAmPM = time[0].start[1];

  const end = time[0].end[0];
  const endHour = parseInt(end.split(":")[0]);
  const endMinute = parseInt(end.split(":")[1]);
  const endAmPM = time[0].end[1];

  let lowersSpan = 4;

  function removeZero(str) {
    if (str.toString().charAt(0) === "0") {
      return str.split("").filter((m) => m !== "0")[0];
    } else {
      return str;
    }
  }

  function getStartTimeBlock(startHour) {
    let startGrid = removeZero(startHour);

    if (startAmPM === "pm") {
      return parseInt(startGrid) + 12;
      
    }

    return startGrid;
  }

  function getPositionBlock(minute) {
    const timeStamp = {
      first: 3,
      firstHalf: 2,
      secondHalf: 1,
      last: 0,
    };

    if (minute < 15) {
      return timeStamp.first;
    } else if (minute < 30) {
      return timeStamp.firstHalf;
    } else if (minute < 45) {
      return timeStamp.secondHalf;
    } else if (minute >= 45) {
      return timeStamp.last;
    }
  }

  function getEndTimeBlock() {
    let start = removeZero(startHour);
    let end = removeZero(endHour);

    if (startAmPM === "pm") {
      start = parseInt(start) + 12;
      
    }
    if (endAmPM === "pm") {
      end =  parseInt(end) + 12;
      
    }
    
    
    return end - start;
  }

  function getEndPositionBlock(minute) {
    const timeStamp = {
      first: 1,
      firstHalf: 2,
      secondHalf: 3,
      last: 4,
    };

    if (minute < 15) {
      return timeStamp.first;
    } else if (minute < 30) {
      return timeStamp.firstHalf;
    } else if (minute < 45) {
      return timeStamp.secondHalf;
    } else if (minute >= 45) {
      return timeStamp.last;
    }
  }

  const props = useSpring({
    to: { opacity: 1, transform: "translateX(0px)" },
    from: { opacity: 0, transform: "translateX(50px)" },
  });

  return (
    <span
      style={{
        gridRowStart: `${
          lowersSpan * getStartTimeBlock(startHour) -
          getPositionBlock(startMinute)
        }`,
        gridRowEnd: `span ${
          getEndTimeBlock() * 4 + getEndPositionBlock(endMinute)
        }`,
      }}>
      <animated.div style={props}>
        <div className="flex flex-col items-center">
          <p>{title}</p>
          <p className="block">
            <span>{time[0].start}</span> - <span>{time[0].end}</span>
          </p>
        </div>
      </animated.div>
    </span>
  );
};

export default SingleBlock;
