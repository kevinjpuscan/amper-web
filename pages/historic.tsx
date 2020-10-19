import React,{useEffect,useState} from "react";
import Card from "../components/containers/Card";
import ResumeData from "../components/items/ResumeData";
import MainLayout from "../components/layouts/MainLayout";
import InputDate from '../components/ui/InputDate';
import { indicatorWithIcon } from "../interfaces";

import cloneDeep from "clone-deep";
import ChartLine from '../components/items/ChartLine';
import {baseOption} from '../utils/ChartOption';
import {FormaterDataChartBar} from '../utils/Formater';
import { infoAPI } from "../utils/OptionChart";
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
];
let formaterDataChart=new FormaterDataChartBar();


function HistoricPage() {
  let[option,setOptions]=useState(baseOption)
  
  useEffect(()=>{
    let dataFormated:{
      labels:string[],
      values:number[]
    }=formaterDataChart.formating(data,'label','value');

    let newOption=cloneDeep(option);

    newOption!.title!.text="Consumo";
    newOption!.xAxis!.data=dataFormated.labels;
    newOption!.xAxis!.boundaryGap=true;
    newOption!.series![0].name='Kwh';
    newOption!.series![0].data=dataFormated.values;
    
    setOptions(cloneDeep(newOption));

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
