import React from "react";

import DonutChart from "react-donut-chart";
import {
  Chart as ChartJS,  
  registerables,
} from "chart.js";

ChartJS.register(
  ...registerables
);

const RightDiagram = () => {
  const reactDonutChartdata = [
    {
      label: "Total Clicks",
      value: 65
      
    },
    {
      label: "Sign Ups",
      value: 22
      
    },
    
    {
      label: "Total Views",
      value: 200
      
    }    
  ];
  const reactDonutChartBackgroundColor = ["#1f7bb6","#01aaaa","#fbcf71"];
  const reactDonutChartInnerRadius = 0.5;
  const reactDonutChartSelectedOffset = 0.04;
  const reactDonutChartStrokeColor = "#FFFFFF";
  const pieChart = (
    <div className="rightDiagram">
      <DonutChart
        width={350}
        color={"white"}
        strokeColor={reactDonutChartStrokeColor}
        data={reactDonutChartdata}
        colors={reactDonutChartBackgroundColor}
        innerRadius={reactDonutChartInnerRadius}
      />
       
    </div>
    
  );
  return pieChart;
};
export default RightDiagram;