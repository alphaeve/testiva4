// import React, { useState } from 'react';
// import { Home, BookOpen, BarChart2, Award, User, Info, LogOut, ChevronDown, Menu, X } from 'lucide-react';
// import Logo from '../ui/Logo';
// import { Branch } from '../../types/branch';

// interface NavbarProps {
//   onNavigate: (section: string) => void;
//   currentSection: string;
//   onSignOut: () => void;
//   selectedBranch: Branch | null;
//   onChangeBranch: () => void;
// }

// const Navbar: React.FC<NavbarProps> = ({ 
//   onNavigate, 
//   currentSection, 
//   onSignOut,
//   selectedBranch,
//   onChangeBranch
// }) => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const getBranchName = (branch: Branch | null) => {
//     switch (branch) {
//       case 'current':
//         return 'Current Tests';
//       case 'jee':
//         return 'JEE Preparation';
//       case 'neet':
//         return 'NEET Preparation';
//       default:
//         return 'Select Branch';
//     }
//   };

//   const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
//   const closeMobileMenu = () => setMobileMenuOpen(false);

//   return (
//     <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between h-16">
//           <div onClick={() => onNavigate('home')} className="cursor-pointer">
//             <Logo />
//           </div>

//           {/* Mobile menu toggle */}
//           <div className="md:hidden">
//             <button onClick={toggleMobileMenu}>
//               {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>

//           {/* Desktop Nav */}
//           <div className="hidden md:flex items-center space-x-8">
//             {selectedBranch && (
//               <button
//                 onClick={onChangeBranch}
//                 className="flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
//               >
//                 {getBranchName(selectedBranch)}
//                 <ChevronDown className="ml-2 h-4 w-4" />
//               </button>
//             )}

//             <NavLinks
//               currentSection={currentSection}
//               onNavigate={onNavigate}
//               onSignOut={onSignOut}
//             />
//           </div>
//         </div>
//       </div>

//       {/* Mobile Nav Menu */}
//       {mobileMenuOpen && (
//         <div className="md:hidden bg-white border-t px-4 py-4 space-y-4">
//           {selectedBranch && (
//             <button
//               onClick={() => {
//                 onChangeBranch();
//                 closeMobileMenu();
//               }}
//               className="w-full flex items-center justify-between px-4 py-2 rounded bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
//             >
//               {getBranchName(selectedBranch)}
//               <ChevronDown className="h-4 w-4" />
//             </button>
//           )}

//           <NavLinks
//             currentSection={currentSection}
//             onNavigate={(section) => {
//               onNavigate(section);
//               closeMobileMenu();
//             }}
//             onSignOut={() => {
//               onSignOut();
//               closeMobileMenu();
//             }}
//             isMobile
//           />
//         </div>
//       )}
//     </nav>
//   );
// };

// interface NavLinkProps {
//   href: string;
//   icon: React.ReactNode;
//   children: React.ReactNode;
//   isActive: boolean;
//   onClick: () => void;
// }

// const NavLink: React.FC<NavLinkProps> = ({ href, icon, children, isActive, onClick }) => (
//   <a
//     href={href}
//     onClick={(e) => {
//       e.preventDefault();
//       onClick();
//     }}
//     className={`flex items-center px-2 py-1 transition-colors duration-200 ${
//       isActive 
//         ? 'text-blue-600 font-semibold' 
//         : 'text-gray-600 hover:text-blue-600'
//     }`}
//   >
//     <span className="mr-2">{icon}</span>
//     <span>{children}</span>
//   </a>
// );

// // Extracted NavLinks group for reuse
// const NavLinks: React.FC<{
//   currentSection: string;
//   onNavigate: (section: string) => void;
//   onSignOut: () => void;
//   isMobile?: boolean;
// }> = ({ currentSection, onNavigate, onSignOut, isMobile }) => (
//   <div className={`flex ${isMobile ? 'flex-col space-y-3' : 'items-center space-x-8'}`}>
//     <NavLink 
//       href="#" 
//       icon={<Home size={18} />} 
//       isActive={currentSection === 'home'}
//       onClick={() => onNavigate('home')}
//     >
//       Home
//     </NavLink>
//     <NavLink 
//       href="#" 
//       icon={<BookOpen size={18} />} 
//       isActive={currentSection === 'tests'}
//       onClick={() => onNavigate('tests')}
//     >
//       Tests
//     </NavLink>
//     <NavLink 
//       href="#" 
//       icon={<BarChart2 size={18} />} 
//       isActive={currentSection === 'results'}
//       onClick={() => onNavigate('results')}
//     >
//       Results
//     </NavLink>
//     <NavLink 
//       href="#" 
//       icon={<Award size={18} />} 
//       isActive={currentSection === 'achievements'}
//       onClick={() => onNavigate('achievements')}
//     >
//       Achievements
//     </NavLink>
//     <NavLink 
//       href="#" 
//       icon={<User size={18} />} 
//       isActive={currentSection === 'profile'}
//       onClick={() => onNavigate('profile')}
//     >
//       Profile
//     </NavLink>
//     <NavLink 
//       href="#" 
//       icon={<Info size={18} />} 
//       isActive={currentSection === 'about'}
//       onClick={() => onNavigate('about')}
//     >
//       About Us
//     </NavLink>
//     <NavLink 
//       href="#" 
//       icon={<LogOut size={18} />} 
//       isActive={false}
//       onClick={onSignOut}
//     >
//       Sign Out
//     </NavLink>
//   </div>
// );

