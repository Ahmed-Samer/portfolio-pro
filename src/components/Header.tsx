// src/components/Header.tsx
"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

// SVG Icons (remain the same)
const MenuIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1.5em" width="1.5em" {...props}><path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path></svg>
);
const CloseIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1.5em" width="1.5em" {...props}><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>
);

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const navLinks = [
    { href: "/", label: "الرئيسية" },
    { href: "/projects/ecommerce-platform", label: "المشاريع" },
    { href: "/about", label: "عني" },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-gray-900/80 backdrop-blur-sm border-b border-gray-800">
        {/* We use grid on medium screens and up for the 3-column layout */}
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-3 items-center py-3">
          
          {/* Column 1: Your Name/Logo (Aligns Left) */}
          <div className="justify-self-start">
            <Link href="/" className="text-2xl font-bold text-white hover:text-cyan-400 transition-colors">
              Ahmed Samer
            </Link>
          </div>

          {/* Column 2: Desktop Navigation Links (Centered, hidden on mobile) */}
          <nav className="hidden md:flex items-center space-x-2 justify-self-center">
            {navLinks.map(link => {
              const isActive = pathname === link.href;
              return (
                <Link 
                  key={link.href} 
                  href={link.href} 
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                    isActive 
                      ? 'bg-cyan-500 text-white shadow-md' 
                      : 'text-gray-300 hover:bg-gray-700/50 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Column 3: Mobile Menu Button (Aligns Right) */}
          <div className="justify-self-end">
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white z-50">
                {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>

        </div>
      </header>

      {/* Mobile Menu Overlay (remains the same) */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
            className="fixed inset-0 bg-gray-950/90 backdrop-blur-md z-40 flex flex-col items-center justify-center space-y-8"
          >
            {navLinks.map((link, index) => {
               const isActive = pathname === link.href;
               return (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Link 
                    href={link.href} 
                    className={`text-3xl font-bold transition-colors ${
                      isActive ? 'text-cyan-400' : 'text-gray-200 hover:text-cyan-400'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
               )
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}