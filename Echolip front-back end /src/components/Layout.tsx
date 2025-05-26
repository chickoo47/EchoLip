import React from 'react';
import { Github } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans">
      <header className="fixed top-0 left-0 right-0 z-50 bg-opacity-80 bg-gray-900 backdrop-blur-md border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-teal-400">
              Echolip
            </span>
            <span className="text-xs px-2 py-1 rounded-full bg-violet-900/50 text-violet-300">
              v1.0
            </span>
          </div>
          <nav>
            <ul className="flex space-x-6 items-center">
              <li className="hidden md:block">
                <a href="#overview" className="hover:text-violet-400 transition-colors">
                  Overview
                </a>
              </li>
              <li className="hidden md:block">
                <a href="#features" className="hover:text-violet-400 transition-colors">
                  Features
                </a>
              </li>
              <li className="hidden md:block">
                <a href="#architecture" className="hover:text-violet-400 transition-colors">
                  Architecture
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 px-3 py-1 rounded-md bg-violet-700 hover:bg-violet-600 transition-colors"
                >
                  <Github size={16} />
                  <span className="hidden sm:inline">GitHub</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="pt-16">
        {children}
      </main>
      <footer className="bg-gray-950 border-t border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-teal-400">
                Echolip
              </span>
              <p className="text-sm text-gray-400 mt-1">
                Deep Learning Model for Silent Lip Reading
              </p>
            </div>
            <div className="flex space-x-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-violet-400 transition-colors"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-800 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Echolip Project. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;