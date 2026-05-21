import React from 'react';
import { Globe, MessageCircle, Camera, Video, Mail, ArrowRight, Library } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black pt-20 pb-10 px-6 md:px-16 relative border-t border-white/10 overflow-hidden">
      {/* Background Neon Glows */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-teal-500/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-indigo-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand & Mission */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-400 to-indigo-500 flex items-center justify-center shadow-[0_0_20px_rgba(45,212,191,0.4)]">
                <Library size={20} className="text-white" />
              </div>
              <span className="text-2xl font-black text-white tracking-tight">Kisaan<span className="text-teal-400">Hub</span></span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              The world's most advanced digital learning ecosystem. Empowering minds with cinematic UI, AI-driven insights, and premium mentorship.
            </p>
            <div className="flex gap-4">
              <SocialIcon icon={<Globe />} />
              <SocialIcon icon={<MessageCircle />} />
              <SocialIcon icon={<Camera />} />
              <SocialIcon icon={<Video />} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg tracking-wide">Platform</h4>
            <ul className="space-y-4">
              <FooterLink text="Browse Courses" />
              <FooterLink text="Digital PDF Library" />
              <FooterLink text="AI Learning Assistant" />
              <FooterLink text="Mock Test Dashboard" />
              <FooterLink text="Success Stories" />
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg tracking-wide">Resources</h4>
            <ul className="space-y-4">
              <FooterLink text="UPSC Strategy Guides" />
              <FooterLink text="MBA Interview Tips" />
              <FooterLink text="Coding Challenges" />
              <FooterLink text="Career Mentorship" />
              <FooterLink text="Help Center" />
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg tracking-wide">Stay Updated</h4>
            <p className="text-slate-400 text-sm mb-4">
              Get the latest study materials, course drops, and AI updates directly to your inbox.
            </p>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Mail size={16} className="text-slate-500 group-focus-within:text-teal-400 transition-colors" />
              </div>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-[#111] border border-white/10 rounded-xl py-3 pl-11 pr-12 text-white placeholder-slate-500 focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/50 transition-all"
              />
              <button className="absolute inset-y-1 right-1 w-9 h-9 flex items-center justify-center bg-teal-500 hover:bg-teal-400 text-black rounded-lg transition-colors">
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

        </div>

        {/* Divider & Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} KisaanHub Premium Platform. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-teal-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-teal-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-teal-400 transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon }) => (
  <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-teal-500 hover:text-black hover:border-teal-500 transition-all duration-300 hover:-translate-y-1">
    {React.cloneElement(icon, { size: 18 })}
  </a>
);

const FooterLink = ({ text }) => (
  <li>
    <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors text-sm flex items-center gap-2 group">
      <span className="w-1.5 h-1.5 rounded-full bg-teal-500/0 group-hover:bg-teal-500 transition-colors" />
      {text}
    </a>
  </li>
);

export default Footer;
