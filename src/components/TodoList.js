import React, { useState, useEffect } from "react";
import Todoitem from "./Todoitem";
import styled from "styled-components";

const TodoList = ({ name, color, icon }) => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const baseUrl = `https://api.airtable.com/v0/appgJU2WFX8KCLN27/${name}`;

  const getTodos = async () => {
    try {
      const todoData = await fetch(baseUrl, {
        method: "get",
        headers: {
          Authorization: "Bearer keyE6a6UUalJNNNBb",
        },
      });
      const todoJson = await todoData.json();
      setTodos(todoJson.records);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(todos);

  useEffect(() => {
    getTodos();
  }, [todo]);

  const addButtonHandler = async () => {
    try {
      await fetch(baseUrl, {
        method: "post",
        headers: {
          Authorization: "Bearer keyE6a6UUalJNNNBb",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          records: [
            {
              fields: {
                Title: todo,
                Completed: false,
              },
            },
          ],
        }),
      });
      setTodo("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Wrapper>
      <TodoCategoryHeader>
        <CategoryIcon style={{ background: color }}>
          <i className={icon} />
        </CategoryIcon>
        <Title>{name}</Title>
        <TodoInput value={todo} onChange={(e) => setTodo(e.target.value)} />
        <AddTodo className="fas fa-plus" onClick={addButtonHandler} />
      </TodoCategoryHeader>
      {todos.map((todo, index) => (
        <Todoitem
          key={index}
          todo={todo}
          color={color}
          baseUrl={baseUrl}
          name={name}
          getTodos={getTodos}
        />
      ))}
    </Wrapper>
  );
};

export default TodoList;

const Wrapper = styled.div`
  background-color: #234754;
  margin-bottom: 30px;
  border-radius: 20px;
  overflow: hidden;
`;

const TodoCategoryHeader = styled.div`
  background-color: #162f38;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 15px 20px;
`;

const CategoryIcon = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;

const Title = styled.div`
  flex: 1;
  font-size: 18px;
  font-weight: 600;
`;

const TodoInput = styled.input`
  height: 30px;
  font-size: 18px;
  outline: none;
  border: none;
  background-color: #1d363d;
  border-radius: 4px;
  color: #fff;
  padding: 4px 10px;
  margin-right: 4px;
`;

const AddTodo = styled.i`
  padding: 10px 16px;
  border-radius: 4px;
  margin-right: -12px;

  &:hover {
    background-color: #20212d;
    transition: 0.3s;
    cursor: pointer;
  }
`;
