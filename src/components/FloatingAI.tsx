import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const FloatingAI = () => {
  return (
    <motion.div
      className="fixed bottom-8 right-8 z-40 cursor-pointer"
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div className="relative">
        <div className="absolute inset-0 bg-primary rounded-full blur-xl opacity-60 animate-pulse-glow" />
        <div className="relative glass rounded-full p-4 glow">
          <Sparkles className="w-6 h-6 text-primary" />
        </div>
      </div>
    </motion.div>
  );
};

export default FloatingAI;
