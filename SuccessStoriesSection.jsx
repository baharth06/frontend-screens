import React, { useRef } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const stories = [
  { 
    id: 1, 
    name: 'Priya Sharma', 
    role: 'IAS Topper (AIR 14)', 
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop',
    quote: 'The comprehensive mock tests and personalized AI roadmaps were the cornerstone of my preparation. The precision of the analytics helped me focus exactly where I needed to improve.'
  },
  { 
    id: 2, 
    name: 'Rahul Verma', 
    role: 'MBA Student at IIM-A', 
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop',
    quote: 'Cracking the CAT felt impossible until I found this platform. The advanced quantitative modules and instant AI doubt resolution saved me hundreds of hours of frustration.'
  },
  { 
    id: 3, 
    name: 'Sneha Patel', 
    role: 'Senior Software Engineer, Google', 
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop',
    quote: 'From a non-CS background to cracking FAANG interviews, the full-stack development course and coding challenges here gave me the practical edge I desperately needed.'
  },
  { 
    id: 4, 
    name: 'Vikram Singh', 
    role: 'Lead Data Analyst', 
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop',
    quote: 'The Data Analytics notes and real-world project simulations are better than my university degree. A truly premium learning experience that translates to real career growth.'
  }
];

const SuccessStoriesSection = () => {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 px-6 md:px-16 relative bg-black overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-teal-500/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 font-bold tracking-widest uppercase text-sm mb-6">
              <Star size={18} className="fill-yellow-400" /> Alumni Hall of Fame
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              Stories of <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-600">
                Triumph & Excellence
              </span>
            </h2>
          </div>
          
          <div className="flex gap-4">
            <button onClick={() => scroll('left')} className="p-4 rounded-full bg-[#111] border border-white/10 hover:bg-white/10 text-white transition-all shadow-lg hover:shadow-yellow-500/20 group">
              <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
            </button>
            <button onClick={() => scroll('right')} className="p-4 rounded-full bg-[#111] border border-white/10 hover:bg-white/10 text-white transition-all shadow-lg hover:shadow-yellow-500/20 group">
              <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div 
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-8 px-4 -mx-4"
        >
          {stories.map((story) => (
            <div 
              key={story.id} 
              className="min-w-[320px] md:min-w-[400px] snap-center bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-8 relative flex flex-col transition-all duration-500 hover:border-yellow-500/30 hover:-translate-y-2 hover:bg-white/[0.05]"
            >
              <Quote className="absolute top-6 right-6 text-yellow-500/20" size={64} />
              
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-yellow-500/50 p-1">
                  <img src={story.image} alt={story.name} className="w-full h-full object-cover rounded-full" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">{story.name}</h4>
                  <p className="text-yellow-400 text-sm font-semibold">{story.role}</p>
                </div>
              </div>
              
              <p className="text-slate-300 leading-relaxed italic relative z-10 font-medium">
                "{story.quote}"
              </p>
              
              {/* Glass subtle reflection */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
