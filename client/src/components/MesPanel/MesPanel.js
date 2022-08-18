import React, { useState } from "react";
import styled from "styled-components";

import MachinePanel from "../MachinePanel/MachinePanel";
import Menu from "../subcomponents/Menu/Menu";
import LayoutPlant from "../subcomponents/LayoutPlant/LayoutPlant";

const MesPanel = (props) => {
  const { setIsLoggedIn, setIsLoggedInName } = props;

  const arrMachineQuantity = [4, 13, 20, 10]; // Ilość maszyn odpowiednio dla zakładu

  const [activeMenu, setActiveMenu] = useState("zabrze");
  const [isClick, setIsClicked] = useState(false);
  const [machineName, setMachineName] = useState("");


  const isSelect = (selectedKey) => {
    setActiveMenu(selectedKey)
  }

  const Layout = () => {
    switch(activeMenu) {
      case 'zabrze':
        return <LayoutPlant bgColor={"#FFFFFF"} quantity={arrMachineQuantity[0]} setIsClicked={setIsClicked} setMachineName={setMachineName}></LayoutPlant>
      case 'zory':
        return <LayoutPlant bgColor={"#FFFFFF"} quantity={arrMachineQuantity[1]} setIsClicked={setIsClicked} setMachineName={setMachineName}></LayoutPlant>
      case 'gliwice 1':
        return <LayoutPlant bgColor={"#FFFFFF"} quantity={arrMachineQuantity[2]} setIsClicked={setIsClicked} setMachineName={setMachineName}></LayoutPlant>
      case 'gliwice 2':
        return <LayoutPlant bgColor={"#FFFFFF"} quantity={arrMachineQuantity[3]} setIsClicked={setIsClicked} setMachineName={setMachineName}></LayoutPlant>
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
        <Menu menuSelect = {isSelect} menuSelected = {activeMenu} machinePanelSelected={isClick}></Menu>
        <HeaderMenu>{activeMenu.toUpperCase()}</HeaderMenu>
        {isClick ? (
          <MachinePanel setIsClicked={setIsClicked} machineName={machineName}></MachinePanel>
        ) : (
          <Layout></Layout> 
        )}
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

const HeaderMenu = styled.strong`
  font-family: Impact, fantasy;
  font-size: 36px;
  font-weight: bold;
  color: #330000;
  letter-spacing: 1px;
  padding: 10px;
  margin: 20px 10px;

`;

export default MesPanel;
