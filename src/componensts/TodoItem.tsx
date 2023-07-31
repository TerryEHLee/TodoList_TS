import React from "react";
import Button, { StyleType } from "./Button";

interface Todo {
  title: string;
  body: string;
}

interface TodoItemProps {
  todo: Todo;
  onDelete: (todo: Todo) => void;
}

function TodoItem({ todo, onDelete }: TodoItemProps) {
  const handleDeleteClick = () => {
    onDelete(todo);
  };

  return (
    <div>
      <h3>{todo.title}</h3>
      <p>{todo.body}</p>
      <Button
        type='button'
        styleType={StyleType.FORM_DELETE}
        onClick={handleDeleteClick}
      >
        Delete
      </Button>
    </div>
  );
}

export default TodoItem;
