import React from "react";
import { motion } from "framer-motion";

export default function Loader({ text = "Loading..." }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white via-blue-50 to-blue-100 text-center relative overflow-hidden">
      {/* Glowing background orb */}
      <motion.div
        initial={{ opacity: 0.3 }}
        animate={{
          opacity: [0.2, 0.5, 0.2],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[300px] h-[300px] bg-blue-400/20 rounded-full blur-3xl"
      />

      {/* Loader Icon */}
      <div className="relative flex flex-col items-center justify-center">
        {/* Main Spinner */}
        <div className="w-14 h-14 border-4 border-blue-300 border-t-blue-600 rounded-full animate-spin" />

        {/* Brand Icon Overlay */}
        <motion.span
          className="absolute text-blue-700 text-3xl"
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        >
          ⚖️
        </motion.span>

        {/* Loading Text */}
        <p className="mt-6 text-blue-700 font-medium text-sm animate-pulse">
          {text}
        </p>
      </div>
    </div>
  );
}
