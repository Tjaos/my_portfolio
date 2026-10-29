"use client";

import { motion } from "framer-motion";
import {
  SiAmazon,
  SiGithub,
  SiOpenjdk,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiSpring,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { Award, Briefcase, Code2 } from "lucide-react";

const skills = [
  { icon: <SiOpenjdk className="h-8 w-8 text-red-600" />, name: "Java" },
  { icon: <SiSpring className="h-8 w-8 text-green-600" />, name: "Spring" },
  { icon: <SiAmazon className="h-8 w-8 text-orange-500" />, name: "AWS" },
  { icon: <SiReact className="h-8 w-8 text-sky-500" />, name: "React" },
  {
    icon: <SiNextdotjs className="h-8 w-8 text-black dark:text-white" />,
    name: "Next.js",
  },
  { icon: <SiNodedotjs className="h-8 w-8 text-green-600" />, name: "Node.js" },
  {
    icon: <SiTypescript className="h-8 w-8 text-blue-600" />,
    name: "TypeScript",
  },
  {
    icon: <SiTailwindcss className="h-8 w-8 text-cyan-500" />,
    name: "Tailwind CSS",
  },
  {
    icon: <SiPostgresql className="h-8 w-8 text-blue-500" />,
    name: "PostgreSQL",
  },
  {
    icon: <SiGithub className="h-8 w-8 text-gray-700 dark:text-gray-200" />,
    name: "Git & GitHub",
  },
];

const experiences = [
  {
    role: "Engenheiro de Software",
    company: "NTT DATA · projeto Itaú Unibanco",
    period: "Dezembro de 2025 – atual",
    description:
      "Atuo no desenvolvimento e na sustentação de sistemas internos em contexto bancário. Trabalho com Java, Spring, IA e AWS, contribuindo para a criação e evolução de aplicações, infraestrutura e API Gateways. Também investigo e corrijo falhas, presto suporte às aplicações e colaboro com o time em demandas técnicas e de negócio, incluindo sistemas legados, bancos de dados e observabilidade.",
  },
  {
    role: "Tutor de Tecnologia da Informação",
    company: "CESAR · Projeto Florescendo Talentos",
    period: "2024 – atual",
    description:
      "Ministrei aulas de desenvolvimento web para estudantes do ensino médio da rede pública de Pernambuco, com atividades práticas em JavaScript, HTML e CSS.",
  },
  {
    role: "Integrante do grupo CAUTA",
    company: "IFPE · Computação Aplicada ao Uso de Tecnologias Assistivas",
    period: "2024.1 – 2025.2",
    description:
      "Participei da pesquisa e do desenvolvimento do ComuniCAA, ferramenta de comunicação alternativa por figuras para crianças e adolescentes autistas não verbais, com foco em acessibilidade e uso gratuito.",
    link: "https://comunicaa.app.br/",
  },
  {
    role: "Bootcamp de Back-end e Inteligência Artificial",
    company: "Avanade · 84 horas",
    period: "2025",
    description:
      "Concluí uma formação prática em desenvolvimento back-end, integração com IA, microsserviços, APIs, mensageria com RabbitMQ e uso de API Gateway.",
  },
];

export default function Experience() {
  return (
    <motion.section
      id="experience"
      className="w-full bg-white px-6 py-20 text-gray-800 dark:bg-gray-950 dark:text-gray-100"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
          Experiência profissional
        </h2>

        <div className="mb-14 space-y-6">
          {experiences.map((experience, index) => (
            <motion.article
              key={experience.company}
              className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-5 md:p-6 dark:border-gray-800 dark:bg-gray-900"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Briefcase className="mt-1 h-6 w-6 shrink-0 text-blue-600 dark:text-blue-400" />
              <div>
                <h3 className="text-lg font-semibold md:text-xl">
                  {experience.role}
                </h3>
                <p className="text-sm font-medium text-blue-700 dark:text-blue-300">
                  {experience.company}
                </p>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                  {experience.period}
                </p>
                <p className="mt-3 leading-relaxed text-gray-700 dark:text-gray-300">
                  {experience.description}
                  {experience.link && (
                    <>
                      {" "}
                      <a
                        href={experience.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-blue-600 underline hover:text-blue-800 dark:text-blue-400"
                      >
                        Conheça o projeto.
                      </a>
                    </>
                  )}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mb-14 rounded-2xl border border-amber-200 bg-amber-50 p-5 md:p-6 dark:border-amber-900 dark:bg-amber-950/30">
          <div className="flex items-start gap-4">
            <Award className="mt-1 h-7 w-7 shrink-0 text-amber-600 dark:text-amber-400" />
            <div>
              <h3 className="text-lg font-semibold md:text-xl">
                AWS Certified Cloud Practitioner
              </h3>
              <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">
                Certificação obtida em 9 de setembro de 2026 · válida até 9 de
                setembro de 2029.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="mb-6 flex items-center gap-2 text-2xl font-semibold">
            <Code2 className="h-6 w-6 text-green-600 dark:text-green-400" />
            Tecnologias e ferramentas
          </h3>
          <div className="grid grid-cols-2 gap-4 text-center sm:grid-cols-3 md:grid-cols-5">
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                className="flex flex-col items-center rounded-xl bg-gray-100 p-4 dark:bg-gray-800"
                whileHover={{ scale: 1.04 }}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                {skill.icon}
                <p className="mt-2 font-medium">{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
