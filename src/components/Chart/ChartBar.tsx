import React from "react";
import "src/components/Chart/ChartBar.css"

interface Props {
  value: number;
  maxValue: number;
  label: string;
}

export default function ChartBar({ value, maxValue, label }: Props) {
  let barFillHeight = "0%";

  if (maxValue> 0) {
    barFillHeight = Math.round((value / maxValue) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: barFillHeight }}></div>
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  );
}
