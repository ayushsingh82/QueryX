import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-[15%] w-[500px] h-[500px] rounded-full 
          bg-gradient-radial from-blue-500/10 via-transparent to-transparent blur-3xl" />
        <div className="absolute bottom-1/4 left-[15%] w-[500px] h-[500px] rounded-full 
          bg-gradient-radial from-cyan-500/10 via-transparent to-transparent blur-3xl" />
      </div>

      {/* Logo */}
      <motion.div 
        className="absolute top-8 left-8 z-20 flex items-center gap-3"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 
          bg-clip-text text-transparent flex items-center gap-2">
          Multivers
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4k3nbDrC3GEsVjm0wkryqLPtNKhi2qM_KCg&s"
            alt="MultiversX Logo"
            className="w-8 h-8 object-contain rounded-full inline-block"
          />
          Query Tool
        </h2>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full border border-blue-500/20 
              bg-blue-500/5 text-blue-400 text-xs mb-6">
              <span>Powered by AI & </span>
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4k3nbDrC3GEsVjm0wkryqLPtNKhi2qM_KCg&s"
                alt="MultiversX Logo"
                className="w-3.5 h-3.5 object-contain rounded-full"
              />
              <span>MultiversX</span>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              The Intelligent MultiversX
            </span>
            <br />
            <span className="text-white">
              Blockchain Query Tool
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            Query and analyze MultiversX blockchain data using natural language. Get instant access to 
            transactions, addresses, and blocks with AI-powered search capabilities.
          </p>
          
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
        </motion.div>

        {/* Stats with Features Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-white mb-8">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <StatsCard
              title="Transaction Cost"
              value="~$0.002"
              description="per transaction"
            />
            <StatsCard
              title="Network Activity"
              value="434M+"
              description="total transactions"
            />
            <StatsCard
              title="Security"
              value="3,200+"
              description="validator nodes"
            />
          </div>
        </motion.div>

        {/* Features/Commands */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          <OverviewCard
            title="Address Operations"
            description="Query address details, balance, nonce, username, and storage data using simple commands."
            example="/balance <address>"
            count="6 commands"
          />
          <OverviewCard
            title="Transaction Operations"
            description="Send, simulate, and query transaction status, details, and pool information."
            example="/tx <hash>"
            count="6 commands"
          />
          <OverviewCard
            title="Block Operations"
            description="Access hyperblock and block data by nonce or hash across different shards."
            example="/block <nonce>"
            count="4 commands"
          />
        </motion.div>

        {/* Footer */}
        <footer className="border-t border-blue-500/20 pt-8 mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-white font-semibold mb-4">About</h3>
              <p className="text-gray-400 text-sm">
                MultiversX Query Tool provides an intuitive interface to interact with 
                the MultiversX blockchain using natural language and simple commands.
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
                <li>
                  <a href="https://github.com/multiversx" target="_blank" rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-blue-400 text-sm">GitHub</a>
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
                <a href="https://t.me/MultiversX" target="_blank" rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-blue-400">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zm-12.43 8.81c-.31 0-.256-.12-.363-.41l-.91-2.99 7.03-4.18"/>
                    <path d="M19.57 5.93c.17-.14.33.03.21.17l-2.79 13.2c-.2.9-.76 1.12-1.54.7l-4.28-3.16-2.06 1.98c-.23.23-.42.42-.86.42l.31-4.33 7.89-7.13c.34-.31-.07-.48-.53-.19l-9.74 6.13-4.19-1.31c-.91-.28-.93-.91.19-1.35l16.41-6.32c.75-.28 1.41.17 1.19 1.19z"/>
                  </svg>
                </a>
                <a href="https://discord.gg/MultiversX" target="_blank" rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-blue-400">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="text-center text-gray-400 text-sm pb-8">
            © 2024 MultiversX Query Tool. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  );
};

const StatsCard = ({ title, value, description }) => (
  <div className="p-6 rounded-2xl border border-blue-500/20 bg-blue-500/5 backdrop-blur-sm">
    <h3 className="text-gray-400 text-sm mb-2">{title}</h3>
    <div className="text-4xl font-bold text-white mb-1">{value}</div>
    <p className="text-gray-500 text-sm">{description}</p>
  </div>
);

const OverviewCard = ({ title, description, example, count }) => (
  <div className="p-6 rounded-2xl border border-blue-500/20 bg-blue-500/5 backdrop-blur-sm
    hover:border-blue-500/40 transition-colors group">
    <div className="flex justify-between items-start mb-4">
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <span className="text-xs text-blue-400/70 bg-blue-500/10 px-2 py-1 rounded-full">
        {count}
      </span>
    </div>
    <p className="text-gray-400 text-sm mb-4">{description}</p>
    <div className="text-xs text-gray-500 border-t border-blue-500/20 pt-4">
      Example: <code className="text-blue-400/70 font-mono">{example}</code>
    </div>
  </div>
);

export default Home;