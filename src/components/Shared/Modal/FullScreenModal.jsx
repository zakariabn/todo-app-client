import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const FullScreenModal = ({ children }) => {
  return (
    <>
      <input type="checkbox" id="todo-input-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label htmlFor="todo-input-modal">
            <FontAwesomeIcon
              icon={faX}
              className="absolute top-2 right-2 z-50 cursor-pointer"
            />
          </label>
          {children}
        </div>
      </div>
    </>
  );
};

export default FullScreenModal;
