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
  background-color: #FF5599;
  width: 200px;
  height: 200px;
  margin: 10px;
  cursor: pointer;
`;

export default Machine;
