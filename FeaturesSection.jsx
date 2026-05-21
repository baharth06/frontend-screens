import React from 'react';
import { Video, BookOpen, BrainCircuit, FileText, Briefcase, Users, MessageSquare, Compass } from 'lucide-react';

const features = [
  { icon: <Video />, title: 'Live Classes', desc: 'Interactive high-definition streams with expert faculty.' },
  { icon: <BookOpen />, title: 'Recorded Lectures', desc: 'Unlimited access to the entire video archive.' },
  { icon: <BrainCircuit />, title: 'AI Notes Generator', desc: 'Instantly convert video lectures into smart summaries.' },
  { icon: <FileText />, title: 'Downloadable PDFs', desc: 'Offline access to premium study materials.' },
  { icon: <Briefcase />, title: 'Placement Guidance', desc: 'Direct referrals and resume building sessions.' },
  { icon: <Users />, title: 'Mentorship Programs', desc: '1-on-1 guidance from industry leaders.' },
  { icon: <MessageSquare />, title: 'Community Discussion', desc: 'Peer-to-peer learning in private forums.' },
  { icon: <Compass />, title: 'Internship Guidance', desc: 'Navigate your first career steps with confidence.' }
];

const FeaturesSection = () => {
  return (
    <section className="py-24 px-6 md:px-16 relative bg-[#050505] border-t border-white/5">
      
      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
          Unmatched <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">Features</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg mb-16">
          Everything you need to succeed, engineered into one beautiful platform.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div 
              key={idx}
              className="group bg-[#111] border border-white/5 rounded-3xl p-8 hover:bg-white/5 hover:border-teal-500/30 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Subtle background glow on hover */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="w-14 h-14 rounded-2xl bg-black/50 border border-white/10 flex items-center justify-center text-teal-400 mb-6 group-hover:scale-110 group-hover:bg-teal-500/10 transition-all duration-500 shadow-inner relative z-10">
                {React.cloneElement(feature.icon, { size: 28 })}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 relative z-10 group-hover:text-teal-400 transition-colors">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm relative z-10">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
