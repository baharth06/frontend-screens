import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Lock, User, ArrowRight, Loader2, Library } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import PageTransition from '../components/PageTransition';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { login, register } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); 
    setError(null);
    try {
      if (isLogin) {
        await login(formData.email, formData.password);
      } else {
        await register(formData.name, formData.email, formData.password);
      }
      navigate('/dashboard');
    } catch (err) { 
      setError(err.response?.data?.error || 'Authentication failed. Please verify credentials.'); 
    } finally { 
      setLoading(false); 
    }
  };

  return (
    <PageTransition>
      <div className="w-full min-h-screen flex -mx-4 -mt-4 w-[calc(100%+2rem)] bg-black overflow-hidden relative">
        
        {/* Left Side - Cinematic Library Showcase */}
        <div className="hidden lg:flex lg:w-1/2 relative bg-[#0a0a0a] items-center justify-center overflow-hidden border-r border-white/5">
          <div className="absolute inset-0">
             <img 
               src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2000&auto=format&fit=crop" 
               className="w-full h-full object-cover opacity-60"
               alt="Grand Library"
             />
             <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-[#000000]"></div>
             <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50"></div>
          </div>
          
          <div className="relative z-10 max-w-lg px-12 pt-20">
             <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-teal-500/20 backdrop-blur-md border border-teal-500/30 text-teal-400 text-xs font-bold uppercase tracking-widest">
               <Library size={14} /> Knowledge Hub
             </div>
             <h1 className="text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.1] tracking-tighter shadow-sm">
               Expand your <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">universe.</span>
             </h1>
             <p className="text-xl text-slate-300 font-medium leading-relaxed max-w-md">
               Access thousands of curated books, immersive technical archives, and academic literature from a single unified digital portal.
             </p>
          </div>
        </div>

        {/* Right Side - Authentication Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 relative z-10">
          
          {/* Subtle background glow effect on right panel */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg aspect-square bg-teal-900/20 blur-[100px] rounded-full pointer-events-none"></div>

          <div className="w-full max-w-md relative z-10">
            <motion.div 
              className="bg-[#111111]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-10 shadow-2xl" 
              layout
            >
              <div className="text-center mb-10">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3 tracking-tight">
                  {isLogin ? 'Welcome back' : 'Create an account'}
                </h2>
                <p className="text-slate-400 text-sm sm:text-base">
                  {isLogin ? 'Enter your details to access your dashboard.' : 'Sign up to start borrowing books immediately.'}
                </p>
              </div>

              {error && (
                <motion.div 
                   initial={{ opacity: 0, y: -10 }}
                   animate={{ opacity: 1, y: 0 }}
                   className="bg-red-500/10 border border-red-500/30 text-red-400 p-4 rounded-xl mb-6 text-sm text-center font-medium"
                >
                  {error}
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                
                <AnimatePresence mode="popLayout">
                  {!isLogin && (
                    <motion.div 
                      key="name-input"
                      initial={{ opacity: 0, x: -20, height: 0 }}
                      animate={{ opacity: 1, x: 0, height: 'auto' }}
                      exit={{ opacity: 0, x: 20, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="relative"
                    >
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <User size={18} className="text-slate-500" />
                      </div>
                      <input 
                        type="text" 
                        placeholder="Full Name" 
                        required 
                        value={formData.name} 
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
                        className="w-full bg-[#1c1c1e] text-white border border-white/10 rounded-xl py-3.5 pl-11 pr-4 focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/50 transition-all placeholder:text-slate-500 shadow-inner" 
                      />
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail size={18} className="text-slate-500" />
                  </div>
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    required 
                    value={formData.email} 
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
                    className="w-full bg-[#1c1c1e] text-white border border-white/10 rounded-xl py-3.5 pl-11 pr-4 focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/50 transition-all placeholder:text-slate-500 shadow-inner" 
                  />
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock size={18} className="text-slate-500" />
                  </div>
                  <input 
                    type="password" 
                    placeholder="Password" 
                    required 
                    value={formData.password} 
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })} 
                    className="w-full bg-[#1c1c1e] text-white border border-white/10 rounded-xl py-3.5 pl-11 pr-4 focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/50 transition-all placeholder:text-slate-500 shadow-inner" 
                  />
                </div>

                {isLogin && (
                  <div className="flex justify-end pt-1">
                    <a href="#" className="text-xs font-semibold text-teal-500 hover:text-teal-400 transition-colors">
                      Forgot Password?
                    </a>
                  </div>
                )}

                <button 
                  type="submit" 
                  disabled={loading} 
                  className="w-full mt-4 py-4 rounded-xl font-bold flex items-center justify-center gap-3 bg-teal-500 text-black hover:bg-teal-400 transition-all duration-300 shadow-[0_0_20px_rgba(45,212,191,0.2)] hover:shadow-[0_0_30px_rgba(45,212,191,0.4)] text-lg group disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <Loader2 className="animate-spin" size={20} /> 
                  ) : (
                    <>
                       {isLogin ? 'Sign In to Account' : 'Create Free Account'}
                       <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>

              <div className="mt-8 text-center border-t border-white/10 pt-6">
                <p className="text-sm text-slate-400">
                  {isLogin ? "Don't have an account yet?" : "Already have an account?"}
                  <button 
                    onClick={() => {
                       setIsLogin(!isLogin);
                       setError(null);
                    }} 
                    className="ml-2 font-bold text-teal-400 hover:text-teal-300 transition-colors border-b border-transparent hover:border-teal-300"
                  >
                    {isLogin ? 'Sign up here' : 'Log in here'}
                  </button>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};
export default Login;
