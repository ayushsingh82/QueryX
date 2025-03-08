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
   
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 
              bg-clip-text text-transparent">
              QueryX
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
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight space-y-1">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent 
              flex items-center justify-center">
              The Intelligent Multivers
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4k3nbDrC3GEsVjm0wkryqLPtNKhi2qM_KCg&s"
                alt="MultiversX Logo"
                className="w-14 h-14 object-contain rounded-full inline-block -ml-2"
              />
            </span>
            <br className="hidden" />
            <span className="text-white block text-3xl md:text-5xl">
              Blockchain Query Tool
            </span>
          </h1>
        </motion.div>

        {/* Enhanced Action Buttons - 2x2 Grid with Icons and Better Styling */}
        <div className="max-w-3xl mx-auto mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Main Query Button */}
            <motion.div
              whileHover={{ scale: 1.03, y: -5 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate('/multiverse')}
              className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 p-0.5 shadow-lg cursor-pointer group"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.1),transparent_50%)]"></div>
              <div className="relative bg-black/20 backdrop-blur-sm rounded-xl p-6 h-full">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                  </div>
                  <div className="bg-blue-500/20 px-3 py-1 rounded-full">
                    <span className="text-xs font-semibold text-blue-300">Featured</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Start Querying</h3>
                <p className="text-blue-100/70 mb-4">Access the blockchain with natural language queries</p>
                <div className="flex items-center mt-auto">
                  <span className="text-white font-medium">Begin now</span>
                  <svg className="w-5 h-5 ml-2 text-white transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </div>
              </div>
            </motion.div>

            {/* MultiversX AI Assistant */}
            <motion.div
              whileHover={{ scale: 1.03, y: -5 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate('/chat')}
              className="rounded-2xl border-2 border-blue-500/30 bg-gradient-to-br from-blue-900/10 to-blue-500/5 p-6 cursor-pointer group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="bg-blue-500/10 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-blue-400 mb-2">MultiversX AI Assistant</h3>
              <p className="text-gray-400 mb-4">Get blockchain guidance and smart contract insights</p>
              <div className="flex items-center mt-auto">
                <span className="text-blue-400 font-medium">Chat now</span>
                <svg className="w-5 h-5 ml-2 text-blue-400 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </div>
            </motion.div>

            {/* Hatom AI */}
            <motion.div
              whileHover={{ scale: 1.03, y: -5 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate('/hatom')}
              className="rounded-2xl border-2 border-purple-500/30 bg-gradient-to-br from-purple-900/10 to-purple-500/5 p-6 cursor-pointer group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="bg-purple-500/10 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-purple-400 mb-2">Hatom AI</h3>
              <p className="text-gray-400 mb-4">Analyze DeFi protocols and lending positions</p>
              <div className="flex items-center mt-auto">
                <span className="text-purple-400 font-medium">Explore</span>
                <svg className="w-5 h-5 ml-2 text-purple-400 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </div>
            </motion.div>

            {/* Foxsy AI */}
            <motion.div
              whileHover={{ scale: 1.03, y: -5 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate('/foxsy')}
              className="rounded-2xl border-2 border-pink-500/30 bg-gradient-to-br from-pink-900/10 to-pink-500/5 p-6 cursor-pointer group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="bg-pink-500/10 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-pink-400 mb-2">Foxsy AI</h3>
              <p className="text-gray-400 mb-4">NFT market insights and collection analysis</p>
              <div className="flex items-center mt-auto">
                <span className="text-pink-400 font-medium">Discover</span>
                <svg className="w-5 h-5 ml-2 text-pink-400 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </div>
            </motion.div>
          </div>
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