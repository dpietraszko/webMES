import React from "react";
import styled from "styled-components";

import MachineCharts from "../subcomponents/MachineCharts/MachineCharts";

const MachinePanel = (props) => {
  const { setIsClicked, machineName } = props;

  return (
    <Container>
      <Content>
        <ContentHeader>
          <Header>{machineName}</Header>
          <ReturnButton onClick={(e) => setIsClicked(false)}>Return</ReturnButton>
        </ContentHeader>
        <MachineCharts machineName={machineName}></MachineCharts>
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
  /* border: 3px solid #e9eaed; */
  width: 1600px;
  font-size: 38px;
`;

const ContentHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Header = styled.div`
  color: #330000;
  font-weight: bold;
  font-size: 21px;
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

const ReturnButton = styled.button`
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

export default MachinePanel;
