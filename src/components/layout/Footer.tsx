// import React from 'react';
// import Logo from '../ui/Logo';
// import { Twitter, Linkedin } from 'lucide-react';

// interface FooterProps {
//   onNavigate: (section: string) => void;
// }

// const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
//   return (
//     <footer className="bg-gray-50 text-gray-700 border-t border-gray-200">
//       <div className="container mx-auto px-4 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
//           {/* Logo */}
//           <div className="flex justify-center md:justify-start">
//             <Logo />
//           </div>

//           {/* Navigation Links */}
//           <nav aria-label="Footer navigation" className="flex justify-center">
//             <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
//               <FooterLink onClick={() => onNavigate('contact')}>Contact</FooterLink>
//               <FooterLink onClick={() => onNavigate('privacy')}>Privacy Policy</FooterLink>
//               <FooterLink onClick={() => onNavigate('terms')}>Terms of Use</FooterLink>
//             </div>
//           </nav>

//           {/* Social Icons */}
//           <div className="flex justify-center md:justify-end space-x-4">
//             <a
//               href="https://twitter.com/yourprofile"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-500 hover:text-blue-600 transition"
//               aria-label="Twitter"
//             >
//               <Twitter size={24} />
//             </a>
//             <a
//               href="https://linkedin.com/in/yourprofile"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-500 hover:text-blue-700 transition"
//               aria-label="LinkedIn"
//             >
//               <Linkedin size={24} />
//             </a>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="mt-8 pt-6 border-t border-gray-200 text-center text-sm text-gray-500">
//           © {new Date().getFullYear()} <span className="font-medium">Testiva</span>. All rights reserved.
//         </div>
//       </div>
//     </footer>
//   );
// };

// interface FooterLinkProps {
//   onClick: () => void;
//   children: React.ReactNode;
// }

// const FooterLink: React.FC<FooterLinkProps> = ({ onClick, children }) => (
//   <button
//     onClick={onClick}
//     className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
//   >
//     {children}
//   </button>
// );

// export default Footer;


import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../ui/Logo';
import { Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 text-gray-700 border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo */}
          <div className="flex justify-center md:justify-start">
            <Logo />
          </div>

          {/* Navigation Links */}
          <nav aria-label="Footer navigation" className="flex justify-center">
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
              <FooterLink to="/contact">Contact</FooterLink>
              <FooterLink to="/privacy">Privacy Policy</FooterLink>
              <FooterLink to="/terms">Terms of Use</FooterLink>
              <FooterLink to="/cancellation-policy">Cancellation Policy</FooterLink>
            </div>
          </nav>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-end space-x-4">
            <a
              href="https://twitter.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-600 transition"
              aria-label="Twitter"
            >
              <Twitter size={24} />
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-700 transition"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-gray-200 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} <span className="font-medium">Testiva</span>. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

interface FooterLinkProps {
  to: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ to, children }) => (
  <Link
    to={to}
    className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium"
  >
    {children}
  </Link>
);

export default Footer;
