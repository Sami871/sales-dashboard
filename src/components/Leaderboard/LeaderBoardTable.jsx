import { ChevronUp, Calendar } from "lucide-react";
import { leaderboardData } from "./data";

const LeaderboardTable = () => (
  <div className="bg-[#12162B] rounded-3xl border border-white/5 p-6 shadow-2xl relative overflow-hidden">
    <div className="flex justify-between items-center mb-6">
      <div className="flex items-center gap-2 text-gray-300 font-medium">
        <Calendar size={18} className="text-indigo-400" />
        <span>Monthly Leaderboard</span>
      </div>
      <div className="bg-[#0B0E1E] p-1 rounded-xl flex gap-1 border border-white/5">
        <button className="px-4 py-1.5 bg-[#1C2242] rounded-lg text-xs font-bold text-white shadow-sm">Monthly</button>
        <button className="px-4 py-1.5 text-gray-500 text-xs font-bold hover:text-gray-300">All Time</button>
      </div>
    </div>

    <div className="space-y-3">
      {leaderboardData.map((user, idx) => (
        <div key={user.id} className="flex items-center justify-between p-3 bg-[#1C2242]/40 rounded-2xl border border-white/5 hover:border-indigo-500/30 transition-all cursor-pointer">
          <div className="flex items-center gap-4">
            <span className="w-6 text-center font-bold text-gray-600 text-sm">{idx + 1}</span>
            <img src={user.avatar} className="w-10 h-10 rounded-xl object-cover" alt="" />
            <div>
              <p className="text-sm font-bold text-white tracking-wide">{user.name}</p>
              <div className="flex items-center gap-2 text-[10px] text-gray-500">
                <span className="flex items-center gap-1"><ChevronUp size={10} className="text-green-400" /> {user.battles}</span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <span className="text-[10px] text-gray-500 mr-2 uppercase tracking-widest font-bold italic">Pnl:</span>
            <span className="text-indigo-400 font-black text-lg">${user.pnl}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default LeaderboardTable;