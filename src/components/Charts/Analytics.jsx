import Chart from 'react-apexcharts';

const Analytics = () => {
  const options = {
    chart: {
      type: 'area',
      toolbar: { show: false },
    },
    stroke: {
      curve: 'smooth',
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    },
  };

  const series = [
    {
      name: 'Sales',
      data: [30, 40, 35, 50, 49],
    },
  ];

  return (
    <div className='bg-white border border-gray-300 shadow rounded-xl flex-1'>
    <Chart
      options={options}
      series={series}
      type="area"
      height={300}
    />
    </div>
  );
};

export default Analytics;
