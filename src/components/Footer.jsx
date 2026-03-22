import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Footer = () => {
  const { toast } = useToast();

 const handleSocialClick = (platform) => {
  const links = {
    github: "https://github.com/Shabanshaikhramajn",
    linkedin: "https://www.linkedin.com/in/shaikhshabanali/",
    email: "mailto:shabanshaikh7234@gmail.com"
  };

  if (links[platform]) {
    window.open(links[platform], "_blank");
  } else {
    toast({
      title: "🚧 Link not available",
      description: "This link is not available yet."
    });
  }
};

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900/80 backdrop-blur-sm border-t border-slate-800 py-8 lg:py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center space-y-6 lg:space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 lg:gap-6"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleSocialClick('github')}
              className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30"
            >
              <Github className="w-5 h-5 text-slate-300 hover:text-white" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleSocialClick('linkedin')}
              className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30"
            >
              <Linkedin className="w-5 h-5 text-slate-300 hover:text-white" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleSocialClick('email')}
              className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30"
            >
              <Mail className="w-5 h-5 text-slate-300 hover:text-white" />
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-2"
          >
            <p className="text-base lg:text-lg text-slate-300 flex items-center justify-center gap-2">
              Made with <Heart className="w-5 h-5 text-red-500 fill-current" /> by Shaban shaikh
            </p>
            <p className="text-sm text-slate-400">
              2025 © All rights reserved
            </p>
          </motion.div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full transition-all duration-300 shadow-lg shadow-blue-500/30"
          >
            <ArrowUp className="w-5 h-5 text-white" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;