import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Settings, 
  Menu, 
  ChevronLeft, 
  LogOut,
  User
} from 'lucide-react';

import logoImg from '../assets/TranAct.png'

interface LayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<LayoutProps> = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
    { name: 'Profile', icon: User, path: '/profile' },
    { name: 'Settings', icon: Settings, path: '/settings' },
  ];

  return (
    <div className="flex h-screen bg-slate-50">
      {/* Sidebar */}
      <aside className={`bg-slate-900 text-white transition-all duration-300 flex flex-col ${isCollapsed ? 'w-20' : 'w-64'}`}>
        <div className="p-4 flex items-center justify-between border-b border-slate-700">
          {/* {!isCollapsed && <span className="font-bold text-xl tracking-tight">AppLogo</span>} */}
          {/* Logo Container */}
            <div className="flex-1 h-full flex items-center justify-center overflow-hidden">
              <img 
                src={logoImg} 
                alt="Company Logo" 
                className={`transition-all duration-300 object-contain 
                  ${isCollapsed ? 'h-10 w-10' : 'h-16 w-full'}`} 
              />
            </div>
          <button 
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors"
          >
            {isCollapsed ? <Menu size={20} /> : <ChevronLeft size={20} />}
          </button>
        </div>

        <nav className="flex-1 mt-6 px-3 space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="flex items-center p-3 rounded-lg hover:bg-slate-800 transition-colors text-slate-300 hover:text-white"
            >
              <item.icon size={22} />
              {!isCollapsed && <span className="ml-4 font-medium">{item.name}</span>}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-700">
          <button 
            onClick={() => navigate('/login')}
            className="flex items-center w-full p-3 rounded-lg hover:bg-red-900/20 text-slate-400 hover:text-red-400 transition-colors"
          >
            <LogOut size={22} />
            {!isCollapsed && <span className="ml-4 font-medium">Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto p-8">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;