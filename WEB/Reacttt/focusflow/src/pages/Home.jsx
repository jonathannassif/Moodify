import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center h-[80vh] text-center"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-5xl font-bold mb-4">Welcome to FocusFlow</h1>
      <p className="text-xl text-gray-600">
        Stay focused. Stay calm. Master your time.
      </p>
    </motion.div>
  );
}