import React from "react";

const TriggerButton = ({ triggerText, buttonRef, showModal }) => {
  return (
    <button
      className="btn btn-dark"
      style={{ marginBottom: "5px" }}
      ref={buttonRef}
      onClick={showModal}
    >
      {triggerText}
    </button>
  );
};
export default TriggerButton;
