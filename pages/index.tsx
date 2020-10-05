import React from "react";
import Card from "../components/containers/Card";
import ResumeData from "../components/items/ResumeData";
import MainLayout from "../components/layouts/MainLayout";
import { indicatorWithIcon } from "../interfaces";

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
  return (
    <MainLayout>
      <Card>
        <ResumeData indicators={indicators} />
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
