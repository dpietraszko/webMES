import React from "react";
import styled from "styled-components";

const LayoutPlant = (props) => {
  const { valueColor } = props;

  return (
    <Container>
      <Content color={valueColor}>
  
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
  background-color: ${(props) => props.color};
  border: 3px solid #e9eaed;
  width: 200px;
  height: 100px;
`;

export default LayoutPlant;
