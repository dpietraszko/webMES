import React from "react";
import styled from "styled-components";

const Machine = (props) => {
  const { message, setIsClicked, setMachineName } = props;


  return <MachineLi onClick={(e) => {
    setMachineName(e.target.innerText)
    setIsClicked(true)
  }}>{message}</MachineLi>;
}

const MachineLi = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #808080;
  width: 220px;
  height: 220px;
  margin: 10px;
  cursor: pointer;
  border: 3px solid #000000;
  border-radius: 5px;
  font-size: 24px;
`;

export default Machine;
