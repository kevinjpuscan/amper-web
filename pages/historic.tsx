import React from "react";
import ChartByMonth from "../components/charts/ChartByMonth";
import Card from "../components/containers/Card";
import ResumeData from "../components/items/ResumeData";
import MainLayout from "../components/layouts/MainLayout";
import InputDate from '../components/ui/InputDate';
import { indicatorWithIcon } from "../interfaces";


function HistoricPage() {
  
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
        <InputDate />
      </Card>
      <Card>
        <ResumeData indicators={indicators} />
      </Card>
      <Card>
        <ChartByMonth />
      </Card>
    </MainLayout>
  );
}

export default HistoricPage;
