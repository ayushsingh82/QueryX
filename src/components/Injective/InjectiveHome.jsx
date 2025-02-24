import React, { useState } from 'react';
import { motion } from 'framer-motion';

const InjectiveHome = () => {
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
    <div className="min-h-screen bg-black p-8">
      {/* Header */}
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-8">
          Injective Query Tool
        </h1>

        {/* Chat Container */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-black/40 border border-purple-500/20 rounded-2xl p-6 h-[600px] flex flex-col
            shadow-[0_0_15px_rgba(168,85,247,0.15)] backdrop-blur-sm"
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
                      ? 'bg-purple-500/20 text-purple-200'
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
              className="w-full bg-black/40 border border-purple-500/20 rounded-xl py-4 px-6 pr-16
                text-gray-200 placeholder-gray-500 focus:outline-none focus:border-purple-500/50
                transition-all duration-300 shadow-[0_2px_10px_rgba(168,85,247,0.1)]"
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-lg 
                bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90 transition-opacity"
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
              className="text-sm bg-purple-500/10 text-purple-400 px-3 py-1 rounded-full
                border border-purple-500/20 hover:border-purple-500/40 transition-colors"
            >
              Query Balance
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="text-sm bg-purple-500/10 text-purple-400 px-3 py-1 rounded-full
                border border-purple-500/20 hover:border-purple-500/40 transition-colors"
            >
              Check Transactions
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="text-sm bg-purple-500/10 text-purple-400 px-3 py-1 rounded-full
                border border-purple-500/20 hover:border-purple-500/40 transition-colors"
            >
              Market Analysis
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InjectiveHome;