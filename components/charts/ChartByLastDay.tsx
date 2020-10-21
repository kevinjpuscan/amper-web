import React,{Fragment, useEffect,useState} from "react";
import cloneDeep from "clone-deep";
import Chart from '../ui/Chart';
import {OptionManager} from '../../utils/ChartOption';
import {FormaterCategory,time, watts} from '../../utils/Formater';
import api from '../../utils/api';


function ChartByLastDay() {
  let formater=new FormaterCategory();
  let optionManager=new OptionManager();
  
  let[option,setOptions]=useState({})
  let [labels,setLabels]=useState(['']);
  let [values,setValues]=useState([0]);
  
  useEffect(() => {
    (async function initial() {

      let {data} = await api.get('energy/lastday');
      formater._data = data.body;
      let newLabels=formater.formating('timeRegister',time);
      let newValues=formater.formating('wattsHour',watts);

      optionManager.addTitle('Consumo Instantaneo');
      optionManager.addXAxis(newLabels,false);
      optionManager.addSerie('watts',newValues,'line');
      optionManager.addDataZoom(80,100);

      let newOption=cloneDeep(optionManager.option())

      setLabels(newLabels);
      setValues(newValues);
      setOptions(newOption);
    })()

    },[])

    function handleClick(){

      let newLabels=[...labels,'N'];
      let newValues=[...values,51];

      optionManager.xAxis({data:newLabels});
      
      let newSeries=optionManager.getSeries();
        newSeries![0].data=newValues;

      optionManager.series(newSeries!);
      let newOption=cloneDeep(optionManager.option())
      setOptions(newOption);
      setLabels(newLabels);
      setValues(newValues);
    }

  return (
    <Fragment>
      <button onClick={handleClick}>test</button>
 <Chart options={option}/>
    </Fragment>
       
  );
}

export default ChartByLastDay;
