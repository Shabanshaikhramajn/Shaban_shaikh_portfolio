import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Linkedin, Github } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "shabanshaikh7234@gmail.com",
      action: () => window.location.href = "mailto:shabanshaikh7234@gmail.com",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Kolhapur, India",
      action: null,
      color: "text-cyan-500",
      bgColor: "bg-cyan-500/10",
      borderColor: "border-cyan-500/20"
    }
  ];

const socialLinks = [
  {
    icon: <Linkedin className="w-6 h-6" />,
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/shaikhshabanali/"
  },
  {
    icon: <Github className="w-6 h-6" />,
    name: "GitHub",
    href: "https://github.com/Shabanshaikhramajn"
  }
];

const handleSocialClick = (url) => {
  if (url) {
    window.open(url, "_blank");
  } else {
    toast({
      title: "🚧 Link Coming Soon",
      description: "This link is not available yet."
    });
  }
};

  return (
    <section id="contact" className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
          <p className="text-base lg:text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              onClick={info.action}
              className={`p-6 lg:p-8 rounded-xl border ${info.borderColor} ${info.bgColor} backdrop-blur-sm transition-all duration-300 ${info.action ? 'cursor-pointer hover:shadow-lg' : ''} flex flex-col items-center text-center`}
            >
              <div className={`p-4 rounded-full bg-background mb-4 ${info.color} shadow-sm`}>
                {info.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
              <p className="text-muted-foreground font-medium break-all">{info.value}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col items-center"
        >
          <h3 className="text-xl font-semibold mb-6">Connect with me</h3>
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleSocialClick(social.href)}
                className="p-4 bg-card border border-border rounded-full hover:border-blue-500 hover:text-blue-500 transition-all duration-300 shadow-md hover:shadow-blue-500/20 group"
              >
                {social.icon}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;