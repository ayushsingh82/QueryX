import { motion } from 'framer-motion';
import { useState } from 'react';

const Home = () => {
  const [hoveredBox, setHoveredBox] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F1115] to-[#1A1C24] flex flex-col items-center justify-center p-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 -right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16 relative z-10"
      >
        <motion.h1 
          className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          AI-Powered Query Tool
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Explore Injective & Multiverse
        </motion.p>
      </motion.div>

      {/* Boxes Container */}
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl relative z-10">
        {/* Injective Box */}
        <motion.div
          className={`flex-1 group relative rounded-2xl p-8 backdrop-blur-xl transition-all duration-300
            ${hoveredBox === 'injective' 
              ? 'bg-purple-500/20 shadow-[0_0_40px_rgba(168,85,247,0.2)]' 
              : 'bg-white/5'}`}
          whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          onHoverStart={() => setHoveredBox('injective')}
          onHoverEnd={() => setHoveredBox(null)}
        >
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Injective
            </h2>
            <p className="text-gray-300 text-lg mb-6">
              Explore the decentralized derivatives trading protocol
            </p>
            <motion.button 
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold
                transform transition-all duration-200 hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started →
            </motion.button>
          </div>
        </motion.div>

        {/* Multiverse Box */}
        <motion.div
          className={`flex-1 group relative rounded-2xl p-8 backdrop-blur-xl transition-all duration-300
            ${hoveredBox === 'multiverse' 
              ? 'bg-blue-500/20 shadow-[0_0_40px_rgba(59,130,246,0.2)]' 
              : 'bg-white/5'}`}
          whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
          onHoverStart={() => setHoveredBox('multiverse')}
          onHoverEnd={() => setHoveredBox(null)}
        >
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Multiverse
            </h2>
            <p className="text-gray-300 text-lg mb-6">
              Discover cross-chain possibilities
            </p>
            <motion.button 
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold
                transform transition-all duration-200 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore →
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;