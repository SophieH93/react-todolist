import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Todoitem = ({ todo, color, baseUrl, name, getTodos }) => {
  const [editedTodo, setEditedTodo] = useState(todo.fields.Title);

  useEffect(() => {
    setEditedTodo(todo.fields.Title);
  }, [todo]);

  const deleteTask = async () => {
    try {
      await fetch(`${baseUrl}/${todo.id}`, {
        method: "delete",
        headers: {
          Authorization: "Bearer keyE6a6UUalJNNNBb",
        },
      });
      getTodos();
    } catch (error) {
      console.log(error);
    }
  };

  const saveTodo = async () => {
    try {
      await fetch(`${baseUrl}/${todo.id}`, {
        method: "put",
        headers: {
          Authorization: "Bearer keyE6a6UUalJNNNBb",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fields: {
            Title: editedTodo,
            completed: todo.fields.completed,
          },
        }),
      });
      getTodos();
    } catch (error) {
      console.log(error);
    }
  };

  const completeTodo = async () => {
    try {
      await fetch(`${baseUrl}/${todo.id}`, {
        method: "put",
        headers: {
          Authorization: "Bearer keyE6a6UUalJNNNBb",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fields: {
            Title: todo.fields.Title,
            Completed: !todo.fields.Completed,
          },
        }),
      });
      getTodos();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TodoListItem>
      <Checkbox
        className={
          todo.fields.Completed ? "fas fa-check-circle" : "far fa-circle"
        }
        onClick={completeTodo}
        style={{ color: color }}
      />
      <input
        style={{
          textDecoration: todo.fields.Completed ? "line-through" : "none",
        }}
        value={editedTodo}
        onChange={(e) => setEditedTodo(e.target.value)}
      />
      {todo.fields.Title !== editedTodo && (
        <SaveTodo className="fas fa-check" onClick={saveTodo} />
      )}
      <DeleteTodo className="fas fa-trash-alt" onClick={deleteTask} />
    </TodoListItem>
  );
};

export default Todoitem;

const TodoListItem = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  padding: 15px 20px;
  transition: 0.3s;

  input {
    flex: 1;
    font-size: 22px;
    outline: none;
    background: none;
    border: none;
    color: #eee;
  }
`;

const Checkbox = styled.i`
  font-size: 20px;
  margin-right: 10px;
  cursor: pointer;
`;

const DeleteTodo = styled.i`
  color: #ff1605;
  padding: 10px 16px;
  margin-left: 14px;
  border-radius: 4px;
  margin-right: -12px;

  &:hover {
    background-color: #7e2601;
    transition: 0.3s;
    cursor: pointer;
  }
`;

const SaveTodo = styled.i`
  padding: 10px 16px;
  border-radius: 4px;
  margin-right: -12px;
  color: green;

  &:hover {
    background-color: #2b6127;
    transition: 0.3s;
    cursor: pointer;
  }
`;
