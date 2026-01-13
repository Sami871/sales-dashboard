import React from 'react';
import Chart from 'react-apexcharts';

const MarketOverview = () => {
  const options = {
    chart: {
      height: 350,
      type: 'line',
      toolbar: {
        show: false,
      },
    },

    stroke: {
      width: [3, 3, 3],
      curve: 'smooth',
    },

    dataLabels: {
      enabled: false,
    },

    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    },

    yaxis: [
      {
        title: {
          text: 'Revenue / Profit ($)',
        },
        labels: {
          formatter: (val) => `$${val}`,
        },
      },
      {
        opposite: true,
        title: {
          text: 'Orders',
        },
        labels: {
          formatter: (val) => val.toFixed(0),
        },
      },
    ],

    tooltip: {
      shared: true,
      intersect: false,
    },

    legend: {
      position: 'top',
    },
  };

  const series = [
    {
      name: 'Revenue',
      type: 'area',
      data: [1200, 1500, 1400, 1800, 1700, 2100],
    },
    {
      name: 'Orders',
      type: 'line',
      data: [30, 45, 40, 60, 55, 70],
    },
    {
      name: 'Profit',
      type: 'line',
      data: [400, 600, 550, 800, 750, 950],
    },
  ];

  return (
    <div className='bg-white border border-gray-300 rounded-xl '>
      <Chart
      options={options}
      series={series}
      height={350}
    />
    </div>
      
  );
};

export default MarketOverview;
