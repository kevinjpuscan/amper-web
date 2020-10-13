import React from "react";
import ReactEcharts from "echarts-for-react";
import echarts from "echarts";

interface props {
  options: echarts.EChartOption<echarts.EChartOption.Series>;
}

function ChartLine({ options }: props) {
  return (
    <div>
      <ReactEcharts option={options}></ReactEcharts>
      <style jsx>{``}</style>
    </div>
  );
}

export default ChartLine;
