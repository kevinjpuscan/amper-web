import React,{useEffect,useState} from "react";
import cloneDeep from "clone-deep";
import Chart from '../ui/Chart';
import {baseOption} from '../../utils/ChartOption';
import {day, FormaterCategory,kwh} from '../../utils/Formater';
import api from '../../utils/api';

let formater=new FormaterCategory();

function ChartByDay() {
  let[option,setOptions]=useState(baseOption)
  
  useEffect(() => {
    (async function initial() {
      
      let {data} = await api.get('energy/bydays/2020/10');
      formater._data = data.body;
      let labels=formater.formating('timeRegister',day)
      let values=formater.formating('kwHour',kwh)

      let newOption = cloneDeep(option);

      newOption!.title!.text = "Consumo Diario";
      newOption!.xAxis!.data = [...labels];
      newOption!.xAxis!.boundaryGap = true;
      newOption!.series![0].name = 'Kwh';
      newOption!.series![0].data = [...values];

      setOptions(cloneDeep(newOption));
    })()

    },[])

  return (
        <Chart options={option}/>
  );
}

export default ChartByDay;
