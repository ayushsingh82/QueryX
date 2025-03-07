import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../common/Header';
import hatomData from './hatom.json';

const Hatom = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const findBestMatch = (query) => {
    query = query.toLowerCase();
    
    // Direct match
    for (const key of Object.keys(hatomData.queries)) {
      if (query.includes(key)) {
        return hatomData.queries[key].response;
      }
    }
    
    // If no match found, return default response
    return hatomData.default.response;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Simulate API delay
    setTimeout(() => {
      const response = findBestMatch(input);
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-black p-8 relative overflow-hidden">
      <Header />

      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-[15%] w-[500px] h-[500px] rounded-full 
          bg-gradient-radial from-purple-500/10 via-transparent to-transparent blur-3xl" />
        <div className="absolute bottom-1/4 left-[15%] w-[500px] h-[500px] rounded-full 
          bg-gradient-radial from-violet-500/10 via-transparent to-transparent blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 mb-12 mt-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-violet-400 
            bg-clip-text text-transparent flex items-center gap-2">
            Hatom AI Assistant
          </h1>
        </div>

        {/* Description */}
        <div className="text-center mb-8">
          <p className="text-gray-400 text-xl mx-auto max-w-2xl">
            Seamlessly query and analyze Hatom protocol data using natural language
          </p>
        </div>

        {/* Chat Container */}
        <div className="bg-black/40 border-2 border-purple-500/30 rounded-2xl p-6 h-[600px] 
          flex flex-col backdrop-blur-sm relative shadow-[inset_0_0_30px_rgba(168,85,247,0.1),_0_0_20px_rgba(168,85,247,0.15)]">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto mb-4 space-y-4 scrollbar-thin 
            scrollbar-thumb-purple-500/20 scrollbar-track-transparent pr-4">
            {messages.length === 0 && (
              <div className="text-center text-gray-500 mt-8">
                Ask me anything about Hatom protocol...
              </div>
            )}
            {messages.map((message, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[80%] rounded-2xl px-4 py-2 shadow-lg ${
                  message.role === 'user' 
                    ? 'bg-purple-500/20 text-purple-200 shadow-purple-500/10' 
                    : 'bg-gray-800/80 text-gray-200 shadow-gray-900/50'
                }`}>
                  <div className="whitespace-pre-wrap">{message.content}</div>
                </div>
              </motion.div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-800/80 text-gray-200 rounded-2xl px-4 py-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce [animation-delay:-.3s]" />
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce [animation-delay:-.5s]" />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input Form */}
          <form onSubmit={handleSubmit} className="relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything about Hatom..."
              className="w-full bg-black/40 border border-purple-500/20 rounded-xl py-4 px-6 pr-16
                text-gray-200 placeholder-gray-500 focus:outline-none focus:border-purple-500/50
                transition-all duration-300"
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={isLoading}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-lg 
                bg-gradient-to-r from-purple-500 to-violet-500 text-white 
                hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                className="w-5 h-5"
              >
                <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
              </svg>
            </motion.button>
          </form>
        </div>

        {/* Footer */}
        <footer className="border-t border-purple-500/20 pt-8 mt-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="text-white font-semibold mb-4">About</h3>
                <p className="text-gray-400 text-sm">
                  Hatom AI Assistant provides intelligent responses to your queries about 
                  the Hatom protocol using advanced language models.
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="https://hatom.com" target="_blank" rel="noopener noreferrer" 
                      className="text-gray-400 hover:text-purple-400 text-sm">Hatom Website</a>
                  </li>
                  <li>
                    <a href="https://docs.hatom.com" target="_blank" rel="noopener noreferrer" 
                      className="text-gray-400 hover:text-purple-400 text-sm">Documentation</a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4">Connect</h3>
                <div className="flex gap-4">
                  <a href="https://twitter.com/HatomProtocol" target="_blank" rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-purple-400">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <a href="https://t.me/HatomProtocol" target="_blank" rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-purple-400">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zm-12.43 8.81c-.31 0-.256-.12-.363-.41l-.91-2.99 7.03-4.18"/>
                      <path d="M19.57 5.93c.17-.14.33.03.21.17l-2.79 13.2c-.2.9-.76 1.12-1.54.7l-4.28-3.16-2.06 1.98c-.23.23-.42.42-.86.42l.31-4.33 7.89-7.13c.34-.31-.07-.48-.53-.19l-9.74 6.13-4.19-1.31c-.91-.28-.93-.91.19-1.35l16.41-6.32c.75-.28 1.41.17 1.19 1.19z"/>
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

export default Hatom;
