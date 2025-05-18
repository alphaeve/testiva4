import React from 'react';
import { Home, BookOpen, BarChart2, Award, User, Info, LogOut, ChevronDown } from 'lucide-react';
import Logo from '../ui/Logo';
import { Branch } from '../../types/branch';

interface NavbarProps {
  onNavigate: (section: string) => void;
  currentSection: string;
  onSignOut: () => void;
  selectedBranch: Branch | null;
  onChangeBranch: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ 
  onNavigate, 
  currentSection, 
  onSignOut,
  selectedBranch,
  onChangeBranch
}) => {
  const getBranchName = (branch: Branch | null) => {
    switch (branch) {
      case 'current':
        return 'Current Tests';
      case 'jee':
        return 'JEE Preparation';
      case 'neet':
        return 'NEET Preparation';
      default:
        return 'Select Branch';
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div onClick={() => onNavigate('home')} className="cursor-pointer">
            <Logo />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {selectedBranch && (
              <button
                onClick={onChangeBranch}
                className="flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
              >
                {getBranchName(selectedBranch)}
                <ChevronDown className="ml-2 h-4 w-4" />
              </button>
            )}
            
            <NavLink 
              href="#" 
              icon={<Home size={18} />} 
              isActive={currentSection === 'home'}
              onClick={() => onNavigate('home')}
            >
              Home
            </NavLink>
            <NavLink 
              href="#" 
              icon={<BookOpen size={18} />} 
              isActive={currentSection === 'tests'}
              onClick={() => onNavigate('tests')}
            >
              Tests
            </NavLink>
            <NavLink 
              href="#" 
              icon={<BarChart2 size={18} />} 
              isActive={currentSection === 'results'}
              onClick={() => onNavigate('results')}
            >
              Results
            </NavLink>
            <NavLink 
              href="#" 
              icon={<Award size={18} />} 
              isActive={currentSection === 'achievements'}
              onClick={() => onNavigate('achievements')}
            >
              Achievements
            </NavLink>
            <NavLink 
              href="#" 
              icon={<User size={18} />} 
              isActive={currentSection === 'profile'}
              onClick={() => onNavigate('profile')}
            >
              Profile
            </NavLink>
            <NavLink 
              href="#" 
              icon={<Info size={18} />} 
              isActive={currentSection === 'about'}
              onClick={() => onNavigate('about')}
            >
              About Us
            </NavLink>
            <NavLink 
              href="#" 
              icon={<LogOut size={18} />} 
              isActive={false}
              onClick={onSignOut}
            >
              Sign Out
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

interface NavLinkProps {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ href, icon, children, isActive, onClick }) => (
  <a
    href={href}
    onClick={(e) => {
      e.preventDefault();
      onClick();
    }}
    className={`flex items-center transition-colors duration-200 ${
      isActive 
        ? 'text-blue-600 font-semibold' 
        : 'text-gray-600 hover:text-blue-600'
    }`}
  >
    <span className="mr-2">{icon}</span>
    <span className="font-medium">{children}</span>
  </a>
);

export default Navbar;