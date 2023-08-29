import React from "react";
import './Chart.css';
import ChartBar from "./ChartBar";

const Chart = (props) => {
    const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValues);//배열안의 데이터를 totalMaximum에 뿌려줌?
  //totalMaximum : 12개의 배열을 가짐
    return (
    //내부에 영역 잡아줌
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
        key={dataPoint.label}
        value={dataPoint.value}
        maxValue={totalMaximum}//토탈맥시멈값 여기로 넘겨주기만 하면됨
          label={dataPoint.label}
        />
      ))}
      {/* //데이터를 차트 형태로 뿌려줄 거고 */}
      {/* <ChartBars />
    <ChartBars />
    <ChartBars />
    <ChartBars />
    <ChartBars />
    <ChartBars />
    <ChartBars />
    <ChartBars />
    <ChartBars />
    <ChartBars />
    <ChartBars />
    <ChartBars /> */}
    </div>
  );
};

export default Chart;
