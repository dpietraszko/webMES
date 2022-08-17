import React from "react";
import styled from "styled-components";

import ChartPanel from "../../ChartPanel/ChartPanel";

const MachineCharts = (props) => {
  const { machineName } = props;

  return (
    <Container>
      <Content>
        <ChartPanel machineName={machineName}></ChartPanel>
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

export default MachineCharts;
