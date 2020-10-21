import { colors } from "../interfaces/index";
import { EChartOption } from "echarts";

class OptionManager {
  private _option: EChartOption;
  constructor() {
    this._option = {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          //
          type: "shadow", //'line' | 'shadow'
        },
      },
      title: {
        text: "",
      },
      xAxis: {
        data: [],
      },
      yAxis: {
        type: "value",
      },

      series: [],
    };
  }

  addTitle = (text: string) => {
    this._option.title = {
      text,
    };
  };

  addXAxis = (
    data: string[],
    boundaryGap: boolean = true,
    type: "value" | "category" | "time" | "log" | undefined = "category"
  ) => {
    this._option.xAxis = {
      type,
      boundaryGap,
      data,
    };
  };

  xAxis = (xAxis: EChartOption.XAxis) => {
    this._option.xAxis = { ...xAxis };
  };

  addSerie = (name: string, data: any[], type: string = "bar") => {
    this._option.series?.push({
      name,
      type,
      itemStyle: {
        color: colors.main,
      },
      areaStyle: {
        color: colors.main,
      },
      data,
    });
  };

  getSeries = () => {
    return this._option.series;
  };

  series = (series: EChartOption.Series[]) => {
    this._option.series = series;
  };

  addDataZoom = (start: number = 80, end: number = 100) => {
    this._option.dataZoom = [
      {
        start,
        end,
        handleIcon:
          "M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z",
        handleSize: "80%",
        handleStyle: {
          color: "#fff",
          shadowBlur: 3,
          shadowColor: "rgba(0, 0, 0, 0.6)",
          shadowOffsetX: 2,
          shadowOffsetY: 2,
        },
      },
    ];
  };

  dataZoom = (dataZoom: EChartOption.DataZoom[]) => {
    this._option.dataZoom = dataZoom;
  };

  option = () => {
    return this._option;
  };
}

export { OptionManager };
