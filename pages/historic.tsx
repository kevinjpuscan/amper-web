import React,{useEffect,useState} from "react";
import Card from "../components/containers/Card";
import ResumeData from "../components/items/ResumeData";
import MainLayout from "../components/layouts/MainLayout";
import InputDate from '../components/ui/InputDate';
import { indicatorWithIcon } from "../interfaces";

import cloneDeep from "clone-deep";
import ChartLine from '../components/items/ChartLine';
import {baseOption} from '../utils/ChartOption';
import {FormaterDataChartStandart,DataFormatedCategories} from '../utils/Formater';
import api from '../utils/api';
/* import { infoAPI } from "../utils/OptionChart";
const data: infoAPI[] = [
  {
    label: "7:00",
    value: 15,
  },
  {
    label: "8:00",
    value: 15,
  },
  {
    label: "9:00",
    value: 15,
  },
  {
    label: "10:00",
    value: 15,
  },
  {
    label: "11:00",
    value: 15,
  },
  {
    label: "12:00",
    value: 15,
  },
]; */
let formaterDataChart=new FormaterDataChartStandart();
/* formaterDataChart._data=data; */



function HistoricPage() {
  let[option,setOptions]=useState(baseOption)
  
  useEffect(() => {
    (async function initial() {
      
      let {data} = await api.get('energy/bymonths/2020');
      formaterDataChart._data = data.body;
      formaterDataChart._keyLabel='timeRegister';
      formaterDataChart._keyValue='kwHour';
      let dataFormated: DataFormatedCategories = formaterDataChart.formating();

      let newOption = cloneDeep(option);

      newOption!.title!.text = "Consumo";
      newOption!.xAxis!.data = dataFormated.labels;
      newOption!.xAxis!.boundaryGap = true;
      newOption!.series![0].name = 'Kwh';
      newOption!.series![0].data = dataFormated.series[0];

      setOptions(cloneDeep(newOption));
    })()

    },[])
  const indicators: Array<indicatorWithIcon> = [
    {
      icon: "fas fa-bolt",
      value: 123,
    },
    {
      icon: "fas fa-dollar-sign",
      value: 123,
    },
    {
      icon: "fas fa-bell",
      value: 123,
    },
  ];
  return (
    <MainLayout>
      <Card>
        <InputDate />
      </Card>
      <Card>
        <ResumeData indicators={indicators} />
      </Card>
      <Card>
        <ChartLine options={option}/>
      </Card>
    </MainLayout>
  );
}

export default HistoricPage;
