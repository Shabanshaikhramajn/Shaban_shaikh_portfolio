import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const Projects = () => {
  const { toast } = useToast();

  const projects = [
    {
      title: "KoboTrade (International Payments)",
      description:
        "Built a cross-platform mobile app enabling international payments from Canada to Nigeria through a digital wallet. Integrated Paga wallet payment gateway and implemented push notifications, biometric authentication, KYC verification, secure login and WebSocket-based real-time updates.",
      technologies: ["Flutter", "Dart", "Firebase", "REST API", "Provider"],
       images: [
      "/images/kobo_dashboard.jpeg",
      "/images/kobo_login.jpeg",
        "/images/kobo_sendmoney.jpeg",
    ],
      links: [
        {
          label: "Play Store",
          url: "https://play.google.com/store/apps/details?id=com.org.KoboTrade&hl=en_IN",
        },
      ],
      githubUrl: null,
    },
    {
      title: "Alpha & Omega (International Payments)",
      description:
        "Developed a UK-to-global payment application supporting card payments and bank transfers. Integrated multiple payment gateways and implemented secure KYC verification.",
      technologies: ["Flutter", "Dart", "Bloc", "API Integration"],
       images: [
      "/images/omega_dashboard.jpeg",
      "/images/omega_sendmoney.jpeg",
      "/images/omega_history.jpeg",
    ],
      links: [
        {
          label: "Play Store",
          url: "https://play.google.com/store/apps/details?id=com.app.eghczqwwknkvlouzpdcrfihlasbajenuymtvosqjbxgyf&hl=en_IN",
        },
      ],
      githubUrl: null,
    },
    {
      title: "SomRemit",
      description:
        "Developed a cross-border remittance application enabling money transfers from European countries to Asian countries, supporting multiple currency pairs. Integrated Payceler, Google Pay, and Apple Pay payment gateways."
      ,technologies: ["Flutter", "Dart", "Bloc", "GetX", "REST API" ],
       images: [
      "/images/som_register.jpeg",
      "/images/som_send.jpeg",
      "/images/som_benefi.jpeg",
      "/images/som_login.jpeg",

    ],
      links: [],
      githubUrl: null,
    },
  ];

  const handleLinkClick = (url) => {
    if (url) {
      window.open(url, "_blank");
    } else {
      toast({
        title: "🚧 Feature Coming Soon",
        description: "This link is not available yet.",
      });
    }
  };

  return (
    <section
      id="projects"
      className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-muted/30"
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
              Featured Projects
            </span>
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />

          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Real-world Flutter applications deployed on Play Store and App
            Store
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-card rounded-xl border border-border hover:border-blue-500 transition-all shadow-lg hover:shadow-blue-500/20 overflow-hidden group flex flex-col"
            >
              {/* Screenshot */}
              {project.images && (
                      <div className="overflow-x-auto flex gap-4 p-4 scrollbar-hide">
                        {project.images.map((img, i) => (
                          <img
                            key={i}
                            src={img}
                            alt={project.title}
                            className="h-[380px] w-auto rounded-lg border shadow-sm flex-shrink-0"
                          />
                        ))}
                      </div>
                    )}

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-3 text-card-foreground group-hover:text-blue-500 transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-4 flex-grow leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs bg-blue-600/10 border border-blue-500/20 rounded-full text-blue-500"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex flex-col gap-3">
                  {project.links.map((link, i) => (
                    <Button
                      key={i}
                      onClick={() => handleLinkClick(link.url)}
                      className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white"
                    >
                      <ExternalLink className="mr-2" size={16} />
                      {link.label}
                    </Button>
                  ))}

                  {project.githubUrl && (
                    <Button variant="secondary">
                      <Github className="mr-2" size={16} />
                      Source Code
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;