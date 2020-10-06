import React, { useState, useEffect } from "react";
import Card from "../components/containers/Card";
import ResumeData from "../components/items/ResumeData";
import MainLayout from "../components/layouts/MainLayout";
import { indicatorWithIcon } from "../interfaces";
import ChartLine from "../components/items/ChartLine";

import { infoAPI, OptionFactory, serieConfig } from "../utils/OptionChart";

const data: infoAPI[] = [
  {
    label: "7:00",
    value: 15,
  },
  {
    label: "8:00",
    value: 15,
  },
  {
    label: "9:00",
    value: 15,
  },
  {
    label: "10:00",
    value: 15,
  },
  {
    label: "11:00",
    value: 15,
  },
  {
    label: "12:00",
    value: 15,
  },
];
let optionFactory: OptionFactory;

const IndexPage = () => {
  const indicators: Array<indicatorWithIcon> = [
    {
      icon: "fas fa-bolt",
      value: 123,
    },
    {
      icon: "fas fa-dollar-sign",
      value: 123,
    },
    {
      icon: "fas fa-bell",
      value: 123,
    },
  ];

  let [options, setOptions] = useState({});

  useEffect(() => {
    optionFactory = new OptionFactory(
      data,
      "Data Test",
      new serieConfig("kwh", "line")
    );
    setOptions(optionFactory.getOption());
  }, []);

  const handleClick = () => {
    const tmp: infoAPI = {
      label: "20:00",
      value: 17,
    };
    setOptions(optionFactory.addElementSerie(options, tmp));
  };
  return (
    <MainLayout>
      <Card>
        <ResumeData indicators={indicators} />
      </Card>
      <Card>
        <div>
          <button onClick={handleClick}>click me</button>
        </div>
        <ChartLine options={options} />
      </Card>
      <Card>
        <h1>
          Hola Mundo Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quibusdam, hic non, veniam id a suscipit fuga dignissimos, similique
          ea pariatur animi exercitationem quas debitis aliquam itaque
          consequuntur! Expedita, ipsam numquam!
        </h1>
      </Card>
      <Card>
        <h1>
          Hola Mundo Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quibusdam, hic non, veniam id a suscipit fuga dignissimos, similique
          ea pariatur animi exercitationem quas debitis aliquam itaque
          consequuntur! Expedita, ipsam numquam!
        </h1>
      </Card>
      <Card>
        <h1>
          Hola Mundo Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quibusdam, hic non, veniam id a suscipit fuga dignissimos, similique
          ea pariatur animi exercitationem quas debitis aliquam itaque
          consequuntur! Expedita, ipsam numquam!
        </h1>
      </Card>
      <Card>
        <h1>
          Hola Mundo Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quibusdam, hic non, veniam id a suscipit fuga dignissimos, similique
          ea pariatur animi exercitationem quas debitis aliquam itaque
          consequuntur! Expedita, ipsam numquam!
        </h1>
      </Card>
    </MainLayout>
  );
};

export default IndexPage;
