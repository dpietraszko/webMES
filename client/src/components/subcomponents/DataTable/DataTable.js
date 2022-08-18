import React from "react";
import styled from "styled-components";
import Table from 'react-bootstrap/Table';

const DataTable = (props) => {

  return (
    <Content>
      <Table responsive striped bordered hover variant="dark"
      style={{fontSize: "18px"}}
      >
        <thead>
          <tr>
            <th></th>
            {Array.from({ length: 8 }).map((_, index) => (
              <th key={index}>Table heading</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            {Array.from({ length: 8 }).map((_, index) => (
              <td key={index}>Data {index}</td>
            ))}
          </tr>
          <tr>
            <td>2</td>
            {Array.from({ length: 8 }).map((_, index) => (
              <td key={index}>Data {index}</td>
            ))}
          </tr>
          <tr>
            <td>3</td>
            {Array.from({ length: 8 }).map((_, index) => (
              <td key={index}>Data {index}</td>
            ))}
          </tr>
          <tr>
            <td>4</td>
            {Array.from({ length: 8 }).map((_, index) => (
              <td key={index}>Data {index}</td>
            ))}
          </tr>
          <tr>
            <td>5</td>
            {Array.from({ length: 8 }).map((_, index) => (
              <td key={index}>Data {index}</td>
            ))}
          </tr>
          <tr>
            <td>6</td>
            {Array.from({ length: 8 }).map((_, index) => (
              <td key={index}>Data {index}</td>
            ))}
          </tr>
        </tbody>
      </Table>
    </Content>
  );
}

const Content = styled.div`
  width: 800px;
`;

export default DataTable;