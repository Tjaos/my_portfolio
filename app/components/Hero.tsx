"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-gray-900 to-black text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center"
      >
        <Image
          src="/me.jpg" // coloque sua foto em public/me.jpg
          alt="Foto Thiago Amaral"
          width={160}
          height={160}
          className="rounded-full border-4 border-white shadow-lg"
        />
        <h1 className="mt-6 text-4xl md:text-6xl font-bold">Thiago Amaral</h1>
        <h2 className="mt-2 text-lg md:text-2xl text-gray-300">
          Desenvolvedor Full Stack
        </h2>
        <p className="mt-4 max-w-xl text-gray-400">
          Apaixonado por tecnologia, sempre aprendendo e construindo soluções
          criativas com React, Node.js e muito mais.
        </p>
        <div className="mt-6 flex gap-4">
          <a
            href="#projects"
            className="px-6 py-2 rounded-xl bg-white text-black font-semibold shadow hover:bg-gray-200 transition"
          >
            Ver Projetos
          </a>
          <a
            href="#contact"
            className="px-6 py-2 rounded-xl border border-white text-white font-semibold shadow hover:bg-gray-800 transition"
          >
            Contato
          </a>
        </div>
      </motion.div>
    </section>
  );
}
