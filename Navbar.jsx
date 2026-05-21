import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { BookOpen, LogOut, User as UserIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const { user, logout } = useAuth();
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Books', path: '/books' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass-panel border-x-0 border-t-0 rounded-none h-16">
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <BookOpen className="text-indigo-400 group-hover:text-indigo-300 transition-colors" size={28} />
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
            Lumina
          </span>
        </Link>
        <div className="flex items-center gap-6">
          <div className="hidden md:flex gap-4">
            {links.map((link) => (
              <Link key={link.path} to={link.path} className={`relative px-3 py-2 text-sm font-medium transition-colors ${location.pathname === link.path ? 'text-indigo-300' : 'text-slate-300 hover:text-white'}`}>
                {link.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-4 border-l border-white/10 pl-4">
            {user ? (
              <>
                {user.role === 'admin' && (
                  <Link to="/admin" className="text-slate-300 hover:text-white">Admin</Link>
                )}
                <Link to="/dashboard" className="text-slate-300 hover:text-white">Dashboard</Link>
                <button onClick={logout} className="text-slate-400 hover:text-red-400"><LogOut size={18} /></button>
              </>
            ) : (
              <Link to="/login" className="glass-button text-sm px-5 py-1.5 rounded-full">Login</Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
