// import React from 'react';
// import { motion } from 'framer-motion';
// import { Github, Linkedin, Mail, Download } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { useToast } from '@/components/ui/use-toast';
// const Hero = () => {
//   const {
//     toast
//   } = useToast();
//   const handleSocialClick = platform => {
//     toast({
//       title: "🚧 Feature Coming Soon",
//       description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
//     });
//   };
//   const handleDownloadResume = () => {
//     const resumeContent = "This is a placeholder for Shaban shaikh's resume.";
//     const blob = new Blob([resumeContent], {
//       type: 'text/plain'
//     });
//     const url = URL.createObjectURL(blob);
//     const link = document.createElement('a');
//     link.href = url;
//     link.download = 'Ankita_Khot_Resume.txt';
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//     URL.revokeObjectURL(url);
//     toast({
//       title: "Download Started",
//       description: "Resume download has begun successfully!"
//     });
//   };
//   return <section id="hero" className="min-h-screen flex items-center justify-center pt-16 lg:pt-20 px-4 sm:px-6 lg:px-8 bg-background">
//       <div className="container mx-auto">
//         <div className="flex flex-col items-center text-center">
          
//           {/* Profile Image */}
//           <motion.div initial={{
//           scale: 0,
//           opacity: 0
//         }} animate={{
//           scale: 1,
//           opacity: 1
//         }} transition={{
//           duration: 0.5,
//           delay: 0.1
//         }} className="mb-8">
//              <div className="relative w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 rounded-full p-1 bg-gradient-to-br from-blue-500 to-cyan-500 shadow-2xl shadow-blue-500/20 overflow-hidden">
//                 <div className="w-full h-full rounded-full overflow-hidden bg-slate-900">
//                   <img src="https://horizons-cdn.hostinger.com/a8bf007a-ccf9-435f-80f6-cdc6db23863d/photo-4k4RD.jpg" alt="Shaban shaikh" className="w-full h-full object-cover" />
//                 </div>
//                 {/* Decorative blur effect */}
//                 <motion.div animate={{
//               rotate: 360
//             }} transition={{
//               duration: 20,
//               repeat: Infinity,
//               ease: "linear"
//             }} className="absolute -inset-1 rounded-full border border-white/10 opacity-30 pointer-events-none" />
//              </div>
//           </motion.div>

//           <motion.h1 initial={{
//           opacity: 0,
//           y: 20
//         }} animate={{
//           opacity: 1,
//           y: 0
//         }} transition={{
//           delay: 0.2,
//           duration: 0.6
//         }} className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 lg:mb-6">
//             <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
//               Shaban shaikh
//             </span>
//           </motion.h1>

//           <motion.p initial={{
//           opacity: 0,
//           y: 20
//         }} animate={{
//           opacity: 1,
//           y: 0
//         }} transition={{
//           delay: 0.4,
//           duration: 0.6
//         }} className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-6 lg:mb-8">
//             Flutter Developer
//           </motion.p>

//           <motion.p initial={{
//           opacity: 0,
//           y: 20
//         }} animate={{
//           opacity: 1,
//           y: 0
//         }} transition={{
//           delay: 0.6,
//           duration: 0.6
//         }} className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-8 lg:mb-12 max-w-2xl px-4">
//             Crafting beautiful and performant mobile & web applications with Flutter
//           </motion.p>

//           <motion.div initial={{
//           opacity: 0,
//           y: 20
//         }} animate={{
//           opacity: 1,
//           y: 0
//         }} transition={{
//           delay: 0.8,
//           duration: 0.6
//         }} className="flex flex-wrap items-center justify-center gap-4 mb-8 lg:mb-12">
//             <Button onClick={() => handleSocialClick('github')} variant="outline" className="px-6 py-3 h-auto text-base rounded-lg transition-all duration-300 hover:scale-105 border-primary/20 hover:border-primary/50">
//               <Github className="mr-2" size={20} />
//               GitHub
//             </Button>
//             <Button onClick={() => handleSocialClick('linkedin')} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 h-auto text-base rounded-lg transition-all duration-300 hover:scale-105">
//               <Linkedin className="mr-2" size={20} />
//               LinkedIn
//             </Button>
//             <Button onClick={() => handleSocialClick('email')} className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 h-auto text-base rounded-lg transition-all duration-300 hover:scale-105">
//               <Mail className="mr-2" size={20} />
//               Contact
//             </Button>
//           </motion.div>

