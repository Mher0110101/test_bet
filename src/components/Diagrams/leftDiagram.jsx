import "./diagrams.css"
import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,  
  registerables,
} from "chart.js";

ChartJS.register(
  ...registerables
);
 
function LeftDiagram() {
  const [chartData, setChartData] = useState({
    datasets: [],
   
  });
 
  const [chartOptions, setChartOptions] = useState({});
 
  useEffect(() => {
    setChartData({
      labels: ["", "", "", "", "","","",""],
      datasets: [
        {
          label: "Clicks",
          data: [18, 58, 19, -38, -30,30,55],
          borderColor: "#eac16b",
          backgroundColor: "#eac16b",
        },
        {
          label: "Page view",
          data: [-38, 28, 58, 18, -31,19],
          borderColor: "#1f7bb6",
          backgroundColor: "#1f7bb6",
        },
        {
          label: "Sing ups",
          data: [40, 52, 0, -43, -20,40,57],
          borderColor: "#03a2a2",
          backgroundColor: "#03a2a2",
          
        }       
      ],
    });
    setChartOptions({  
      
      
      responsive: true,
      
      plugins: {
        legend: {
          position: "bottom",
          labels: {
            font: {
              size: 16
            },
            color:"white"            
          }
        },
        
        title: {
          display: true,
          text: "Media stats",
          color:"white",
          font: {
            size: 23,
            style:"Serif"
          }
        }
      },
    });
  }, []);

  return (
    <div className="leftDiagram">
      <Line className="lineChart" options={chartOptions} data={chartData} />  
    </div>
      
  );

}

export default LeftDiagram