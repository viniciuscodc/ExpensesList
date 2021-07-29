import React from "react";
import ChartBar from "src/components/Chart/ChartBar";
import "src/components/Chart/Chart.css";

export default function Chart(props: any) {
  const dataPointValues = props.dataPoints.map((dataPoint: any) => dataPoint.value);
  const totalMaximum: number = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint: any) => (
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
