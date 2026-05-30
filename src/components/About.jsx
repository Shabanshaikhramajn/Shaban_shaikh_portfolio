// import React from 'react';
// import { motion } from 'framer-motion';
// import { Code2, Smartphone, Globe } from 'lucide-react';

// const About = () => {
//   const features = [
//     {
//       icon: <Smartphone className="w-8 h-8" />,
//       title: "Mobile Development",
//       description: "Creating beautiful, native-like mobile applications for iOS and Android using Flutter"
//     },
//     {
//       icon: <Globe className="w-8 h-8" />,
//       title: "Web Development",
//       description: "Building responsive and performant web applications with Flutter Web"
//     },
//     {
//       icon: <Code2 className="w-8 h-8" />,
//       title: "Clean Code",
//       description: "Writing maintainable, scalable code following best practices and design patterns"
//     }
//   ];

//   return (
//     <section id="about" className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
//       <div className="container mx-auto max-w-6xl">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12 lg:mb-16"
//         >
//           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6">
//             <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
//               About Me
//             </span>
//           </h2>
//           <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
//         </motion.div>

//         <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 lg:mb-16">
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <img 
//               className="w-full rounded-2xl shadow-2xl shadow-blue-500/20" 
//               alt="Flutter developer workspace"
//              src="https://images.unsplash.com/photo-1540448880868-fc8f11e2938b" />
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="space-y-4 lg:space-y-6"
//           >
//             <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed">
//               I'm a passionate Flutter developer with 1 year of hands-on experience at 
//               <span className="text-blue-400 font-semibold"> Asecnsify Technology Kolhapur</span>, 
//               specializing in building cross-platform mobile and web applications.
//             </p>
//             <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed">
//               My expertise lies in creating intuitive user interfaces, implementing complex features, 
//               and ensuring seamless performance across different platforms. I'm committed to writing 
//               clean, maintainable code and staying updated with the latest Flutter developments.
//             </p>
//             <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed">
//               I thrive on solving challenging problems and transforming ideas into reality through 
//               elegant Flutter solutions that deliver exceptional user experiences.
//             </p>
//           </motion.div>
//         </div>

//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
//           {features.map((feature, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               whileHover={{ scale: 1.05, y: -5 }}
//               className="bg-slate-800/50 backdrop-blur-sm p-6 lg:p-8 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300 shadow-lg hover:shadow-blue-500/20"
//             >
//               <div className="text-blue-400 mb-4">
//                 {feature.icon}
//               </div>
//               <h3 className="text-lg lg:text-xl font-semibold mb-3 text-white">
//                 {feature.title}
//               </h3>
//               <p className="text-sm lg:text-base text-slate-400">
//                 {feature.description}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;
import React from "react";
import { motion } from "framer-motion";
import { Code2, Smartphone, Globe, UploadCloud, ShieldCheck,Zap } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile App Development",
      description:
        "Building scalable, high-performance mobile applications for Android and iOS using Flutter",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Development",
      description:
        "Developing responsive and modern web applications using Flutter Web and REST APIs",
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Clean & Scalable Code",
      description:
        "Writing maintainable, testable, and scalable code using best practices and design patterns",
    },
    {
      icon: <UploadCloud className="w-8 h-8" />,
      title: "App Deployment",
      description:
        "Publishing and maintaining production-ready apps on Google Play Store and Apple App Store with CI/CD integration",
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Mobile App Security",
      description:
        "Implementing secure authentication, API protection, and data encryption to safeguard mobile applications",
    },
    {
  icon: <Zap className="w-8 h-8" />,
  title: "Performance Optimization",
  description:
    "Optimizing Flutter applications for faster load times, smooth animations, and efficient memory usage",
}
  ];

  return (
   <section
  id="about"
  className="pt-4 pb-16 lg:pt-8 lg:pb-24 px-4 sm:px-6 lg:px-8 bg-slate-900/50"
>
      <div className="container mx-auto max-w-6xl">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 lg:mb-16">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              className="w-full rounded-2xl shadow-2xl shadow-blue-500/20"
              alt="Flutter developer workspace"
              src="https://images.unsplash.com/photo-1540448880868-fc8f11e2938b"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 lg:space-y-6"
          >
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed">
              I am a passionate{" "}
              <span className="text-blue-400 font-semibold">
                Flutter Developer
              </span>{" "}
              with over{" "}
              <span className="text-cyan-400 font-semibold">3+ years</span> of
              professional experience in building high-quality mobile and web
              applications.
            </p>

            <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed">
              I have worked with organizations such as{" "}
              <span className="text-blue-400 font-semibold">
                Calyx Solutions Pvt. Ltd and Quantum Infotech
              </span>{" "}
              as well as independently as a freelancer, delivering scalable
              Flutter solutions across multiple domains.
            </p>

            <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed">
              My expertise includes REST API integration, Firebase services,
              and state management using{" "}
              <span className="text-blue-400 font-semibold">
                BLoC, GetX, and Provider
              </span>
              . I also specialize in deploying production-ready applications
              with a strong focus on performance, clean architecture, and user
              experience.
            </p>
          </motion.div>
        </div>

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-slate-800/50 backdrop-blur-sm p-6 lg:p-8 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300 shadow-lg hover:shadow-blue-500/20"
            >
              <div className="text-blue-400 mb-4">{feature.icon}</div>

              <h3 className="text-lg lg:text-xl font-semibold mb-3 text-white">
                {feature.title}
              </h3>

              <p className="text-sm lg:text-base text-slate-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;