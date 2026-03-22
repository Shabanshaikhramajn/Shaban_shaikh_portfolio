

// import React from "react";
// import { motion } from "framer-motion";

// const Skills = () => {
//   const skills = [
//     {
//       name: "Flutter",
//       level: 90,
//       icon: "📱",
//       color: "from-blue-500 to-cyan-500",
//     },
//     {
//       name: "Firebase",
//       level: 85,
//       icon: "🔥",
//       color: "from-orange-500 to-yellow-500",
//     },
//     {
//       name: "Cloudinary",
//       level: 80,
//       icon: "☁️",
//       color: "from-purple-500 to-pink-500",
//     },
//     {
//   name: "GitHub",
//   level: 85,
//   icon: "🐙",
//   color: "from-emerald-400 via-green-500 to-emerald-600"
// },

//   ];

//   const additionalSkills = [
//     "Dart",
//     "REST APIs",
//     "State Management",
//     "Provider",
//     "Bloc",
//     "Git",
//     "UI/UX Design",
//     "Responsive Design",
//     "Cloud Storage",
//     "Authentication",
//     "Database Management",
//     "Agile Methodology",
//   ];

//   return (
//     <section id="skills" className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
//       <div className="container mx-auto max-w-6xl">
//         {/* Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12 lg:mb-16"
//         >
//           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
//             <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
//               Skills & Technologies
//             </span>
//           </h2>
//           <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
//         </motion.div>

//         {/* Skill Cards */}
//         <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-16">
//           {skills.map((skill, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               className="bg-slate-800/60 backdrop-blur-sm p-6 lg:p-8 rounded-xl border border-slate-700 hover:border-blue-500 transition shadow-lg hover:shadow-blue-500/20"
//             >
//               <div className="flex items-center justify-between mb-4">
//                 <div className="flex items-center gap-3">
//                   <span className="text-3xl">{skill.icon}</span>
//                   <h3 className="text-xl font-semibold text-white">
//                     {skill.name}
//                   </h3>
//                 </div>
//                 <span className="text-lg font-bold text-blue-400">
//                   {skill.level}%
//                 </span>
//               </div>

//               {/* Progress Bar */}
//               <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
//                 <motion.div
//                   initial={{ width: 0 }}
//                   whileInView={{ width: `${skill.level}%` }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 1 }}
//                   className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
//                 />
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Additional Skills */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="bg-slate-800/60 backdrop-blur-sm p-6 lg:p-8 rounded-xl border border-slate-700"
//         >
//           <h3 className="text-xl lg:text-2xl font-semibold mb-6 text-center text-white">
//             Additional Skills
//           </h3>
//           <div className="flex flex-wrap gap-3 justify-center">
//             {additionalSkills.map((skill, index) => (
//               <motion.span
//                 key={index}
//                 initial={{ opacity: 0, scale: 0 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.3, delay: index * 0.05 }}
//                 whileHover={{ scale: 1.1 }}
//                 className="px-4 py-2 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-full text-sm text-slate-200 hover:border-blue-400 transition"
//               >
//                 {skill}
//               </motion.span>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Skills;
import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    {
      name: "Flutter",
      level: 92,
      icon: "📱",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Dart",
      level: 90,
      icon: "🎯",
      color: "from-sky-500 to-blue-500",
    },
    {
      name: "Firebase",
      level: 88,
      icon: "🔥",
      color: "from-orange-500 to-yellow-500",
    },
    {
      name: "State Management (Bloc, Provider, GetX)",
      level: 90,
      icon: "🧠",
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "RESTful APIs integrations",
      level: 85,
      icon: "🔗",
      color: "from-emerald-500 to-green-500",
    },
    {
  name: "Git / Bitbucket / CI/CD",
  level: 88,
  icon: "🐙",
  color: "from-emerald-400 via-green-500 to-emerald-600",
},

  ];

  const additionalSkills = [
    "Android Studio",
    "Xcode",
    "Java",
    "Kotlin",
    "Swift",
    "Testing",
    "UI/UX Design",
    "Responsive Design",
    "Authentication",
    "Cloud Storage",
    "Clean Architecture"
 ];

  return (
    <section id="skills" className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        {/* Skill Cards */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-slate-800/60 backdrop-blur-sm p-6 lg:p-8 rounded-xl border border-slate-700 hover:border-blue-500 transition shadow-lg hover:shadow-blue-500/20"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{skill.icon}</span>
                  <h3 className="text-lg lg:text-xl font-semibold text-white">
                    {skill.name}
                  </h3>
                </div>
                <span className="text-lg font-bold text-blue-400">
                  {skill.level}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-slate-800/60 backdrop-blur-sm p-6 lg:p-8 rounded-xl border border-slate-700"
        >
          <h3 className="text-xl lg:text-2xl font-semibold mb-6 text-center text-white">
            Additional Skills
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {additionalSkills.map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-full text-sm text-slate-200 hover:border-blue-400 transition"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
