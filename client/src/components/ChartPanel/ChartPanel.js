import React, { useState } from "react";
import styled from "styled-components";
import BarChart from "./subcomponents/BarChart/BarChart";
import LineChart from "./subcomponents/LineChart/LineChart";
// import PieChart from "./subcomponents/PieChart/PieChart";
import DoughnutChart from "./subcomponents/DoughnutChart/DoughnutChart";
import { UserData } from "./ChartData";

const ChartPanel = (props) => {
  const { machineName } = props;

  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: `${machineName} Work`,
        data: UserData.map((data) => data.machineGain),
        backgroundColor: [
          "#778899",
          "#696969",
          "#2F4F4F",
          "#C0C0C0",
          "#708090",
          "#A9A9A9",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  // Dane dla wykresu DoughnutChart
  const defensiveData = [30, 20, 15];
  const defensiveLabels = ["Machine Gain", "Machine Losses", "Machine Breakdowns"];
  const defensiveColors = ["#1d4671", "#2d84c2", "#99c95b", "#eaebeb"];

  return (
    <Container>
      <Row>
        <BarChart chartData={userData} />
      </Row>
      <Row>
        <LineChart chartData={userData} />
      </Row> 
      {/* <Row>
        <PieChart chartData={userData} />
      </Row> */}
      <Row>
        <DoughnutChart chartData={defensiveData} chartLabels={defensiveLabels} chartColors={defensiveColors} chartStart={-25} />
      </Row>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
`;

const Row = styled.div`
  width: 500px;
  margin: 10px;
`;

export default ChartPanel;
