"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      className="w-full py-20 px-6 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Foto */}
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Image
            src="/me.png"
            alt="Thiago Amaral"
            width={220}
            height={220}
            className="rounded-2xl shadow-lg border-4 border-gray-200 dark:border-gray-800"
          />
        </motion.div>

        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Sobre mim</h2>
          <p className="leading-relaxed text-lg">
            Sou engenheiro de software e desenvolvedor full stack, com
            experiência na construção e evolução de aplicações. Trabalho com
            <strong> Java, Spring e AWS</strong> em sistemas bancários e também
            também tenho experiência com <strong>React, TypeScript e Node.js</strong>.
            Gosto de entender o contexto de negócio, investigar problemas e
            entregar soluções confiáveis, com atenção à qualidade e à manutenção.
          </p>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Fora da programação, gosto de aprender sobre inovação, compartilhar
            conhecimento, jogar futebol e videogames e praticar exercícios físicos.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
