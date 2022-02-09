import React from "react";

import ChartBar from "./ChartBar";
import "./Chart.css";

export default function Chart(props) {
  let userMax = 1000; // Set by user currently static; will be dynamic and taken as input ny user
  const dataPointValues = props.dataPoints.map((datapoint) => datapoint.value);
  let totalMaximum = Math.max(...dataPointValues);
  // if(totalMaximum < userMax)
  //     totalMaximum = userMax;
  totalMaximum = Math.max(userMax, totalMaximum);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}