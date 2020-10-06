import { colors } from "../interfaces/index";
import cloneDeep from "clone-deep";

export interface infoAPI {
  label: string;
  value: number;
}

export class serieConfig {
  name: string;
  key: string;
  type: string;
  colorItem: string;
  colorArea: string;

  constructor(
    name: string,
    type: string,
    key?: string,
    colotItem?: string,
    colorArea?: string
  ) {
    this.name = name;
    this.key = key ? key : name;
    this.type = type;
    this.colorItem = colotItem ? colotItem : colors.mainDark;
    this.colorArea = colorArea ? colorArea : colors.main;
  }
}

export class OptionFactory {
  data: infoAPI[];
  title: string;
  serieConfig: serieConfig;
  boundaryGap: boolean;
  startZoom: number;
  endZoom: number;

  constructor(
    data: infoAPI[],
    title: string,
    serieConfig: serieConfig,
    boundaryGap?: boolean,
    startZoom?: number,
    endZoom?: number
  ) {
    this.data = data;
    this.title = title;
    this.serieConfig = serieConfig;
    this.boundaryGap = boundaryGap ? boundaryGap : false;
    this.startZoom = startZoom ? startZoom : 60;
    this.endZoom = endZoom ? endZoom : 100;
  }

  private formatXAxis() {
    return this.data.map((element: infoAPI) => {
      return element.label;
    });
  }

  private formatSeries() {
    return this.data.map((element: infoAPI) => {
      return element.value;
    });
  }

  public addElementSerie(
    option: echarts.EChartOption<echarts.EChartOption.Series>,
    newElement: infoAPI
  ): echarts.EChartOption<echarts.EChartOption.Series> {
    let newOption = cloneDeep(option);
    newOption.series[0].data.push(newElement.value);
    newOption.xAxis.data.push(newElement.label);
    return newOption;
  }

  public getOption(): echarts.EChartOption<echarts.EChartOption.Series> {
    let optBase: echarts.EChartOption<echarts.EChartOption.Series> = {
      tooltip: {
        trigger: "axis",
        position: function (positions) {
          return [positions[0], "10%"];
        },
      },
      title: {
        text: "",
      },
      xAxis: {
        type: "category",
        boundaryGap: this.boundaryGap,
        //fechas
        data: this.formatXAxis(),
      },
      yAxis: {
        type: "value",
      },
      dataZoom: [
        {
          start: this.startZoom,
          end: this.endZoom,
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
      ],
      series: [
        {
          name: this.serieConfig.name,
          type: this.serieConfig.type,
          itemStyle: {
            color: this.serieConfig.colorItem,
          },
          areaStyle: {
            color: this.serieConfig.colorArea,
          },
          //confirmados
          data: this.formatSeries(),
        },
      ],
    };
    return optBase;
  }
}
