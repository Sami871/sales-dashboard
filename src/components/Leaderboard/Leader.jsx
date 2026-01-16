import { Trophy } from 'lucide-react';
import { leaderboardData, rewards } from './data';
import LeaderboardTable from './LeaderBoardTable';
import PodiumBar from './PodiumBar';

const LeaderboardPage = () => {
  return (
    <div className="min-h-screen bg-[#070A17] text-white p-6 md:p-12 font-sans selection:bg-indigo-500/30">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
        
        {/* Left Side: Stats & Table */}
        <div className="flex-1 space-y-12">
          <h1 className="text-4xl font-black italic tracking-tighter uppercase leading-none">
            Leaderboard
          </h1>

          {/* 3D Podium Container */}
          <div className="flex items-end justify-center gap-4 h-72 pb-2">
            <PodiumBar user={leaderboardData[1]} rank={2} height={130} color="bg-[#4E5BCE]" />
            <PodiumBar user={leaderboardData[0]} rank={1} height={180} color="bg-[#6366F1]" />
            <PodiumBar user={leaderboardData[2]} rank={3} height={100} color="bg-[#3B448F]" />
          </div>

          <LeaderboardTable />
        </div>

        {/* Right Side: Rewards Sidebar */}
        <div className="w-full lg:w-80 flex flex-col gap-6">
          <div className="bg-[#12162B]/50 p-6 rounded-3xl border border-white/5">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-indigo-500/20 rounded-2xl">
                <Trophy className="text-indigo-400" size={24} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Monthly</p>
                <h3 className="text-xl font-black italic uppercase">Rewards</h3>
              </div>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed mb-8">
              At the end of each month the top 10 winners receive rewards based on their ranking.
            </p>

            <div className="space-y-2">
              {rewards.map((item, i) => (
                <div 
                  key={i} 
                  className={`flex items-center justify-between p-4 rounded-2xl border transition-all ${
                    i < 3 
                    ? 'bg-linear-to-r from-indigo-600/20 to-transparent border-indigo-500/40 shadow-lg' 
                    : 'bg-white/5 border-white/5'
                  }`}
                >
                  <div className="flex items-baseline gap-1">
                    <span className="text-lg font-black italic">{item.rank}</span>
                    <span className="text-[9px] text-gray-500 font-bold uppercase">place</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-indigo-400 text-sm font-bold">$</span>
                    <span className="text-xl font-black">{item.amount}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LeaderboardPage;