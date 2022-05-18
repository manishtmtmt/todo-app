import React, { useState } from "react";
import styles from "./todo.module.css";
import { TodoItem } from "./TodoItem";

const Todo = () => {
  let [newTodo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const onDelete = (id) => {
    let newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <div>
      Todo{" "}
      <input
        value={newTodo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setTodos([
            ...todos,
            { id: Date.now(), value: newTodo, isCompleted: false },
          ]);
          setTodo("");
        }}
      >
        Add
      </button>
      <div>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
};

export { Todo };
