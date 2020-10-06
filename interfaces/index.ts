// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import User from 'path/to/interfaces';

import { ReactNode } from "react";

export type User = {
  id: number;
  name: string;
};

export type propsContainer = {
  children: ReactNode;
};

export type indicatorWithIcon = {
  icon: string;
  value: number;
};

export enum colors {
  main = "#f0a500",
  mainDark = "#cf7500",
  grayVeryDark = "#3b4439",
  grayDark = "#99a897",
  gray = "#dfdcf5",
  grayLigth = "#f5f5f5",
  grayVeryLigth = "#f8f8f8",
}