//           <motion.div initial={{
//           opacity: 0
//         }} animate={{
//           opacity: 1
//         }} transition={{
//           delay: 1,
//           duration: 0.6
//         }}>
//             <Button onClick={handleDownloadResume} className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-3 h-auto text-lg rounded-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/50">
//               <Download className="mr-2" size={20} />
//               Download Resume
//             </Button>
//           </motion.div>
//         </div>
//       </div>
//     </section>;
// };
// export default Hero;

//==============================================================


// import React from "react";
// import { motion } from "framer-motion";
// import { Github, Linkedin, Mail, Download } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { useToast } from "@/components/ui/use-toast";

// const Hero = () => {
//   const { toast } = useToast();

//   // Social & contact navigation
//   const handleSocialClick = (platform) => {
//     if (platform === "github") {
//       window.open("https://github.com/ankitakhot-15", "_blank");
//       return;
//     }

//     if (platform === "linkedin") {
//       window.open(
//         "https://www.linkedin.com/in/ankita-khot-5533312bb",
//         "_blank"
//       );
//       return;
//     }

//     if (platform === "contact") {
//       const section = document.getElementById("contact");
//       if (section) {
//         section.scrollIntoView({ behavior: "smooth", block: "start" });
//       }
//     }
//   };

//   // ✅ 100% WORKING PDF DOWNLOAD
//   const handleDownloadResume = async () => {
//     try {
//       const response = await fetch("/resume/Ankita_Khot_Resume.pdf");

//       if (!response.ok) {
//         throw new Error("File not found");
//       }

//       const blob = await response.blob();
//       const url = window.URL.createObjectURL(blob);

//       const link = document.createElement("a");
//       link.href = url;
//       link.download = "Ankita_Khot_Resume.pdf";
//       document.body.appendChild(link);
//       link.click();

//       document.body.removeChild(link);
//       window.URL.revokeObjectURL(url);

//       toast({
//         title: "📄 Resume Downloaded",
//         description: "Your resume PDF has been downloaded successfully!",
//       });
//     } catch (error) {
//       toast({
//         title: "❌ Download Failed",
//         description:
//           "Resume file not found. Please check public/resume folder.",
//       });
//     }
//   };

//   return (
//     <section
//       id="hero"
//       className="min-h-screen flex items-center justify-center pt-16 lg:pt-20 px-4 sm:px-6 lg:px-8 bg-background"
//     >
//       <div className="container mx-auto">
//         <div className="flex flex-col items-center text-center">
//           {/* Profile Image */}
//           <motion.div
//             initial={{ scale: 0, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ duration: 0.6 }}
//             className="mb-8"
//           >
//             <div className="relative w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 rounded-full p-1 bg-gradient-to-br from-blue-500 to-cyan-500 shadow-2xl shadow-blue-500/20">
//               <div className="w-full h-full rounded-full overflow-hidden bg-slate-900">
//                 <img
//                   src="https://horizons-cdn.hostinger.com/a8bf007a-ccf9-435f-80f6-cdc6db23863d/photo-4k4RD.jpg"
//                   alt="Shaban shaikh"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <motion.div
//                 animate={{ rotate: 360 }}
//                 transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//                 className="absolute -inset-1 rounded-full border border-white/10 opacity-30"
//               />
//             </div>
//           </motion.div>

//           {/* Name */}
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4"
//           >
//             <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
//               Shaban shaikh
//             </span>
//           </motion.h1>

//           {/* Role */}
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.4 }}
//             className="text-xl sm:text-2xl text-muted-foreground mb-6"
//           >
//             Flutter Developer
//           </motion.p>

//           {/* Description */}
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.6 }}
//             className="text-base sm:text-lg text-muted-foreground mb-10 max-w-2xl"
//           >
//             Crafting beautiful, scalable, and high-performance mobile & web
//             applications using Flutter.
//           </motion.p>

