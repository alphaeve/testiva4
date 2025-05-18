import React from 'react';
import Logo from '../ui/Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <Logo />
          <div className="mt-4 md:mt-0">
            <nav className="flex space-x-6">
              <FooterLink href="#contact">Contact</FooterLink>
              <FooterLink href="#privacy">Privacy Policy</FooterLink>
              <FooterLink href="#terms">Terms of Use</FooterLink>
            </nav>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-8">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Testiva. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => (
  <a
    href={href}
    className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
  >
    {children}
  </a>
);

export default Footer;