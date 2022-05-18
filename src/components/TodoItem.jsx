import React, { useState } from "react";
import styles from "./todo.module.css";

const TodoItem = ({ todo, onDelete }) => {
  const [isCompleted, setIsCompleted] = useState(todo.isCompleted);
  return (
    <div className={styles.todo} key={todo.id}>
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={(e) => setIsCompleted(e.target.checked)}
      />
      <div>{todo.value}</div>
      <button onClick={()=>onDelete(todo.id)}>Remove</button>
    </div>
  );
};

export { TodoItem };
