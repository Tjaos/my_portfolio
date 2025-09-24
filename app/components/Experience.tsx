"use client";

import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTypescript,
  SiTailwindcss,
  SiDotnet,
  SiPostgresql,
  SiGithub,
} from "react-icons/si";
import { Briefcase, Code2 } from "lucide-react";

export default function Experience() {
  const skills = [
    { icon: <SiReact className="w-8 h-8 text-sky-500" />, name: "React" },
    {
      icon: <SiNextdotjs className="w-8 h-8 text-black dark:text-white" />,
      name: "Next.js",
    },
    {
      icon: <SiNodedotjs className="w-8 h-8 text-green-600" />,
      name: "Node.js",
    },
    {
      icon: <SiTypescript className="w-8 h-8 text-blue-600" />,
      name: "TypeScript",
    },
    {
      icon: <SiTailwindcss className="w-8 h-8 text-cyan-500" />,
      name: "TailwindCSS",
    },
    { icon: <SiDotnet className="w-8 h-8 text-purple-600" />, name: ".NET" },
    {
      icon: <SiPostgresql className="w-8 h-8 text-blue-500" />,
      name: "PostgreSQL",
    },
    {
      icon: <SiGithub className="w-8 h-8 text-gray-700 dark:text-gray-200" />,
      name: "Git & GitHub",
    },
  ];

  return (
    <motion.section
      id="experience"
      className="w-full py-20 px-6 bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Experiência & Habilidades
        </h2>

        {/* Experiência */}
        <div className="space-y-8 mb-16">
          <motion.div
            className="flex items-start gap-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1" />
            <div>
              <h3 className="text-xl font-semibold">
                CESAR - Tutor de Tecnologia da Informação
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                2024 - atual
              </p>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                Tutor EduTech pelo projeto Florescendo Talentos do Centro de
                Estudos e Sistemas Avançados do Recife (CESAR) no curso de
                Desenvolvimento web com <strong>Javascript, HTML e CSS</strong>{" "}
                para alunos do ensino médio da rede pública de ensino do governo
                de Pernambuco.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="flex items-start gap-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1" />
            <div>
              <h3 className="text-xl font-semibold">
                IFPE - Integrante do grupo CAUTA (Computação Aplicada ao Uso de
                Tecnologias Assistivas)
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                2024.1 - 2025.2
              </p>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                Pesquisa, criação de literatura e desenvolvimento de uma
                ferramenta que auxilia na comunicação de crianças e adolescentes
                com autismo não verbal a se comunicarem através de figuras a fim
                de tornar o uso acessível, gratuito e sem limitação de recursos.
                Saiba mais em:{" "}
                <a
                  href="https://comunicaa.app.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 transition"
                >
                  <strong>Comunicaa.app.br</strong>
                </a>
              </p>
            </div>
          </motion.div>
          <motion.div
            className="flex items-start gap-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1" />
            <div>
              <h3 className="text-xl font-semibold">
                Bootcamp Avanade - Back-end com .NET e IA
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                2025 · 84h de formação
              </p>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                Experiência prática em desenvolvimento back-end com .NET,
                integração de IA e boas práticas de APIs com a criação de um
                projeto de microservices e uso de tecnologias de mensageria como
                RabbitMQ, API Gateway.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Habilidades */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-semibold flex items-center gap-2 mb-6">
            <Code2 className="w-6 h-6 text-green-600 dark:text-green-400" />
            Habilidades
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                className="p-4 rounded-xl bg-gray-100 dark:bg-gray-800 flex flex-col items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {skill.icon}
                <p className="font-medium mt-2">{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
