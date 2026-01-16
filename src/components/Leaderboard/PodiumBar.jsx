import {Crown} from "lucide-react"

const PodiumBar = ({ user, rank, height, color }) => (
  <div className="flex flex-col items-center group">
    <div className="relative mb-4 flex flex-col items-center">
      {rank === 1 && (
        <Crown className="text-yellow-400 w-8 h-8 absolute -top-10 animate-bounce" fill="currentColor" />
      )}
      <img 
        src={user.avatar} 
        alt={user.name} 
        className={`w-14 h-14 rounded-2xl border-2 ${rank === 1 ? 'border-yellow-400' : 'border-indigo-400'} shadow-xl`} 
      />
      <div className="text-center mt-2">
        <p className="text-xs font-bold text-white whitespace-nowrap">{user.name}</p>
        <span className="text-[10px] bg-indigo-500/30 px-3 py-0.5 rounded-full border border-indigo-400/30 text-indigo-200">
          ${user.pnl}
        </span>
      </div>
    </div>
    {/* 3D Bar Perspective */}
    <div 
      style={{ height: `${height}px` }} 
      className={`w-24 relative ${color} rounded-t-xl flex items-start justify-center pt-4 transition-all duration-300 group-hover:brightness-110 shadow-[inset_0_4px_12px_rgba(255,255,255,0.3)]`}
    >
      <span className="text-5xl font-black text-white/20 italic select-none">{rank}</span>
      <div className="absolute inset-0 bg-linear-to-b from-white/10 to-transparent rounded-t-xl" />
    </div>
  </div>
);

export default PodiumBar;