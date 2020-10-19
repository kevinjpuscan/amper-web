abstract class FormaterDataChart{
    abstract formating<type>(data:type[],keyLabel:string,keyValue:string,formaterValue?:FormaterValue):any;
    abstract formatingOnlyValue<type>(data:type[],key:string,formaterValue?:FormaterValue):any;
}

class FormaterDataChartBar extends FormaterDataChart{
    formatingOnlyValue<type>(data: type[], key: string,formaterValue?:FormaterValue) {
        return data.map((element: any) => {
            return formaterValue?formaterValue.formating(element[key]):element[key];
          });
    }
    formating<type>(data: type[],keyLabel:string,keyValue:string,formaterValue?:FormaterValue) {
        let labels= this.formatingOnlyValue(data,keyLabel,formaterValue);
        let values= this.formatingOnlyValue(data,keyValue,formaterValue);
        return {labels,values};
    }
}


abstract class FormaterValue{
    abstract formating(input:string|number):string|number;
}

class FormaterValueDate extends FormaterValue{
    formating(input: string): string {
        return input+'';
    }
}

class FormaterValueNumber extends FormaterValue{
    transform:(input:number)=>number
    constructor(transform:(input:number)=>number){
        super();
        this.transform=transform;
    };
    formating(input: number): number {
        return this.transform(input);
    }
}

export {
    FormaterDataChart,
    FormaterDataChartBar,
    FormaterValue,
    FormaterValueDate,
    FormaterValueNumber
}
