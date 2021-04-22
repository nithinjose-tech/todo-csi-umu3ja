import React, { useState } from "react";

import TodoSingle from "../TodoSingle";

export default props => {
  return (
    <ul>
      {props.todos.map(todo => {
        return (
          <li>
            <TodoSingle todo={todo} />
          </li>
        );
      })}
    </ul>
  );
};
