import React,{useEffect,useState} from "react";
import cloneDeep from "clone-deep";
import Chart from '../ui/Chart';
import {baseOption} from '../../utils/ChartOption';
import {FormaterCategory,kwh,hour} from '../../utils/Formater';
import api from '../../utils/api';

let formater=new FormaterCategory();

function ChartByHour() {
  let[option,setOptions]=useState(baseOption)
  
  useEffect(() => {
    (async function initial() {
      
      let {data} = await api.get('energy/byhours/2020/10/20');
      formater._data = data.body;
      let labels=formater.formating('timeRegister',hour)
      let values=formater.formating('kwHour',kwh)

      let newOption = cloneDeep(option);

      newOption!.title!.text = "Consumo por hora";
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

export default ChartByHour;
