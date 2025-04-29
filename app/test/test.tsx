'use client';

import { motion } from "framer-motion";

export default function TestPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex items-center justify-center bg-gray-100"
    >
      <h1 className="text-4xl font-bold">Test Motion</h1>
    </motion.div>
  );
}
