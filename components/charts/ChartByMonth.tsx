import React,{useEffect,useState} from "react";
import cloneDeep from "clone-deep";
import Chart from '../ui/Chart';
import {FormaterCategory,kwh,month} from '../../utils/Formater';
import api from '../../utils/api';
import { OptionManager } from "../../utils/ChartOption";



function ChartByMonth() {
  let formater=new FormaterCategory();
  let optionManager=new OptionManager();

  let[option,setOptions]=useState({})
  let [labels,setLabels]=useState(['']);
  let [values,setValues]=useState([0]);
  
  useEffect(() => {
    (async function initial() {

      let {data} = await api.get('energy/bymonths/2020');
      formater._data = data.body;
      let newLabels=formater.formating('timeRegister',month);
      let newValues=formater.formating('kwHour',kwh);

      optionManager.addTitle('Consumo por Mes');
      optionManager.addXAxis(newLabels);
      optionManager.addSerie('kWh',newValues);

      let newOption=cloneDeep(optionManager.option())

      setLabels(newLabels);
      setValues(newValues);
      setOptions(newOption);

      if(labels && values){
        console.log('test')
      }
    })()

    },[])



  return (
        <Chart options={option}/>
  );
}

export default ChartByMonth;
