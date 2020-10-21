import React,{useEffect,useState} from "react";
import cloneDeep from "clone-deep";
import Chart from '../ui/Chart';
import {baseOption} from '../../utils/ChartOption';
import {FormaterCategory,time, watts} from '../../utils/Formater';
import api from '../../utils/api';

let formater=new FormaterCategory();

function ChartByLastDay() {
  let[option,setOptions]=useState(baseOption)
  
  useEffect(() => {
    (async function initial() {
      
      let {data} = await api.get('energy/lastday');
      formater._data = data.body;
      let labels=formater.formating('timeRegister',time)
      let values=formater.formating('wattsHour',watts)

      let newOption = cloneDeep(option);

      newOption!.title!.text = "Consumo Instantaneo";
      newOption!.xAxis!.data = [...labels];
      newOption!.xAxis!.boundaryGap = false;
      newOption.dataZoom=[
        {
          start: 80,
          end: 100,
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
      newOption!.series![0].name = 'watts';
      newOption!.series![0].type='line';
      newOption!.series![0].data = [...values];

      setOptions(cloneDeep(newOption));
    })()

    },[])

  return (
        <Chart options={option}/>
  );
}

export default ChartByLastDay;
