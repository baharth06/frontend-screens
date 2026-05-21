import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, Clock, ArrowRight } from 'lucide-react';

const courses = [
  { id: 1, title: 'IAS / UPSC Preparation', duration: '12 Months', rating: '4.9', image: 'https://images.unsplash.com/photo-1577493340887-b7bfff550145?q=80&w=1000&auto=format&fit=crop', desc: 'Comprehensive syllabus coverage for the ultimate civil service exam.' },
  { id: 2, title: 'IPS Preparation', duration: '10 Months', rating: '4.8', image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=1000&auto=format&fit=crop', desc: 'Intensive law, order, and physical preparation curriculum.' },
  { id: 3, title: 'MBA Entrance', duration: '6 Months', rating: '4.9', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop', desc: 'Master CAT, XAT, and GMAT with expert strategies.' },
  { id: 4, title: 'B.Tech CSE Core', duration: '4 Years', rating: '4.7', image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop', desc: 'Complete computer science engineering foundation.' },
  { id: 5, title: 'B.Tech ECE', duration: '4 Years', rating: '4.8', image: 'https://images.unsplash.com/photo-1517077304055-6e89abf0ceb6?q=80&w=1000&auto=format&fit=crop', desc: 'Advanced electronics and communication systems design.' },
  { id: 6, title: 'Data Analytics', duration: '3 Months', rating: '4.9', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop', desc: 'Transform raw data into actionable business insights.' },
  { id: 7, title: 'Artificial Intelligence', duration: '6 Months', rating: '5.0', image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop', desc: 'Build the future with neural networks and deep learning.' },
  { id: 8, title: 'Full Stack Development', duration: '4 Months', rating: '4.8', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop', desc: 'Master React, Node.js, and modern web architectures.' },
  { id: 9, title: 'Aptitude & Placement', duration: '2 Months', rating: '4.7', image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1000&auto=format&fit=crop', desc: 'Crack any company assessment with quantitative mastery.' },
  { id: 10, title: 'Interview Preparation', duration: '1 Month', rating: '4.9', image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000&auto=format&fit=crop', desc: 'Mock interviews, resume building, and HR round tactics.' },
  { id: 11, title: 'Banking PO & Clerk', duration: '5 Months', rating: '4.8', image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1000&auto=format&fit=crop', desc: 'Comprehensive reasoning, math, and general awareness for banking exams.' },
  { id: 12, title: 'SSC CGL Masterclass', duration: '6 Months', rating: '4.7', image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1000&auto=format&fit=crop', desc: 'Your ultimate guide to cracking the Staff Selection Commission exams.' },
  { id: 13, title: 'Machine Learning', duration: '4 Months', rating: '4.9', image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop', desc: 'Dive deep into algorithms, neural networks, and predictive modeling.' },
  { id: 14, title: 'Cyber Security', duration: '5 Months', rating: '4.8', image: 'https://images.unsplash.com/photo-1614064641913-6b14241e3d64?q=80&w=1000&auto=format&fit=crop', desc: 'Ethical hacking, network defense, and digital forensics.' },
  { id: 15, title: 'Digital Marketing', duration: '3 Months', rating: '4.6', image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=1000&auto=format&fit=crop', desc: 'Master SEO, SEM, social media, and content marketing strategies.' },
];

const CoursesSection = () => {
  const navigate = useNavigate();
  return (
    <section className="py-20 px-6 md:px-16 relative">
      {/* Decorative background blur */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-900/20 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">Masterclasses</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-lg">
            Elevate your career with industry-leading courses designed for absolute mastery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div 
              key={course.id}
              onClick={() => navigate(`/course/${course.id}`)}
              className="group cursor-pointer relative bg-[#111] rounded-2xl overflow-hidden border border-white/5 hover:border-teal-500/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(45,212,191,0.15)]"
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent" />
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1 border border-white/10">
                  <Star size={14} className="text-yellow-400 fill-yellow-400" />
                  <span className="text-white text-sm font-semibold">{course.rating}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 relative">
                <div className="absolute -top-6 left-6 bg-teal-500/10 backdrop-blur-md border border-teal-500/20 text-teal-400 px-3 py-1.5 rounded-lg flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
                  <Clock size={14} /> {course.duration}
                </div>
                
                <h3 className="text-xl font-bold text-white mt-2 mb-3 group-hover:text-teal-400 transition-colors">
                  {course.title}
                </h3>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-2">
                  {course.desc}
                </p>

                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/course/${course.id}`);
                  }}
                  className="w-full py-3 rounded-xl bg-white/5 border border-white/10 text-white font-semibold flex items-center justify-center gap-2 group-hover:bg-teal-500 group-hover:text-black group-hover:border-teal-500 transition-all duration-300"
                >
                  Explore Course
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
