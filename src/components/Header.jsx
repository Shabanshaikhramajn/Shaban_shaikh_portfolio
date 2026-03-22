// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { Menu, X, Sun, Moon } from 'lucide-react';
// import { useTheme } from '@/components/ThemeProvider';
// import { Button } from '@/components/ui/button';

// const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const { theme, setTheme } = useTheme();

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navItems = [
//     { name: 'About', href: '#about' },
//     { name: 'Skills', href: '#skills' },
//     { name: 'Experience', href: '#experience' },
//     { name: 'Projects', href: '#projects' },
//     { name: 'Contact', href: '#contact' }
//   ];

//   const scrollToSection = (href) => {
//     const element = document.querySelector(href);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//       setIsMobileMenuOpen(false);
//     }
//   };

//   const toggleTheme = () => {
//     setTheme(theme === 'dark' ? 'light' : 'dark');
//   };

//   return (
//     <motion.header
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.6 }}
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         isScrolled 
//           ? 'bg-background/95 backdrop-blur-md shadow-lg border-b border-border' 
//           : 'bg-transparent'
//       }`}
//     >
//       <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16 lg:h-20">
//           <div className="flex items-center gap-4">
//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent cursor-pointer"
//               onClick={() => scrollToSection('#hero')}
//             >
//               AK
//             </motion.div>
            
//             <Button
//               variant="ghost"
//               size="icon"
//               onClick={toggleTheme}
//               className="rounded-full w-9 h-9 hover:bg-muted"
//             >
//               {theme === 'dark' ? (
//                 <Sun className="h-[1.2rem] w-[1.2rem] text-yellow-400 transition-all" />
//               ) : (
//                 <Moon className="h-[1.2rem] w-[1.2rem] text-slate-700 transition-all" />
//               )}
//               <span className="sr-only">Toggle theme</span>
//             </Button>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
//             {navItems.map((item) => (
//               <motion.button
//                 key={item.name}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={() => scrollToSection(item.href)}
//                 className="px-3 lg:px-4 py-2 rounded-lg text-sm lg:text-base text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-300"
//               >
//                 {item.name}
//               </motion.button>
//             ))}
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
//           >
//             {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         {isMobileMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             className="md:hidden py-4 bg-background/95 backdrop-blur-md rounded-lg mt-2 border border-border shadow-lg"
//           >
//             {navItems.map((item) => (
//               <button
//                 key={item.name}
//                 onClick={() => scrollToSection(item.href)}
//                 className="block w-full text-left px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-300"
//               >
//                 {item.name}
//               </button>
//             ))}
//           </motion.div>
//         )}
//       </nav>
//     </motion.header>
//   );
// };

// export default Header;

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      const yOffset = -80; // height of the header
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-lg border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo + Theme */}
          <div className="flex items-center gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent cursor-pointer"
              onClick={() => scrollToSection('#hero')}
            >
              SS
            </motion.div>

            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full w-9 h-9 hover:bg-muted"
            >
              {theme === 'dark' ? (
                <Sun className="h-[1.2rem] w-[1.2rem] text-yellow-400 transition-all" />
              ) : (
                <Moon className="h-[1.2rem] w-[1.2rem] text-slate-700 transition-all" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-3">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.href)}
                className="px-3 lg:px-4 py-2 rounded-lg text-sm lg:text-base text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-300"
              >
                {item.name}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4 bg-background/95 backdrop-blur-md rounded-lg mt-2 border border-border shadow-lg"
          >
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-300"
              >
                {item.name}
              </button>
            ))}
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;
