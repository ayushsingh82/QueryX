import { motion } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-8 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-500/5 via-transparent to-transparent" />
      
      {/* Logo */}
      <motion.div 
        className="absolute top-8 left-8 z-20 flex items-center gap-3"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center">
          <span className="text-white font-bold text-xl">A</span>
        </div>
        <h2 className="text-2xl font-bold bg-gradient-to-r from-violet-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
          AI-Query
        </h2>
      </motion.div>

      {/* Floating Elements with Blur */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 right-[15%] w-64 h-64 rounded-full bg-blue-500/10 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.2, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-[15%] w-72 h-72 rounded-full bg-purple-500/10 blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-20 relative z-10 max-w-4xl mx-auto px-4"
      >
        <motion.div 
          className="inline-block mb-6 p-2 rounded-full bg-white/5 border border-white/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <span className="text-sm text-gray-400 px-4">Powered by AI & Blockchain</span>
        </motion.div>
        
        <motion.h1 
          className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-violet-500 via-purple-500 to-blue-500 bg-clip-text text-transparent leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          AI-Powered Query Tool
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Your intelligent gateway to seamless blockchain data analysis across 
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Injective </span>
          & 
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> MultiversX</span>
        </motion.p>
      </motion.div>

      {/* Boxes Container */}
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl mx-auto px-4 relative z-10">
        {/* Injective Box */}
        <motion.div
          className={`flex-1 group relative rounded-2xl p-8 backdrop-blur-sm transition-all duration-500 ease-in-out
            ${hoveredBox === 'injective' 
              ? 'border-2 border-purple-500/50 bg-purple-500/10' 
              : 'border border-purple-500/20 bg-black/20'}`}
          whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          onHoverStart={() => setHoveredBox('injective')}
          onHoverEnd={() => setHoveredBox(null)}
        >
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20">
                <img 
                  src="https://images.crunchbase.com/image/upload/c_pad,f_auto,q_auto:eco,dpr_1/x28vfuw4odw35wcxdyrg"
                  alt="Injective Logo"
                  className="w-8 h-8 object-contain filter brightness-200"
                />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Injective
              </h2>
            </div>
            <p className="text-gray-400 text-lg mb-8 min-h-[80px]">
              Explore the decentralized derivatives trading protocol with natural language queries
            </p>
            <motion.button 
              className="px-6 py-3 rounded-xl border-2 border-purple-500/50 text-purple-400 font-semibold
                transform transition-all duration-200 hover:bg-purple-500/10 group-hover:border-purple-500/70"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/injective')}
            >
              Get Started →
            </motion.button>
          </div>
        </motion.div>

        {/* Multiverse Box */}
        <motion.div
          className={`flex-1 group relative rounded-2xl p-8 backdrop-blur-sm transition-all duration-500 ease-in-out
            ${hoveredBox === 'multiverse' 
              ? 'border-2 border-blue-500/50 bg-blue-500/10' 
              : 'border border-blue-500/20 bg-black/20'}`}
          whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
          onHoverStart={() => setHoveredBox('multiverse')}
          onHoverEnd={() => setHoveredBox(null)}
        >
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20">
                <img 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4k3nbDrC3GEsVjm0wkryqLPtNKhi2qM_KCg&s"
                  alt="MultiversX Logo"
                  className="w-8 h-8 object-contain filter brightness-200"
                />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                MultiversX
              </h2>
            </div>
            <p className="text-gray-400 text-lg mb-8 min-h-[80px]">
              Query and analyze blockchain data with AI-powered natural language processing
            </p>
            <motion.button 
              className="px-6 py-3 rounded-xl border-2 border-blue-500/50 text-blue-400 font-semibold
                transform transition-all duration-200 hover:bg-blue-500/10 group-hover:border-blue-500/70"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/multiverse')}
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