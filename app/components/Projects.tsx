"use client";

import { motion } from "framer-motion";
import { RiLinkM } from "react-icons/ri";

export default function Projects() {
  const projects = [
    {
      title: "Sistema de Pedidos Fast Food",
      description:
        "Sistema completo para pedidos em lanchonetes com cadastro de restaurantes, produtos e criação de pedidos",
      techs: ["Next.js", "Node.js", "PostgreSQL", "TailwindCSS", "Prisma"],
      link: "https://github.com/Tjaos/fsw-donalds",
    },
    {
      title: "ComuniCAA",
      description:
        "Aplicativo de comunicação alternativa voltado para pessoas com TEA, feito em Spring Boot + React Native.",
      techs: ["Java + Spring boot", "React Native", "API ARASAAC"],
      link: "https://play.google.com/store/apps/details?id=com.comunicaa.app&hl=pt_BR",
    },
    {
      title: "Oxefood",
      description: "Sistema full stack de aplicativo de fast food",
      techs: ["React.js", "Java + Spring boot"],
      link: "https://github.com/Tjaos/oxefood-api-thiago",
    },
  ];

  return (
    <motion.section
      id="projects"
      className="w-full py-20 px-6 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Alguns Projetos
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="p-6 rounded-2xl bg-white dark:bg-gray-950 shadow-lg flex flex-col justify-between"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techs.map((tech, j) => (
                    <span
                      key={j}
                      className="px-2 py-1 text-sm rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 mt-4">
                <a
                  href={project.link}
                  target="_blank"
                  className="flex items-center gap-2 text-sm font-medium px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                >
                  <RiLinkM className="w-5 h-5" /> Acesse aqui
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
