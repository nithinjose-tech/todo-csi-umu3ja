import React, { useState } from "react";

export default props => {
  const [input, setInput] = useState("");

  return (
    <div>
      <input
        type="text"
        onChange={e => {
          setInput(e.target.value);
        }}
      />
      <button
        onClick={() => {
          props.addTodoCallback(input);
        }}
      >
        Add Todo
      </button>
    </div>
  );
};
