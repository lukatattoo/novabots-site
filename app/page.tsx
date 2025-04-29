'use client';

import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0f0f0f] via-[#121212] to-[#1a1a1a] text-white px-6 sm:px-20 py-16 flex flex-col items-center gap-16">
      
      {/* Animated Background Blur */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute w-[600px] h-[600px] bg-[#00ffe1]/10 blur-[150px] rounded-full top-[-200px] left-[-200px] animate-pulse-slow"></div>
        <div className="absolute w-[500px] h-[500px] bg-[#5abaff]/10 blur-[120px] rounded-full bottom-[-150px] right-[-150px] animate-pulse-slow delay-2000"></div>
      </div>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h1 className="text-4xl sm:text-6xl font-bold">NovaBots</h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-300 max-w-xl">
          Automatizăm web-ul pentru tine – bots, AI, scraping, tot ce vrei. Rapid și eficient.
        </p>
        <a
          href="#contact"
          className="mt-6 inline-block px-6 py-3 bg-white text-black rounded-full hover:bg-gray-300 transition duration-300"
        >
          Contactează-ne
        </a>
      </motion.section>

      {/* About Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-2xl text-left text-gray-300"
      >
        <h2 className="text-2xl font-semibold mb-2">Despre NovaBots</h2>
        <p>
          Suntem o echipă de pasionați de automatizare și inteligență artificială.
          Construim soluții personalizate pentru clienți care vor să economisească timp și resurse.
        </p>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-xl font-semibold">Hai să vorbim!</h2>
        <p className="text-gray-400">
          Trimite-ne un email la <a className="underline" href="mailto:contact@novabots.com">contact@novabots.com</a>
        </p>
      </motion.section>
    </div>
  );
}
