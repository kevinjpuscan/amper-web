class FormaterCategory {
  _data: Object[] = [];
  data(value: Object[]) {
    this._data = value;
  }
  formating(key: string = "", transform?: (input: any) => string | number) {
    return this._data.map((element: any) => {
      return transform ? transform(element[key]) : element[key];
    });
  }
}

const whToKwh = (input: number) => {
  return Number((input / 1000).toFixed(2));
};
const kwh = (input: number) => {
  return Number(input.toFixed(2));
};

const watts = (input: number) => {
  return Number((input * 360).toFixed(2));
};

const month = (input: string) => {
  let date = new Date(input);
  switch (date.getMonth() + 1) {
    case 1:
      return "Ene";
    case 2:
      return "Feb";
    case 3:
      return "Mar";
    case 4:
      return "Abr";
    case 5:
      return "May";
    case 6:
      return "Jun";
    case 7:
      return "Jul";
    case 8:
      return "Ago";
    case 9:
      return "Set";
    case 10:
      return "Oct";
    case 11:
      return "Nov";
    case 12:
      return "Dec";

    default:
      return "NA";
  }
};

const day = (input: string) => {
  let date = new Date(input);
  return date.getDate();
};
const hour = (input: string) => {
  let date = new Date(input);
  return `${date.getHours()}:00`;
};

const time = (input: string) => {
  let date = new Date(input);
  return date.toLocaleTimeString();
};

export { FormaterCategory, whToKwh, kwh, month, day, hour, watts, time };
