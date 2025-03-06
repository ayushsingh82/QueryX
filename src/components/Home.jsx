import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black p-8">
      <div className="max-w-6xl mx-auto">
        {/* Brand */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4k3nbDrC3GEsVjm0wkryqLPtNKhi2qM_KCg&s"
              alt="MultiversX Logo"
              className="w-8 h-8 object-contain rounded-full"
            />
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 
              bg-clip-text text-transparent">
              Query
            </h2>
          </div>
          <div className="h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
        </div>

        {/* Powered By - Centered */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
            border border-blue-500/20 bg-blue-500/5 text-gray-400">
            <span>Powered by AI & </span>
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4k3nbDrC3GEsVjm0wkryqLPtNKhi2qM_KCg&s"
              alt="MultiversX Logo"
              className="w-5 h-5 object-contain rounded-full"
            />
            <span>MultiversX</span>
          </div>
        </div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              The Intelligent MultiversX
            </span>
            <br />
            <span className="text-white">
              Blockchain Query Tool
            </span>
          </h1>
        </motion.div>

        {/* Action Buttons - 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto mb-16">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/multiverse')}
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 
              text-white font-semibold text-lg shadow-lg hover:shadow-blue-500/20 
              transition-all duration-300"
          >
            Start Querying →
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/chat')}
            className="px-8 py-4 rounded-xl border-2 border-blue-500/50 text-blue-400 
              font-semibold text-lg hover:bg-blue-500/10 transition-all duration-300"
          >
            MultiversX AI Assistant
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/hatom')}
            className="px-8 py-4 rounded-xl border-2 border-purple-500/50 text-purple-400 
              font-semibold text-lg hover:bg-purple-500/10 transition-all duration-300"
          >
            Hatom AI
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/foxsy')}
            className="px-8 py-4 rounded-xl border-2 border-pink-500/50 text-pink-400 
              font-semibold text-lg hover:bg-pink-500/10 transition-all duration-300"
          >
            Foxsy AI
          </motion.button>
        </div>

        {/* Footer */}
        <footer className="border-t border-blue-500/20 pt-8 mt-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="text-white font-semibold mb-4">About</h3>
                <p className="text-gray-400 text-sm">
                  QueryX provides an intuitive interface to interact with the MultiversX 
                  blockchain using natural language and simple commands.
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="https://multiversx.com" target="_blank" rel="noopener noreferrer" 
                      className="text-gray-400 hover:text-blue-400 text-sm">MultiversX Website</a>
                  </li>
                  <li>
                    <a href="https://docs.multiversx.com" target="_blank" rel="noopener noreferrer" 
                      className="text-gray-400 hover:text-blue-400 text-sm">Documentation</a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4">Connect</h3>
                <div className="flex gap-4">
                  <a href="https://twitter.com/MultiversX" target="_blank" rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-blue-400">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="text-center text-gray-400 text-sm pb-8">
              © 2024 QueryX. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;