"use client";

import { motion } from "framer-motion";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { Mail } from "lucide-react";

export default function Contact() {
  const links = [
    {
      icon: <SiGithub className="w-6 h-6" />,
      name: "GitHub",
      href: "https://github.com/Tjaos",
      color:
        "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-100",
    },
    {
      icon: <SiLinkedin className="w-6 h-6" />,
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/thiagoamaraldev",
      color: "bg-blue-600 text-white hover:bg-blue-700",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      name: "Email",
      href: "mailto:th83287716@gmail.com",
      color: "bg-red-600 text-white hover:bg-red-700",
    },
  ];

  return (
    <motion.section
      id="contact"
      className="w-full py-20 px-6 bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Entre em contato
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
          Gostou do meu trabalho? Vamos conversar! Estou aberto para
          oportunidades e colaborações.
        </p>

        <div className="flex justify-center gap-6 flex-wrap">
          {links.map((link, i) => (
            <motion.a
              key={i}
              href={link.href}
              target="_blank"
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${link.color}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              {link.icon} {link.name}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
