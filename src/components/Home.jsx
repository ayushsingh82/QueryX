import { motion } from 'framer-motion';
import { useState } from 'react';

const FloatingImage = ({ src, className }) => (
  <motion.img
    src={src}
    className={`absolute pointer-events-none ${className}`}
    animate={{
      y: [0, -20, 0],
      rotate: [0, -5, 5, 0],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut"
    }}
    alt=""
  />
);

const Home = () => {
  const [hoveredBox, setHoveredBox] = useState(null);

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-8 relative overflow-hidden">
      {/* Logo */}
      <motion.div 
        className="absolute top-8 left-8 z-20"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold bg-gradient-to-r from-violet-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
          AI-Query
        </h2>
      </motion.div>

      {/* Floating Elements */}
      <FloatingImage 
        src="https://cdn-icons-png.flaticon.com/512/2091/2091665.png"
        className="w-16 h-16 top-1/4 right-[15%] opacity-10 filter invert"
      />
      <FloatingImage 
        src="https://cdn-icons-png.flaticon.com/512/4341/4341139.png"
        className="w-20 h-20 bottom-1/4 left-[15%] opacity-10 filter invert"
      />
      <FloatingImage 
        src="https://cdn-icons-png.flaticon.com/512/1693/1693746.png"
        className="w-16 h-16 top-1/3 left-[25%] opacity-10 filter invert"
      />
      <FloatingImage 
        src="https://cdn-icons-png.flaticon.com/512/8637/8637101.png"
        className="w-14 h-14 top-1/2 right-[25%] opacity-10 filter invert"
      />

      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16 relative z-10"
      >
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-violet-500 via-purple-500 to-blue-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          AI-Powered Query Tool
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Unleash the Power of Cross-Chain Intelligence
        </motion.p>
        <motion.p
          className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Your AI-powered gateway to seamless blockchain data analysis across Injective & Multiverse
        </motion.p>
      </motion.div>

      {/* Boxes Container */}
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl relative z-10">
        {/* Injective Box */}
        <motion.div
          className={`flex-1 group relative rounded-2xl p-8 border transition-all duration-500 ease-in-out
            ${hoveredBox === 'injective' 
              ? 'border-purple-500/50 bg-purple-500/20' 
              : 'border-purple-500/20 bg-black/20'}`}
          whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          onHoverStart={() => setHoveredBox('injective')}
          onHoverEnd={() => setHoveredBox(null)}
        >
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-4">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Injective
              </h2>
              <img 
                src="https://images.crunchbase.com/image/upload/c_pad,f_auto,q_auto:eco,dpr_1/x28vfuw4odw35wcxdyrg"
                alt="Injective Logo"
                className="w-8 h-8 object-contain filter brightness-200"
              />
            </div>
            <p className="text-gray-400 text-lg mb-6">
              Explore the decentralized derivatives trading protocol
            </p>
            <motion.button 
              className="px-6 py-3 rounded-lg border border-purple-500/50 text-purple-400 font-semibold
                transform transition-all duration-200 hover:bg-purple-500/10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started →
            </motion.button>
          </div>
        </motion.div>

        {/* Multiverse Box */}
        <motion.div
          className={`flex-1 group relative rounded-2xl p-8 border transition-all duration-500 ease-in-out
            ${hoveredBox === 'multiverse' 
              ? 'border-blue-500/50 bg-blue-500/20' 
              : 'border-blue-500/20 bg-black/20'}`}
          whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
          onHoverStart={() => setHoveredBox('multiverse')}
          onHoverEnd={() => setHoveredBox(null)}
        >
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-4">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Multiverse
              </h2>
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4k3nbDrC3GEsVjm0wkryqLPtNKhi2qM_KCg&s"
                alt="MultiversX Logo"
                className="w-8 h-8 object-contain filter brightness-200"
              />
            </div>
            <p className="text-gray-400 text-lg mb-6">
              Discover cross-chain possibilities
            </p>
            <motion.button 
              className="px-6 py-3 rounded-lg border border-blue-500/50 text-blue-400 font-semibold
                transform transition-all duration-200 hover:bg-blue-500/10"
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