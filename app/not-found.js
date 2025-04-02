"use client"
import Link from "next/link";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }} 
      animate={{ opacity: 1, scale: 1 }} 
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen flex flex-col gap-8 items-center justify-center text-center"
    >

      {/* Text Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.5, duration: 0.6 }}
        className="text-center flex flex-col gap-8"
      >
        <h1 className="text-3xl text-red-300 font-bold">Oops! Page Doesn't Exist</h1>

        {/* Animated Button */}
        <motion.div
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }}
        >
          <Link href={"/"}>
            <button className="inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-amber-300 rounded-lg h-[60px] shadow-md transition-all duration-300 hover:bg-amber-400">
              Go to Home
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
