"use client";
import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const HighchartsChart = () => {
  const machines = [
    {
      name: "Machine-1",
      y: 700,
      drilldown: "Machine-1",
    },
    {
      name: "Machine-2",
      y: 10,
      drilldown: "Machine-2",
    },
    {
      name: "Machine-3",
      y: 30,
      drilldown: "Machine-3",
    },
    {
      name: "Machine-4",
      y: 0,
      drilldown: "Machine-4",
    },
    {
      name: "Machine-45",
      y: 100,
      drilldown: "Machine-5",
    },
  ];

  const total = machines.reduce((acc, num) => {
    return (acc += num.y);
  }, 0);

  const normalizedData = machines.map((machine) => {
    return { ...machine, y: (machine.y / total) * 100 };
  });
  console.log(normalizedData);

  const options = {
    chart: {
      type: "pie",
    },
    credits: {
      enabled: false,
    },
    title: {
      text: "",
      align: "left",
    },
    subtitle: {
      text: "",
      align: "left",
    },
    accessibility: {
      announceNewData: {
        enabled: true,
      },
      point: {
        valueSuffix: "%",
      },
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: false,
        },
        showInLegend: true,
      },
      series: {
        borderRadius: 5,
        dataLabels: [
          {
            enabled: true,
            distance: 15,
            format: "{point.y:.1f}%",
          },
          {
            enabled: true,
            distance: "-30%",
            filter: {
              property: "percentage",
              operator: ">",
              value: 5,
            },
            format: "{point.y:.1f}%",
            style: {
              fontSize: "0.9em",
              textOutline: "none",
            },
          },
        ],
      },
    },
    tooltip: {
      headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
      pointFormat:
        '<span style="color:{point.color}">{point.name}</span>: ' +
        "<b>{point.y:.2f}%</b> of total<br/>",
    },
    series: [
      {
        name: "Browsers",
        colorByPoint: true,
        //array of our machines and their counts
        data: normalizedData,
      },
    ],
    drilldown: {
      series: [
        {
          name: "Chrome",
          id: "Chrome",
          data: [
            ["v97.0", 36.89],
            ["v96.0", 18.16],
            ["v95.0", 0.54],
            ["v94.0", 0.7],
            ["v93.0", 0.8],
            ["v92.0", 0.41],
            ["v91.0", 0.31],
            ["v90.0", 0.13],
            ["v89.0", 0.14],
            ["v88.0", 0.1],
            ["v87.0", 0.35],
            ["v86.0", 0.17],
            ["v85.0", 0.18],
            ["v84.0", 0.17],
            ["v83.0", 0.21],
            ["v81.0", 0.1],
            ["v80.0", 0.16],
            ["v79.0", 0.43],
            ["v78.0", 0.11],
            ["v76.0", 0.16],
            ["v75.0", 0.15],
            ["v72.0", 0.14],
            ["v70.0", 0.11],
            ["v69.0", 0.13],
            ["v56.0", 0.12],
            ["v49.0", 0.17],
          ],
        },
        {
          name: "Safari",
          id: "Safari",
          data: [
            ["v15.3", 0.1],
            ["v15.2", 2.01],
            ["v15.1", 2.29],
            ["v15.0", 0.49],
            ["v14.1", 2.48],
            ["v14.0", 0.64],
            ["v13.1", 1.17],
            ["v13.0", 0.13],
            ["v12.1", 0.16],
          ],
        },
        {
          name: "Edge",
          id: "Edge",
          data: [
            ["v97", 6.62],
            ["v96", 2.55],
            ["v95", 0.15],
          ],
        },
        {
          name: "Firefox",
          id: "Firefox",
          data: [
            ["v96.0", 4.17],
            ["v95.0", 3.33],
            ["v94.0", 0.11],
            ["v91.0", 0.23],
            ["v78.0", 0.16],
            ["v52.0", 0.15],
          ],
        },
      ],
    },
  };

  return (
    <div className="w-full h-full">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default HighchartsChart;
