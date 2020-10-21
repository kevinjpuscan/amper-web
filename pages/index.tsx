import React, { useState, useEffect } from "react";
import Card from "../components/containers/Card";
import ResumeData from "../components/items/ResumeData";
import MainLayout from "../components/layouts/MainLayout";
import { indicatorWithIcon } from "../interfaces";
import ChartByMonth from "../components/charts/ChartByMonth";
import ChartByDay from "../components/charts/ChartByDay";
import ChartByHour from "../components/charts/ChartByHour";
import ChartByLastDay from "../components/charts/ChartByLastDay";

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
        <ChartByLastDay />
      </Card>
      <Card>
        <ChartByHour />
      </Card>
      <Card>
        <ChartByMonth />
      </Card>
      <Card>
        <ChartByDay />
      </Card>
    </MainLayout>
  );
};

export default IndexPage;
