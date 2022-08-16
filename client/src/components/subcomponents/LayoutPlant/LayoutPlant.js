import React from "react";
import styled from "styled-components";

import Machine from "../Machine/Machine";

const LayoutPlant = (props) => {
  const { bgColor, quantity, setIsClicked, setMachineName } = props;

  const MachineList = (props) => {
    const { quantityMachine} = props;

    const machineArr = [];
    for (let i = 1; i <= quantityMachine; i++) {
      machineArr.push(`MACHINE ${i}`)
  }

    return (
      <MachineUl>
        {machineArr.map((message) => <Machine key={message} message={message} setIsClicked={setIsClicked} setMachineName={setMachineName} />)}
      </MachineUl>
    );
  }

  return (
    <Container>
      <Content color={bgColor}>
        <MachineList quantityMachine={quantity}></MachineList>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  background-color: ${(props) => props.color};
  border: 3px solid #e9eaed;
  width: 1500px;
  height: auto;
  margin: 20px;
`;

const MachineUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
`;

export default LayoutPlant;
