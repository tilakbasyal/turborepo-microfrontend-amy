import React, { useState, useEffect } from "react";
import { Column, ColumnConfig } from "@ant-design/plots";

const ColumnChart = () => {
  const data = [
    {
      days: "Sunday",
      Users: 100,
    },
    {
      days: "Monday",
      Users: 300,
    },
    {
      days: "Tuesday",
      Users: 71,
    },
    {
      days: "Wednesday",
      Users: 15,
    },
    {
      days: "Thursday",
      Users: 90,
    },
    {
      days: "Friday",
      Users: 90,
    },
  ];
  const config: ColumnConfig = {
    data,
    height: 200,
    // padding: 50,
    xField: "days",
    yField: "Users",
    conversionTag: {},
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
  };
  return <Column {...config} />;
};

export default ColumnChart;
