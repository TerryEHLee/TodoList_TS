import { useState } from "react";
import TodoItem from "./TodoItem";
import InputItem from "./InputItem";
import Button, { StyleType } from "./Button";

interface Todo {
  title: string;
  body: string;
}

const Todo = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");

  const handleReset = () => {
    setTitle("");
    setBody("");
  };

  const handleFormSubmit = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const newTodo = { title, body };
    setTodoList([...todoList, newTodo]);
    handleReset();
  };

  return (
    <div>
      <header>
        <h1>todo</h1>
      </header>
      <main>
        <div>
          <InputItem
            type='title'
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            autoFocus
          />
          <InputItem
            type='context'
            value={body}
            onChange={(e) => {
              setBody(e.target.value);
            }}
          />
          <Button
            type='button'
            styleType={StyleType.FORM_ADD}
            onClick={handleFormSubmit}
          >
            add
          </Button>
        </div>
        <div>Working</div>
        <div>Done</div>
      </main>
    </div>
  );
};

export default Todo;
