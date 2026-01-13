import MarketOverviewChart from "../components/Charts/MarketOverview"
import StatsCard from "../components/Stats/StatsCard"
import {statsData} from "../components/Stats/data"
import { transferData } from "../components/Transfers/data"
import TransferCard from "../components/Transfers/TransferCard"
import SalesOverviewChart from "../components/Charts/SalesOverview"
import Analytics from "../components/Charts/Analytics"

const Dashboard = () => {
  return (
    <div className="p-4 flex flex-col gap-4">
       <div className="flex justify-between flex-wrap">
      {statsData.map((item) => (
        <StatsCard
          key={item.id} 
          {...item}
        />
      ))}
    </div>

    <div className="flex justify-between gap-6">

    <div className="flex flex-col w-full gap-4">

      <div>
      <MarketOverviewChart />
      </div>
      <div className="flex justify-between gap-6">
      <SalesOverviewChart />
      <Analytics />
      </div>

    </div>

        
        <div className="flex flex-col gap-2">
      {transferData.map((item) => (
        <TransferCard key={item.id} {...item} />
      ))}
    </div>

      </div>
    </div>
  )
}

export default Dashboard