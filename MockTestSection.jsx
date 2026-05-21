import React from 'react';
import { Target, Trophy, TrendingUp, Award, Clock, ArrowUpRight } from 'lucide-react';

const MockTestSection = () => {
  return (
    <section className="py-24 px-6 md:px-16 relative bg-[#050505]">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 font-bold tracking-widest uppercase text-sm mb-6">
              <Target size={18} /> Elite Assessment
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Pro <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Mock Tests</span>
            </h2>
          </div>
          <button className="flex items-center gap-2 text-indigo-400 font-bold hover:text-indigo-300 transition-colors bg-white/5 px-6 py-3 rounded-xl border border-white/10 hover:bg-white/10">
            View All Tests <ArrowUpRight size={18} />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Dashboard Panel */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Top Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
               <StatCard title="Global Rank" value="#42" icon={<Trophy className="text-yellow-400" />} change="+12" />
               <StatCard title="Tests Attempted" value="128" icon={<Target className="text-teal-400" />} />
               <StatCard title="Accuracy" value="84%" icon={<TrendingUp className="text-emerald-400" />} change="+2.4%" />
            </div>

            {/* Available Tests List */}
            <div className="bg-[#111] border border-white/5 rounded-3xl p-6">
              <h3 className="text-xl font-bold text-white mb-6">Recommended Assessments</h3>
              <div className="space-y-3">
                <TestRow name="UPSC GS Paper 1 Grand Test" type="Weekly" time="120 min" questions="100 Q" />
                <TestRow name="MBA CAT Quant Challange" type="Daily" time="40 min" questions="34 Q" />
                <TestRow name="B.Tech CSE Data Structures" type="Semester" time="90 min" questions="50 Q" />
                <TestRow name="Full Stack React Assessment" type="Coding" time="60 min" questions="20 Q" />
              </div>
            </div>
          </div>

          {/* Right Panel - Leaderboard & Circular Chart */}
          <div className="space-y-6">
            
            {/* Score Analytics Circular Chart (Mock) */}
            <div className="bg-gradient-to-b from-[#151515] to-[#0a0a0a] border border-white/5 rounded-3xl p-8 flex flex-col items-center justify-center relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 blur-[50px] rounded-full" />
               
               <h3 className="text-lg font-bold text-slate-300 mb-8 self-start w-full">Performance Score</h3>
               
               {/* Pure CSS Circular Chart */}
               <div className="relative w-48 h-48 flex items-center justify-center rounded-full bg-black border-8 border-[#1a1a1a] shadow-[0_0_30px_rgba(99,102,241,0.15)]">
                 <svg className="absolute inset-0 w-full h-full -rotate-90">
                   <circle cx="96" cy="96" r="88" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-indigo-500" strokeDasharray="552" strokeDashoffset="110" strokeLinecap="round" />
                 </svg>
                 <div className="text-center z-10">
                   <div className="text-4xl font-extrabold text-white">82<span className="text-xl text-slate-500">%</span></div>
                   <div className="text-xs text-indigo-400 font-bold mt-1 uppercase tracking-wider">Excellent</div>
                 </div>
               </div>
               
               <div className="mt-8 w-full flex justify-between text-sm">
                 <div className="text-slate-400"><span className="inline-block w-3 h-3 rounded-full bg-indigo-500 mr-2"></span>Correct</div>
                 <div className="text-white font-bold">420 Q</div>
               </div>
               <div className="mt-2 w-full flex justify-between text-sm">
                 <div className="text-slate-400"><span className="inline-block w-3 h-3 rounded-full bg-[#1a1a1a] mr-2"></span>Incorrect</div>
                 <div className="text-white font-bold">92 Q</div>
               </div>
            </div>

            {/* Leaderboard UI */}
            <div className="bg-[#111] border border-white/5 rounded-3xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-white flex items-center gap-2"><Award size={20} className="text-yellow-400" /> Leaderboard</h3>
              </div>
              <div className="space-y-4">
                <LeaderboardRow rank={1} name="Ananya S." score="99.8" isCurrent={false} />
                <LeaderboardRow rank={2} name="Rahul K." score="98.5" isCurrent={false} />
                <LeaderboardRow rank={42} name="You" score="82.0" isCurrent={true} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ title, value, icon, change }) => (
  <div className="bg-[#111] border border-white/5 rounded-2xl p-5 hover:bg-white/5 transition-colors">
    <div className="flex justify-between items-start mb-4">
      <div className="p-2 bg-white/5 rounded-lg border border-white/5">
        {icon}
      </div>
      {change && (
        <span className={`text-xs font-bold px-2 py-1 rounded-md ${change.startsWith('+') ? 'bg-emerald-500/10 text-emerald-400' : 'bg-red-500/10 text-red-400'}`}>
          {change}
        </span>
      )}
    </div>
    <div className="text-3xl font-extrabold text-white mb-1">{value}</div>
    <div className="text-sm font-semibold text-slate-400">{title}</div>
  </div>
);

const TestRow = ({ name, type, time, questions }) => (
  <div className="group flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-black rounded-xl border border-white/5 hover:border-indigo-500/30 transition-all cursor-pointer">
    <div className="mb-4 sm:mb-0">
      <div className="flex items-center gap-3 mb-1">
        <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">{type}</span>
        <h4 className="text-white font-bold group-hover:text-indigo-400 transition-colors">{name}</h4>
      </div>
      <div className="flex items-center gap-4 text-xs font-medium text-slate-500">
        <span className="flex items-center gap-1"><Clock size={12} /> {time}</span>
        <span className="flex items-center gap-1"><Target size={12} /> {questions}</span>
      </div>
    </div>
    <button className="bg-white/5 text-white text-sm font-bold px-6 py-2.5 rounded-lg hover:bg-indigo-500 hover:text-white transition-colors">
      Take Test
    </button>
  </div>
);

const LeaderboardRow = ({ rank, name, score, isCurrent }) => (
  <div className={`flex items-center justify-between p-3 rounded-xl border ${isCurrent ? 'bg-indigo-500/10 border-indigo-500/30' : 'bg-black border-white/5'}`}>
    <div className="flex items-center gap-4">
      <div className={`w-6 text-center font-black ${rank <= 3 ? 'text-yellow-400' : 'text-slate-500'}`}>#{rank}</div>
      <div className={`font-bold ${isCurrent ? 'text-indigo-400' : 'text-white'}`}>{name}</div>
    </div>
    <div className="font-bold text-slate-300">{score}</div>
  </div>
);

export default MockTestSection;
