import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, ChevronRight, ChevronLeft, Library, Box } from 'lucide-react';
import api from '../utils/api';
import PageTransition from '../components/PageTransition';
import CoursesSection from '../components/CoursesSection';
import PDFLibrarySection from '../components/PDFLibrarySection';
import AILearningSection from '../components/AILearningSection';
import MockTestSection from '../components/MockTestSection';
import SuccessStoriesSection from '../components/SuccessStoriesSection';
import FeaturesSection from '../components/FeaturesSection';
import Footer from '../components/Footer';

const BookRow = ({ title, books }) => {
  const navigate = useNavigate();
  const rowRef = useRef(null);

  const scrollLeft = () => {
    rowRef.current.scrollBy({ left: -600, behavior: 'smooth' });
  };

  const scrollRight = () => {
    rowRef.current.scrollBy({ left: 600, behavior: 'smooth' });
  };

  if (!books || books.length === 0) return null;

  return (
    <div className="mb-10 group relative">
      <div className="flex items-center justify-between px-6 md:px-12 mb-4">
        <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">{title}</h2>
        <button 
          onClick={() => navigate('/books')}
          className="text-sm font-bold text-slate-400 hover:text-white transition-colors flex items-center"
        >
          See All <ChevronRight size={16} />
        </button>
      </div>

      <div className="relative">
        <button onClick={scrollLeft} className="absolute left-0 top-0 h-full w-12 z-10 bg-gradient-to-r from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-start pl-2 text-white">
          <ChevronLeft size={32} />
        </button>

        <div 
          ref={rowRef}
          className="flex gap-4 overflow-x-auto no-scrollbar px-6 md:px-12 snap-x snap-mandatory pb-4"
        >
          {books.map(book => (
            <div 
              key={book.id} 
              onClick={() => navigate(`/books/${book.id}`)}
              className="min-w-[160px] md:min-w-[200px] snap-start cursor-pointer hover:scale-105 transition-transform duration-300 relative group/card flex flex-col"
            >
              <div className="relative aspect-[2/3] w-full rounded-xl overflow-hidden bg-[#1c1c1e] border border-white/5 flex items-center justify-center p-3">
                {/* Book Cover Image */}
                <img 
                  src={book.coverUrl} 
                  className="absolute inset-0 w-full h-full object-cover" 
                  alt={book.title} 
                  loading="lazy"
                />

                {/* Dark gradient overlay for the dynamic text cover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30"></div>
                
                {/* The dynamic book title functioning as the cover image */}
                <h3 className="relative z-10 text-lg md:text-xl font-black text-white text-center leading-tight drop-shadow-lg">
                  {book.title}
                </h3>
                

                {/* Bottom Gradient Overlay for Copies Available */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end p-3">
                   <div className="flex w-full justify-between items-center">
                     <span className={`text-[10px] font-bold px-2 py-1 rounded-sm uppercase tracking-wider ${book.availableCopies > 0 ? "bg-teal-500/80 text-white" : "bg-red-500/80 text-white"}`}>
                        {book.availableCopies > 0 ? 'In Stock' : 'Checked Out'}
                     </span>
                     <span className="text-[11px] font-bold text-slate-300 flex items-center gap-1 font-mono">
                        <Box size={10} className="text-slate-400" /> 
                        {book.availableCopies}/{book.totalCopies}
                     </span>
                   </div>
                </div>
              </div>
              
              <div className="pt-3 pb-1 px-1 bg-black w-full rounded-b-xl border border-transparent group-hover/card:border-white/10 border-t-0">
                <h3 className="text-[15px] font-semibold text-slate-100 whitespace-nowrap overflow-hidden text-ellipsis px-1">
                  {book.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <button onClick={scrollRight} className="absolute right-0 top-0 h-full w-12 z-10 bg-gradient-to-l from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-end pr-2 text-white">
          <ChevronRight size={32} />
        </button>
      </div>
    </div>
  );
};

const Home = () => {
  const [data, setData] = useState({ trending: [], comics: [], adventure: [], romance: [], business: [] });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAll = async () => {
      setLoading(true);
      try {
        const [allRes, comicsRes, advRes, romRes, bizRes] = await Promise.all([
          api.get('/books'),
          api.get('/books?category=Comics+and+Graphic+Novels'),
          api.get('/books?category=Adventure+and+action'),
          api.get('/books?category=Romance%2C+historical+fiction'),
          api.get('/books?category=Business%2C+stocks%2Finvesting%2C+finance+guides')
        ]);
        
        const trending = [...allRes.data].sort(() => 0.5 - Math.random()).slice(0, 15);
        
        setData({
          trending,
          comics: comicsRes.data,
          adventure: advRes.data,
          romance: romRes.data,
          business: bizRes.data
        });
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchAll();
  }, []);

  return (
    <PageTransition>
      <div className="w-full min-h-screen pt-4 bg-black overflow-x-hidden overflow-y-auto -mx-4 -mt-4 w-[calc(100%+2rem)]">
        
        {/* Massive Hero Section Library Style */}
        <div className="relative w-full h-[60vh] md:h-[70vh] mb-12 border-b border-white/5">
           <div className="absolute inset-0">
             <img 
               src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2000&auto=format&fit=crop" 
               className="w-full h-full object-cover"
               alt="Library Hero"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
             <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
           </div>
           
           <div className="absolute bottom-0 left-0 px-6 md:px-16 pb-16 max-w-4xl">
             <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-slate-800/80 backdrop-blur-md border border-white/10 text-slate-300 text-xs font-bold uppercase tracking-widest">
               <Library size={12} className="text-teal-400" /> Central Institutional Library
             </div>
             <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tighter shadow-sm">
               Seamless Integrated <br/><span className="text-teal-400">Knowledge Hub</span>
             </h1>
             <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl font-medium leading-relaxed">
               Welcome to your digital management portal. Browse over thousands of curated physical books, track your borrowing history, and request checkouts instantly without waiting in line.
             </p>
             <div className="flex items-center gap-4">
               <button onClick={() => navigate('/books')} className="bg-teal-500 text-black font-bold text-lg px-8 py-4 rounded-xl flex items-center justify-center gap-3 hover:bg-teal-400 transition-colors shadow-[0_0_20px_rgba(45,212,191,0.3)]">
                 <BookOpen size={22} className="text-black" /> Browse Catalogue
               </button>
               <button onClick={() => navigate('/dashboard')} className="bg-white/5 backdrop-blur-lg text-white font-bold text-lg px-8 py-4 rounded-xl hover:bg-white/10 transition-colors border border-white/10">
                 My Dashboard
               </button>
             </div>
           </div>
        </div>

        {loading ? (
          <div className="h-64 flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-500 text-teal-500"></div>
          </div>
        ) : (
          <div className="space-y-4">
            <BookRow title="Available Now" books={data.trending} />
            <BookRow title="Computer Science & Technology" books={data.business} />
            <BookRow title="Science Fiction Archives" books={data.adventure} />
            <BookRow title="Academic Literature" books={data.romance} />
            <BookRow title="Graphic Novels Collection" books={data.comics} />
          </div>
        )}

        {/* New EdTech Sections */}
        <CoursesSection />
        <PDFLibrarySection />
        <AILearningSection />
        <MockTestSection />
        <FeaturesSection />
        <SuccessStoriesSection />
        <Footer />
      </div>
    </PageTransition>
  );
};
export default Home;
