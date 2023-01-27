import React, { useState, useEffect } from "react";
import { Column, ColumnConfig } from "@ant-design/plots";

const ColumnChart = () => {
  const data = [
    {
      action: "sunday",
      pv: 100,
    },
    {
      action: "Monday",
      pv: 300,
    },
    {
      action: "Tuesday",
      pv: 71,
    },
    {
      action: "Wednesday",
      pv: 15,
    },
    {
      action: "Thursday",
      pv: 90,
    },
    {
      action: "Friday",
      pv: 90,
    },
  ];
  const config: ColumnConfig = {
    data,
    height: 300,
    // padding: 50,
    xField: "action",
    yField: "pv",
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
