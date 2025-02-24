import React, { useState } from 'react';
import { motion } from 'framer-motion';

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

const MultiversHome = () => {
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setMessages([...messages, { type: 'user', content: query }]);
    // Here you'll add the API call to process the query
    setQuery('');
  };

  return (
    <div className="min-h-screen bg-black p-8 relative overflow-hidden">
      {/* Floating Elements */}
      <FloatingImage 
        src="https://cdn-icons-png.flaticon.com/512/8637/8637101.png"
        className="w-20 h-20 top-20 right-[15%] opacity-10 filter invert"
      />
      <FloatingImage 
        src="https://cdn-icons-png.flaticon.com/512/2906/2906274.png"
        className="w-16 h-16 bottom-20 left-[10%] opacity-10 filter invert"
      />
      <FloatingImage 
        src="https://cdn-icons-png.flaticon.com/512/1356/1356479.png"
        className="w-24 h-24 top-1/3 left-[20%] opacity-10 filter invert"
      />

      {/* Header */}
      <div className="max-w-6xl mx-auto relative">
        <div className="flex items-center gap-4 mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Multivers Query Tool
          </h1>
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4k3nbDrC3GEsVjm0wkryqLPtNKhi2qM_KCg&s"
            alt="MultiversX Logo"
            className="w-12 h-12 object-contain filter brightness-200"
          />
        </div>
        <p className="text-gray-400 text-xl mb-8 max-w-2xl">
          Seamlessly query and analyze MultiversX blockchain data using natural language
        </p>

        {/* Chat Container */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-black/40 border border-blue-500/10 rounded-2xl p-6 h-[600px] flex flex-col
            shadow-[0_0_15px_rgba(59,130,246,0.15)] backdrop-blur-sm relative animated-border-box multivers-border
            before:rounded-2xl overflow-hidden"
        >
          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto mb-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                    message.type === 'user'
                      ? 'bg-blue-500/20 text-blue-200'
                      : 'bg-gray-800 text-gray-200'
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <form onSubmit={handleSubmit} className="relative">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Type your query here..."
              className="w-full bg-black/40 border border-blue-500/20 rounded-xl py-4 px-6 pr-16
                text-gray-200 placeholder-gray-500 focus:outline-none focus:border-blue-500/50
                transition-all duration-300 shadow-[0_2px_10px_rgba(59,130,246,0.1)]"
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-lg 
                bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:opacity-90 transition-opacity"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                className="w-4 h-4 -rotate-180"
              >
                <path d="M12 1.5c-.997 0-1.895.416-2.534 1.086A.75.75 0 008.25 3h7.5a.75.75 0 00-1.216-.414A3.49 3.49 0 0012 1.5z" />
                <path fillRule="evenodd" d="M12 3.75a.75.75 0 01.75.75v13.19l5.47-5.47a.75.75 0 111.06 1.06l-6.75 6.75a.75.75 0 01-1.06 0l-6.75-6.75a.75.75 0 111.06-1.06l5.47 5.47V4.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
              </svg>
            </motion.button>
          </form>

          {/* Features/Hints */}
          <div className="mt-4 flex gap-2 flex-wrap">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="text-sm bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full
                border border-blue-500/20 hover:border-blue-500/40 transition-colors"
            >
              EGLD Balance
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="text-sm bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full
                border border-blue-500/20 hover:border-blue-500/40 transition-colors"
            >
              NFT Collections
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="text-sm bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full
                border border-blue-500/20 hover:border-blue-500/40 transition-colors"
            >
              Smart Contracts
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MultiversHome;

// address for testing : erd1vtlpm6sxxvmgt43ldsrpswjrfcsudmradylpxn9jkp66ra3rkz4qruzvfw

// txn hash  -- fcd232fea3d7b3dd039c1153a6c93ecdce72506e222158bf94ead87883054853

// block testing values
// block hash -- d51f6d6a7d2470a67a2d17532190311b3e75a5a93d9b7d2208fcb12ce8a70364
// nonce -- 56959