// export default Navbar;





import React, { useState } from 'react';
import {
  Home,
  BookOpen,
  BarChart2,
  Award,
  User,
  Info,
  LogOut,
  ChevronDown,
  Menu,
  X,
  CreditCard, // <-- imported icon for Payment
} from 'lucide-react';
import Logo from '../ui/Logo';
import { Branch } from '../../types/branch';

interface NavbarProps {
  onNavigate: (section: string) => void;
  currentSection: string;
  onSignOut: () => void;
  selectedBranch: Branch | null;
  onChangeBranch: () => void;
}

const BRANCH_NAMES: Record<Branch, string> = {
  current: 'Current Tests',
  jee: 'JEE Preparation',
  neet: 'NEET Preparation',
};

const Navbar: React.FC<NavbarProps> = ({
  onNavigate,
  currentSection,
  onSignOut,
  selectedBranch,
  onChangeBranch,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div
            onClick={() => {
              onNavigate('home');
              closeMobileMenu();
            }}
            className="cursor-pointer"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onNavigate('home');
                closeMobileMenu();
              }
            }}
            aria-label="Go to Home"
          >
            <Logo />
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={onChangeBranch}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onChangeBranch();
                }
              }}
              tabIndex={0}
              className="flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {BRANCH_NAMES[selectedBranch]}
              <ChevronDown className="ml-2 h-4 w-4" />
            </button>

            <NavLinks
              currentSection={currentSection}
              onNavigate={(section) => {
                onNavigate(section);
                closeMobileMenu();
              }}
              onSignOut={() => {
                onSignOut();
                closeMobileMenu();
              }}
            />
          </div>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-white border-t px-4 py-4 space-y-4"
        >
          <button
            onClick={() => {
              onChangeBranch();
              closeMobileMenu();
            }}
            className="w-full flex items-center justify-between px-4 py-2 rounded bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
          >
            {BRANCH_NAMES[selectedBranch]}
            <ChevronDown className="h-4 w-4" />
          </button>

          <NavLinks
            currentSection={currentSection}
            onNavigate={(section) => {
              onNavigate(section);
              closeMobileMenu();
            }}
            onSignOut={() => {
              onSignOut();
              closeMobileMenu();
            }}
            isMobile
          />
        </div>
      )}
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

const NavLink: React.FC<NavLinkProps> = ({
  href,
  icon,
  children,
  isActive,
  onClick,
}) => (
  <a
    href={href}
    onClick={(e) => {
      e.preventDefault();
      onClick();
    }}
    aria-current={isActive ? 'page' : undefined}
    className={`flex items-center px-2 py-1 transition-colors duration-200 ${
      isActive ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:text-blue-600'
    }`}
  >
    <span className="mr-2">{icon}</span>
    <span>{children}</span>
  </a>
);

const NavLinks: React.FC<{
  currentSection: string;
  onNavigate: (section: string) => void;
  onSignOut: () => void;
  isMobile?: boolean;
}> = ({ currentSection, onNavigate, onSignOut, isMobile }) => (
  <div className={`flex ${isMobile ? 'flex-col space-y-3' : 'items-center space-x-8'}`}>
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
    {/* New Payment NavLink added here */}
    <NavLink
      href="#"
      icon={<CreditCard size={18} />}
      isActive={currentSection === 'payment'}
      onClick={() => onNavigate('payment')}
    >
      Payment
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
    <NavLink href="#" icon={<LogOut size={18} />} isActive={false} onClick={onSignOut}>
      Sign Out
    </NavLink>
  </div>
);

export default Navbar;


