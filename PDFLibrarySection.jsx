import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Download, Eye, BookText } from 'lucide-react';

const categories = ['All', 'UPSC Notes', 'MBA Books', 'Engineering PDFs', 'Data Analytics Notes', 'Coding eBooks', 'Interview Questions'];

const pdfs = [
  { id: 1, title: 'IAS Masterclass: Indian Polity & Governance', category: 'UPSC Notes', image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=600&auto=format&fit=crop' },
  { id: 2, title: 'IPS Advanced Criminal Law & Order Notes', category: 'UPSC Notes', image: 'https://images.unsplash.com/photo-1589998059171-989d887dda1e?q=80&w=600&auto=format&fit=crop' },
  { id: 3, title: 'MBA Quantitative Aptitude Complete Guide', category: 'MBA Books', image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=600&auto=format&fit=crop' },
  { id: 4, title: 'Data Analytics with Python', category: 'Data Analytics Notes', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop' },
  { id: 5, title: 'MBA Financial Accounting Vol 1', category: 'MBA Books', image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=600&auto=format&fit=crop' },
  { id: 6, title: 'Cracking the Coding Interview', category: 'Interview Questions', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop' },
  { id: 7, title: 'IAS Comprehensive History Archive', category: 'UPSC Notes', image: 'https://images.unsplash.com/photo-1461360228754-6e81c478b882?q=80&w=600&auto=format&fit=crop' },
  { id: 8, title: 'Advanced Engineering Mathematics', category: 'Engineering PDFs', image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=600&auto=format&fit=crop' },
];

const PDFLibrarySection = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPDFs = pdfs.filter(pdf => {
    const matchesCategory = activeCategory === 'All' || pdf.category === activeCategory;
    const matchesSearch = pdf.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-20 px-6 md:px-16 relative bg-[#050505] overflow-hidden">
      {/* Digital Library Glowing Shelves Effect */}
      <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/50 to-transparent shadow-[0_0_20px_rgba(45,212,191,0.5)] opacity-50" />
      <div className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent shadow-[0_0_20px_rgba(16,185,129,0.5)] opacity-50" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 font-bold tracking-widest uppercase text-sm mb-6">
             <BookText size={18} /> Digital Archive
           </div>
           <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
             The Ultimate <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">PDF Library</span>
           </h2>
           
           {/* Search Bar */}
           <div className="max-w-3xl mx-auto relative group mt-8">
             {/* Neon Glow Behind Search Bar */}
             <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 via-cyan-400 to-indigo-500 rounded-full blur opacity-25 group-hover:opacity-60 transition duration-500" />
             
             {/* Actual Input Container */}
             <div className="relative bg-[#050505]/80 backdrop-blur-xl border border-white/20 rounded-full flex items-center px-6 py-5 shadow-2xl">
               <Search className="text-teal-400 mr-4" size={26} />
               <input 
                 type="text" 
                 placeholder="Search for IAS, IPS, MBA notes & books..." 
                 value={searchQuery}
                 onChange={(e) => setSearchQuery(e.target.value)}
                 className="w-full bg-transparent border-none text-white text-lg md:text-xl placeholder-slate-500 font-medium focus:outline-none focus:ring-0"
               />
               {searchQuery && (
                 <button 
                   onClick={() => setSearchQuery('')}
                   className="ml-4 text-slate-400 hover:text-white transition-colors text-xs font-bold bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full uppercase tracking-wider"
                 >
                   Clear
                 </button>
               )}
             </div>
           </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${activeCategory === cat ? 'bg-teal-500 text-black shadow-[0_0_15px_rgba(45,212,191,0.4)]' : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/5'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* PDF Grid with Shelf Glow */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 relative">
          {filteredPDFs.map((pdf) => (
            <div key={pdf.id} className="group flex flex-col relative z-10">
              {/* Card Container */}
              <div className="bg-[#111] border border-white/5 rounded-2xl p-3 pb-4 transition-all duration-500 hover:border-teal-500/30 hover:shadow-[0_10px_40px_rgba(45,212,191,0.15)] hover:-translate-y-2">
                <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden mb-4 bg-[#1c1c1e] border border-white/5 flex items-center justify-center p-3 group-hover:scale-105 transition-all duration-500">
                  {/* Book Cover Image */}
                  <img src={pdf.image} alt={pdf.title} className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Dark gradient overlay so the text is readable over the image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30"></div>
                  
                  {/* The dynamic book title functioning as the cover text */}
                  <h3 className="relative z-10 text-base md:text-lg font-black text-white text-center leading-tight drop-shadow-lg">
                    {pdf.title}
                  </h3>

                  <div className="absolute bottom-3 left-3 z-20">
                     <span className="bg-black/60 backdrop-blur-md px-2 py-1 rounded text-[10px] font-bold text-teal-400 uppercase tracking-wider border border-white/10">
                       {pdf.category}
                     </span>
                  </div>
                </div>
                
                <h3 className="text-sm md:text-base font-bold text-white mb-4 line-clamp-2 leading-snug group-hover:text-teal-400 transition-colors">
                  {pdf.title}
                </h3>
                
                <div className="grid grid-cols-2 gap-2 mt-auto">
                  <button 
                    onClick={() => navigate(`/pdf/${pdf.id}`)}
                    className="flex items-center justify-center gap-1.5 py-2 rounded-lg bg-teal-500/10 text-teal-400 font-semibold text-xs hover:bg-teal-500 hover:text-black transition-colors"
                  >
                    <Eye size={14} /> Preview
                  </button>
                  <button className="flex items-center justify-center gap-1.5 py-2 rounded-lg bg-white/5 text-white font-semibold text-xs hover:bg-white/20 transition-colors border border-white/5">
                    <Download size={14} /> Save
                  </button>
                </div>
              </div>
              
              {/* Base Shelf Reflection */}
              <div className="w-[80%] mx-auto h-2 bg-teal-500/20 blur-xl rounded-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PDFLibrarySection;
