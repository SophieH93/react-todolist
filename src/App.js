import "./App.css";
import Header from "./components/Header";
import styled from "styled-components";
import TodoList from "./components/TodoList";
import Sidebar from "./components/Sidebar";
import React, { useState } from "react";

function App() {
  const [sideBarToggle, setSideBarToggle] = useState(true);

  const todoList = [
    {
      name: "Personal",
      color: "#FD76A1",
      icon: "fas fa-user",
    },
    { name: "Work", color: "#70c4be", icon: "fas fa-briefcase" },
    { name: "Studies", color: "#ad6ddf", icon: "fas fa-file-code" },
  ];

  return (
    <Wrapper>
      <Header
        sideBarToggle={sideBarToggle}
        setSideBarToggle={setSideBarToggle}
      />
      <Main>
        <Sidebar sideBarToggle={sideBarToggle} todoList={todoList} />
        <MainContent
          style={{
            width: `calc(100vw - (${sideBarToggle ? "300px" : "70px"}))`,
          }}
        >
          <TodoContent>
            <Title>Dashboard</Title>
            <Greeting>Good Morning, Sophie!</Greeting>
            {todoList.map((category) => (
              <TodoList
                key={category.name}
                name={category.name}
                color={category.color}
                icon={category.icon}
              />
            ))}
          </TodoContent>
        </MainContent>
      </Main>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  /* background-color: red; */
  background: url("https://images.unsplash.com/photo-1517167685284-96a27681ad75?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80");
  background-size: cover;
  min-height: 100vh;
  min-width: 100vw;
  color: #eee;
`;

const MainContent = styled.div`
  display: flex;
  justify-content: center;
  transition: 0.3s;
`;

const Main = styled.div`
  display: flex;
`;

const TodoContent = styled.div`
  max-width: 700px;
  width: 100%;
`;

const Title = styled.div`
  margin: 50px 0;
  font-size: 35px;
  font-weight: 700;
  color: #66acf2;
`;

const Greeting = styled.div`
  margin-bottom: 20px;
  font-size: 36px;
  font-weight: 800;
  color: #d7e7f7;
`;
