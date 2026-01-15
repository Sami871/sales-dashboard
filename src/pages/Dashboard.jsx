import MarketOverviewChart from "../components/Charts/MarketOverview"
import StatsCard from "../components/Stats/StatsCard"
import {statsData} from "../components/Stats/data"
import { transferData } from "../components/Transfers/data"
import TransferCard from "../components/Transfers/TransferCard"
import SalesOverviewChart from "../components/Charts/SalesOverview"
import Analytics from "../components/Charts/Analytics"

const Dashboard = () => {
  return (
    <div className="p-4 space-y-6">

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
    {statsData.map((item) => (
      <StatsCard key={item.id} {...item} />
    ))}
  </div>

  <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 w-full">

    <div className="lg:col-span-9 flex flex-col gap-4 min-w-0">

      <div className="w-full">
        <MarketOverviewChart />
      </div>

      <div className="flex flex-col xl:flex-row gap-4 w-full">
        <div className="w-full">
          <SalesOverviewChart />
        </div>
        <div className="w-full">
          <Analytics />
        </div>
      </div>

    </div>

    <div className="lg:col-span-3 flex flex-col gap-4 min-w-0 max-h-150 overflow-y-auto">
      {transferData.map((item) => (
        <TransferCard key={item.id} {...item} />
      ))}
    </div>

  </div>

</div>

  );
};


export default Dashboard