//           {/* Buttons */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.8 }}
//             className="flex flex-wrap gap-4 mb-10 justify-center"
//           >
//             <Button variant="outline" onClick={() => handleSocialClick("github")}>
//               <Github className="mr-2" size={20} /> GitHub
//             </Button>

//             <Button
//               className="bg-blue-600 hover:bg-blue-700 text-white"
//               onClick={() => handleSocialClick("linkedin")}
//             >
//               <Linkedin className="mr-2" size={20} /> LinkedIn
//             </Button>

//             <Button
//               className="bg-cyan-600 hover:bg-cyan-700 text-white"
//               onClick={() => handleSocialClick("contact")}
//             >
//               <Mail className="mr-2" size={20} /> Contact
//             </Button>
//           </motion.div>

//           {/* Download Resume */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 1 }}
//           >
//             <Button
//               onClick={handleDownloadResume}
//               className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-10 py-4 text-lg rounded-xl shadow-xl hover:scale-110 transition"
//             >
//               <Download className="mr-3" size={22} />
//               Download Resume (PDF)
//             </Button>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;


//========================================


// import React from "react";
// import { motion } from "framer-motion";
// import { Github, Linkedin, Mail, Download } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { useToast } from "@/components/ui/use-toast";
// import ankitaPhoto from "@/assets/ankitaphoto.jpeg";

// // IMPORTANT: GitHub Pages safe resume path
// const RESUME_PATH = `${import.meta.env.BASE_URL}resume/Ankita_Khot_Resume.pdf`;

// const Hero = () => {
//   const { toast } = useToast();

//   // Navigation handlers
//   const handleGitHub = () =>
//     window.open("https://github.com/ankitakhot-15", "_blank");

//   const handleLinkedIn = () =>
//     window.open("https://www.linkedin.com/in/ankita-khot-5533312bb", "_blank");

//   const handleContact = () => {
//     const section = document.getElementById("contact");
//     if (section) section.scrollIntoView({ behavior: "smooth" });
//   };

  

// const handleDownloadResume = () => {
//   const link = document.createElement("a");
//   link.href = RESUME_PATH;
//   link.download = "Ankita_Khot_Resume.pdf";
//   link.rel = "noopener noreferrer";

//   document.body.appendChild(link);
//   link.click();
//   document.body.removeChild(link);

//   toast({
//     title: "📄 Resume Downloaded",
//     description: "Your resume has been downloaded successfully.",
//   });
// };




//   return (
//     <section
//       id="hero"
//       className="min-h-screen flex items-center px-4 sm:px-6 md:px-16 lg:px-24 pt-20 md:pt-24 lg:pt-28
//       bg-gradient-to-r from-white via-gray-100 to-white dark:from-black dark:via-slate-900 dark:to-black transition-colors"
//     >
//       <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

//         {/* LEFT CONTENT */}
//         <motion.div
//           initial={{ opacity: 0, x: -40 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-center lg:text-left"
//         >
//           <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold mb-4 text-gray-900 dark:text-slate-200">
//             Hey, I'm <span className="text-orange-400">Shaban shaikh</span>
//           </h1>

//           <h2 className="text-base sm:text-lg md:text-xl uppercase tracking-wide text-gray-700 dark:text-slate-400 mb-6">
//             Flutter Developer
//           </h2>

//           <div className="w-20 h-[2px] bg-orange-400 mb-6 mx-auto lg:mx-0" />

//           <p className="text-gray-700 dark:text-slate-300 max-w-md mb-4 leading-relaxed mx-auto lg:mx-0">
//             I specialize in building high-performance, visually appealing mobile
//             and web applications using <b>Flutter</b>.
//           </p>

//           <p className="text-gray-700 dark:text-slate-300 max-w-md mb-6 leading-relaxed mx-auto lg:mx-0">
//             Passionate about clean architecture, smooth UI animations,
//             responsive layouts, and seamless user experiences.
//           </p>

//           {/* BUTTONS */}
//           <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-6">
//             <Button
//               onClick={handleDownloadResume}
//               className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full flex items-center"
//             >
//               <Download className="mr-2" /> Resume
//             </Button>

