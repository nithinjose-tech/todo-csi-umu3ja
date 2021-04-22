import React, { useState } from "react";

export default props => {
  const [isDone, setIsDone] = useState(false);

  return (
    <>
      {isDone ? (
        <>
          <strike>{props.todo}</strike>
          <button
            onClick={() => {
              setIsDone(false);
            }}
          >
            Mark as Undone
          </button>
        </>
      ) : (
        <>
          {props.todo}
          <button
            onClick={() => {
              setIsDone(true);
            }}
          >
            Mark as Done
          </button>
        </>
      )}
    </>
  );
};
