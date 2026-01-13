import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const SalesOverviewChart = () => {
  // Sample data
  const data = [
    { name: "Bitcoin", value: 400 },
    { name: "Ethereum", value: 300 },
    { name: "Binance Coin", value: 300 },
    { name: "Other", value: 200 },
  ];

  const COLORS = ["#2563eb", "#10b981", "#f59e0b", "#ef4444"];

  return (
    <div className="bg-white border border-gray-300 rounded-xl p-2  md:w-98 shadow-sm flex flex-col items-center">
      <h2 className="text-lg font-semibold mb-4 text-gray-800 ">
        Sales Overview
      </h2>
      <div className="w-full border-b-2 border-gray-300 mb-4"></div>


    <div className="flex items-center  justify-between w-full">
      <div className="w-full h-48">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={60}
              innerRadius={40} // Makes it a donut chart
              fill="#8884d8"
              paddingAngle={5}
              label
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip formatter={(value) => `${value}`} />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="flex flex-col  gap-2">
        {data.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: COLORS[index % COLORS.length] }}
            ></span>
            <span className="text-gray-700 text-sm">
              {item.name} ({item.value})
            </span>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default SalesOverviewChart;