//             <Button
//               onClick={handleGitHub}
//               variant="outline"
//               className="px-6 py-3 rounded-full flex items-center"
//             >
//               <Github className="mr-2" /> GitHub
//             </Button>

//             <Button
//               onClick={handleLinkedIn}
//               className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full flex items-center"
//             >
//               <Linkedin className="mr-2" /> LinkedIn
//             </Button>

//             <Button
//               onClick={handleContact}
//               className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-full flex items-center"
//             >
//               <Mail className="mr-2" /> Contact
//             </Button>
//           </div>
//         </motion.div>

//         {/* RIGHT IMAGE */}
//         <motion.div
//           initial={{ opacity: 0, x: 40 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           className="flex justify-center lg:justify-end mt-10 lg:mt-0"
//         >
//           <div className="relative w-48 sm:w-60 md:w-72 lg:w-96 h-64 sm:h-80 md:h-96 lg:h-[420px]
//             rounded-3xl bg-white dark:bg-gray-800 p-3 shadow-2xl"
//           >
//             <img
//               src={ankitaPhoto}
//               alt="Shaban shaikh"
//               className="w-full h-full object-cover rounded-2xl"
//             />
//           </div>
//         </motion.div>

//       </div>
//     </section>
//   );
// };

// export default Hero;


//==============================================================
import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import akashPhoto from "@/assets/shaban.jpg";

// Resume path (Vite / GitHub Pages safe)
const RESUME_PATH = `${import.meta.env.BASE_URL}resume/shaban_flutter_3y.pdf`;

const Hero = () => {
  const { toast } = useToast();

  const handleLinkedIn = () =>
    window.open(
      "https://www.linkedin.com/in/shaikhshabanali/",
      "_blank"
    );

  const handleContact = () => {
    const section = document.getElementById("contact");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = RESUME_PATH;
    link.download = "Shaban_flutter_3y.pdf";
    link.rel = "noopener noreferrer";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast({
      title: "📄 Resume Downloaded",
      description: "Your resume has been downloaded successfully.",
    });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center px-4 sm:px-6 md:px-16 lg:px-24 pt-20 md:pt-24 lg:pt-28
      bg-gradient-to-r from-white via-gray-100 to-white
      dark:from-black dark:via-slate-900 dark:to-black transition-colors"
    >
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold mb-4 text-gray-900 dark:text-slate-200">
            Hey, I'm <span className="text-orange-400">Shaban shaikh</span>
          </h1>

          <h2 className="text-base sm:text-lg md:text-xl uppercase tracking-wide text-gray-700 dark:text-slate-400 mb-6">
            Flutter Developer
          </h2>

          <div className="w-20 h-[2px] bg-orange-400 mb-6 mx-auto lg:mx-0" />

          <p className="text-gray-700 dark:text-slate-300 max-w-md mb-4 leading-relaxed mx-auto lg:mx-0">
            I specialize in building high-performance, visually appealing mobile
            and web applications using <b>Flutter</b>.
          </p>

          <p className="text-gray-700 dark:text-slate-300 max-w-md mb-6 leading-relaxed mx-auto lg:mx-0">
            Passionate about clean architecture, smooth UI animations,
            responsive layouts and seamless user experiences.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-6">
            <Button
              onClick={handleDownloadResume}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full flex items-center"
            >
              <Download className="mr-2" /> Resume
            </Button>

            <Button
              onClick={handleLinkedIn}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full flex items-center"
            >
              <Linkedin className="mr-2" /> LinkedIn
            </Button>

            <Button
              onClick={handleContact}
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-full flex items-center"
            >
              <Mail className="mr-2" /> Contact
            </Button>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center lg:justify-end mt-10 lg:mt-0"
        >
          <div
            className="relative w-48 sm:w-60 md:w-72 lg:w-96
            h-64 sm:h-80 md:h-96 lg:h-[420px]
            rounded-3xl bg-white dark:bg-gray-800 p-3 shadow-2xl"
          >
            <img
              src={akashPhoto}
              alt="Shaban shaikh"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
