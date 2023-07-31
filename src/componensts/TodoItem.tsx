import React from "react";

interface Todo {
  title: string;
  body: string;
}

function TodoItem({ title, body }: Todo) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
}

export default TodoItem;
