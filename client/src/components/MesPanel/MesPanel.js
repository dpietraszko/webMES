import React, { useState } from "react";
import styled from "styled-components";

import Menu from "../subcomponents/Menu/Menu";
import LayoutPlant from "../subcomponents/LayoutPlant/LayoutPlant";

const MesPanel = (props) => {
  const { setIsLoggedIn, setIsLoggedInName } = props;

  const [activeMenu, setActiveMenu] = useState("");

  const isSelect = (selectedKey) => {
    setActiveMenu(selectedKey)
  }

  const Layout = props => {
    switch(activeMenu) {
      case 'zabrze':
        return <LayoutPlant valueColor={"#330000"}></LayoutPlant>
      case 'zory':
        return <LayoutPlant valueColor={"#ff3400"}></LayoutPlant>
      case 'gliwice1':
        return <LayoutPlant valueColor={"#ff22ff"}></LayoutPlant>
      case 'gliwice2':
        return <LayoutPlant valueColor={"#6969ff"}></LayoutPlant>
      default:
          console.log(`Sorry, we are out of ${activeMenu}.`);
    } 
  }

  return (
    <Container>
      <Content>
        <ContentHeader>
          <Header>{"Logged: " + setIsLoggedInName}</Header>
          <LoggedOutButton onClick={(e) => setIsLoggedIn(false)}>Log out</LoggedOutButton>
        </ContentHeader>
        <Menu menuSelect = {isSelect}></Menu>
        {<strong>{activeMenu}</strong>}
        <Layout></Layout>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #ffffff;
  border: 3px solid #e9eaed;
  width: 1600px;
`;

const Header = styled.div`
  color: #330000;
  font-weight: bold;
  font-size: 18px;
  letter-spacing: 1px;
  width: 400px;
  height: 50px;
  border-radius: 8px;
  background: linear-gradient(145deg, #ffffff, #e6e6e6);
  box-shadow: 5px 5px 6px #cccccc, -5px -5px 6px #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0 40px 20px;
  padding: 10px;
`;

const LoggedOutButton = styled.button`
  font-size: 20px;
  letter-spacing: 1px;
  color: #330000;
  font-weight: bold;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 12px;
  background: linear-gradient(145deg, #ffffff, #e6e6e6);
  box-shadow: 5px 5px 6px #cccccc, -5px -5px 6px #ffffff;
  width: 120px;
  height: 50px;
  border: none;
  margin: 10px 20px 40px 0;
  &:active {
    border-radius: 10px;
    background: #ffffff;
    box-shadow: inset 5px 5px 8px #c4c4c4, inset -5px -5px 8px #ffffff;
  }
`;

const ContentHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export default MesPanel;
