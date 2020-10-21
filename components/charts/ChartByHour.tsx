import React,{useEffect,useState} from "react";
import cloneDeep from "clone-deep";
import Chart from '../ui/Chart';
import {baseOption, OptionManager} from '../../utils/ChartOption';
import {FormaterCategory,kwh,hour} from '../../utils/Formater';
import api from '../../utils/api';

let formater=new FormaterCategory();
let optionManager = new OptionManager();

function ChartByHour() {
  let[option,setOptions]=useState({})
  let [labels,setLabels]=useState(['']);
  let [values,setValues]=useState([0]);
  
  useEffect(() => {
    console.log('entro');
    (async function initial() {

      let {data} = await api.get('energy/byhours/2020/10/21');
      formater._data = data.body;
      let newLabels=formater.formating('timeRegister',hour);
      let newValues=formater.formating('wattsHour',kwh);

      optionManager.addTitle('Consumo por Hora');
      optionManager.addXAxis(newLabels);
      optionManager.addSerie('kWh',newValues);

      let newOption=cloneDeep(optionManager.option())

      setLabels(newLabels);
      setValues(newValues);
      setOptions(newOption);
    })()

    },[])
  return (
        <Chart options={option}/>
  );
}

export default ChartByHour;
