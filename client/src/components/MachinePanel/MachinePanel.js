import React, { useState } from "react";
import styled from "styled-components";
import Button from 'react-bootstrap/Button';

import MachineCharts from "../subcomponents/MachineCharts/MachineCharts";
import DataTable from "../subcomponents/DataTable/DataTable";

const MachinePanel = (props) => {
  const { setIsClicked, machineName } = props;

  const [isClickButtonTableCharts, setIsClickedButtonTableCharts] = useState(false);

  return (
    <Container>
      <Content>
        <ContentHeader>
          <Header>{machineName}</Header>
          <Button 
            variant="outline-dark" 
            size="lg" 
            style={{ width: "120px", height: "50px", fontSize: "20px", fontWeight: "bold",  margin: "10px 20px 40px 0" }} 
            onClick={(e) => {
              isClickButtonTableCharts ? setIsClickedButtonTableCharts(false) : setIsClickedButtonTableCharts(true)
            }}>
              {isClickButtonTableCharts ? "Charts" : "Table"}
            </Button>
            <Button 
            variant="outline-dark" 
            size="lg" 
            style={{ width: "120px", height: "50px", fontSize: "20px", fontWeight: "bold",  margin: "10px 20px 40px 0" }} 
            onClick={(e) => setIsClicked(false)}>
              Return
            </Button>
        </ContentHeader>
        {isClickButtonTableCharts ? <MachineCharts machineName={machineName}></MachineCharts> : <DataTable></DataTable>}
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
  font-size: 38px;
`;

const ContentHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Header = styled.div`
  color: #000000;
  font-weight: bold;
  font-size: 21px;
  letter-spacing: 1px;
  width: 180px;
  height: 50px;
  border: 1px solid #000000;
  border-radius: 5px;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0 40px 20px;
  padding: 10px;
`;

export default MachinePanel;
