import { EChartOption, EChartsOptionConfig } from "echarts";

export interface DataFormated{
}

export interface DataFormatedCategories extends DataFormated{
    labels:string[];
    series:number[][];
}


export interface FormaterDataChart{
    _data:Object[];
    formating():DataFormated;
}


class FormaterDataChartStandart implements FormaterDataChart{
    _data: Object[]=[];
    _keyLabel:string='';
    _keyValue:string='';
    _formaterValue?:FormaterValue;

    data(value:Object[]){
        this._data=value; 
    }

    keyLabel(value:string){
        this._keyLabel=value; 
    }

    keyValue(value:string){
        this._keyValue=value; 
    }

    formating(): DataFormatedCategories {
        let labels= this.formatingOnlyValue(this._keyLabel);
        let values= this.formatingOnlyValue(this._keyValue);
        return {labels,series:[[...values]]};
    }

    formatingOnlyValue(key:string):any[]{
        return this._data.map((element: any) => {
            return this._formaterValue?this._formaterValue.formating(element[key]):element[key];
          });
    }

}




export interface FormaterValue{
    formating(input:string|number):string|number;
}

class FormaterValueDate implements FormaterValue{
    formating(input: string): string {
        return input+'';
    }
}

class FormaterValueNumber implements FormaterValue{
    _transform:(input:number)=>number;
    
    constructor(transform:(input:number)=>number){
        this._transform=transform;
    }
    formating(input: number): number {
        return this._transform(input);
    }
}


export {
    FormaterDataChartStandart,
    FormaterValueDate,
    FormaterValueNumber
}