import React from "react";
import styled from "styled-components";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const DoughnutChart = (props) => {
  const { chartData, chartLabels, chartColors, chartStart } = props;

  const total = chartData.reduce((total, num) => total + num);

  let data = chartData;

  //Adding empty sector
  data.push(100 - total);

  const CHART_DATA = {
    datasets: [
      {
        data: data,
        backgroundColor: chartColors
      }
    ],
    labels: chartLabels
  };

  const CHART_OPTIONS = {
    cutoutPercentage: 70,
    rotation: (chartStart / 100) * 2 * Math.PI,
    tooltips: {
      enabled: false
    }
  };

  const CHART_LEGEND = {
    display: false
  };


return (
    <Content>
      {/* <Total>{total.toFixed(2)}%</Total> */}
      <Total>65.00%</Total>
      <Doughnut
        data={CHART_DATA}
        options={CHART_OPTIONS}
        legend={CHART_LEGEND}
      />
    </Content>
  );
}

const Content = styled.div`
  position: relative;
  width: 500px;
  height: 300px;
`;

const Total = styled.span`
  position: absolute;
  font-size: 26px;
  width: 100px;
  height: 25px;
  font-weight: bold;
  line-height: 1.71;
  color: #1e232b;
  top: 245px;
  left: 190px;
`;


export default DoughnutChart;
