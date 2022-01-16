import React from "react";
import styled from "styled-components";

const Header = ({ sideBarToggle, setSideBarToggle }) => {
  return (
    <Wrapper>
      <HeaderItem onClick={() => setSideBarToggle(!sideBarToggle)}>
        <i className="fa fa-bars" style={{ color: "#66acf2" }} />
      </HeaderItem>
      <HeaderItem>
        <i className="fa fa-border-all" style={{ color: "#66caf2" }} />
        <span> Dashboard</span>
      </HeaderItem>
      <HeaderItem>
        <i className="fa fa-images" style={{ color: "#66caf2" }} />
        <span>Collections</span>
      </HeaderItem>
      <Placeholder />
      <HeaderItem>
        <Profile>
          <img src="https://avatars.githubusercontent.com/u/27809832?v=4" alt />
        </Profile>
      </HeaderItem>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  display: flex;
  height: 70px;
  align-items: center;
  background-color: #05141a;
  padding: 0 20px;
  -webkit-box-shadow: 0px 4px 15px 0px #121212;
  box-shadow: 0px 4px 15px 0px #121212;
  position: sticky;
  top: 0;
  /* opacity: 0.6; */
`;

const HeaderItem = styled.div`
  color: #eee;
  padding: 10px 16px;
  border-radius: 4px;

  span {
    margin-left: 10px;
    font-weight: 500;
  }

  &:hover {
    background-color: #18181f;
    transition: 0.3s;
    cursor: pointer;
  }
`;

const Placeholder = styled.div`
  flex: 1;
`;
const Profile = styled.div`
  display: flex;
  align-items: center;
  img {
    height: 30px;
    border-radius: 50%;
    border: 3px solid #3cb9e6;
  }
`;
