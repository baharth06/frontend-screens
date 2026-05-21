import React from 'react';
import { Bot, Map, Mic, BrainCircuit, Activity, Sparkles, MessageSquare } from 'lucide-react';

const AILearningSection = () => {
  return (
    <section className="py-24 px-6 md:px-16 relative bg-black overflow-hidden border-t border-white/5">
      {/* Holographic Orbs */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/20 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/20 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Side: Content */}
        <div className="flex-1 w-full text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 font-bold tracking-widest uppercase text-sm mb-8 shadow-[0_0_20px_rgba(45,212,191,0.2)]">
            <Sparkles size={16} /> Next-Gen AI Assistant
          </div>
          
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-[1.1]">
            Your Personal <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-indigo-400">
              Holographic Tutor
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto lg:mx-0">
            Experience hyper-personalized learning powered by state-of-the-art AI. Clear doubts instantly, generate custom quizzes, and track your precise cognitive growth.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FeatureCard icon={<Bot />} title="AI Chatbot" desc="24/7 instant doubt resolution." />
            <FeatureCard icon={<Map />} title="Dynamic Roadmap" desc="Adapts to your learning speed." />
            <FeatureCard icon={<Mic />} title="Mock Interviews" desc="Real-time voice & expression analysis." />
            <FeatureCard icon={<BrainCircuit />} title="Smart Quizzes" desc="AI-generated tests targeting weak areas." />
          </div>
        </div>

        {/* Right Side: Visual Showcase */}
        <div className="flex-1 w-full relative">
          {/* Main Holographic Glass Card */}
          <div className="relative bg-[#0a0a0a]/60 backdrop-blur-3xl border border-white/10 rounded-3xl p-8 shadow-[0_0_50px_rgba(45,212,191,0.1)]">
            
            {/* Glowing borders */}
            <div className="absolute inset-0 rounded-3xl border border-transparent [background:linear-gradient(45deg,transparent,rgba(45,212,191,0.3),transparent)_border-box] [mask-composite:exclude] pointer-events-none" style={{ WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)'}} />

            {/* AI Avatar Mock */}
            <div className="flex justify-center mb-8 relative">
              <div className="absolute inset-0 bg-teal-500/20 blur-2xl rounded-full animate-pulse" />
              <div className="w-32 h-32 rounded-full border border-teal-400/50 p-2 relative z-10 bg-black/50 backdrop-blur-sm flex items-center justify-center shadow-[0_0_30px_rgba(45,212,191,0.4)]">
                 <div className="w-full h-full rounded-full bg-gradient-to-tr from-teal-500 to-indigo-500 flex items-center justify-center relative overflow-hidden">
                    <BrainCircuit size={48} className="text-white animate-pulse" />
                    {/* Scanning line */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-transparent h-1/2 w-full animate-[scan_2s_ease-in-out_infinite]" />
                 </div>
              </div>
            </div>

            {/* Performance Tracking Mock UI */}
            <div className="space-y-4">
              <div className="bg-black/40 rounded-xl p-4 border border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Activity className="text-teal-400" size={20} />
                  <div>
                    <div className="text-white font-semibold text-sm">Cognitive Retention</div>
                    <div className="text-slate-400 text-xs">Based on recent quizzes</div>
                  </div>
                </div>
                <div className="text-teal-400 font-bold text-xl">94%</div>
              </div>

              <div className="bg-black/40 rounded-xl p-4 border border-white/5">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-slate-300">Course Completion Prediction</span>
                  <span className="text-emerald-400 font-semibold">12 Days Early</span>
                </div>
                <div className="w-full h-2 bg-[#111] rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-teal-500 to-emerald-400 w-[68%] rounded-full shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
                </div>
              </div>

              <button className="w-full mt-4 py-3 bg-teal-500/10 hover:bg-teal-500/20 text-teal-400 border border-teal-500/30 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors shadow-inner">
                <MessageSquare size={18} /> Start Learning Session
              </button>
            </div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute -top-6 -right-6 bg-[#1a1a1a] border border-white/10 p-3 rounded-xl shadow-2xl animate-bounce backdrop-blur-md">
            <span className="text-2xl">🧠</span>
          </div>
          <div className="absolute -bottom-4 -left-4 bg-[#1a1a1a] border border-white/10 p-3 rounded-xl shadow-2xl animate-pulse backdrop-blur-md">
            <span className="text-2xl">✨</span>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
      `}</style>
    </section>
  );
};

const FeatureCard = ({ icon, title, desc }) => (
  <div className="bg-white/5 border border-white/5 rounded-2xl p-5 hover:bg-white/10 transition-colors hover:border-teal-500/30 group">
    <div className="w-10 h-10 rounded-lg bg-black/50 border border-white/10 flex items-center justify-center text-teal-400 mb-4 group-hover:scale-110 transition-transform shadow-inner">
      {React.cloneElement(icon, { size: 20 })}
    </div>
    <h3 className="text-white font-bold mb-1 text-base">{title}</h3>
    <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
  </div>
);

export default AILearningSection;
