import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../common/Header';
import multiversData from './multivers.json';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const findBestMatch = (query) => {
    query = query.toLowerCase().trim();
    
    // Try to find exact match first
    let bestMatch = multiversData.faq.find(item => 
      item.question.toLowerCase() === query
    );

    // If no exact match, try partial match
    if (!bestMatch) {
      bestMatch = multiversData.faq.find(item => 
        query.includes(item.question.toLowerCase())
      );
    }

    // If still no match, try keyword matching
    if (!bestMatch) {
      bestMatch = multiversData.faq.find(item => {
        const keywords = item.question.toLowerCase().split(' ');
        return keywords.some(keyword => 
          keyword.length > 3 && query.includes(keyword)
        );
      });
    }
    
    return bestMatch ? bestMatch.answer : 
      "I can help you with information about MultiversX blockchain. Try asking questions like:\n- What is MultiversX?\n- What is EGLD?\n- What are the key features of EGLD?\n- How many TPS can MultiversX achieve?\n- Where can I find MultiversX docs?";
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
      {/* Add Header */}
      <Header />

      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-[15%] w-[500px] h-[500px] rounded-full 
          bg-gradient-radial from-blue-500/10 via-transparent to-transparent blur-3xl" />
        <div className="absolute bottom-1/4 left-[15%] w-[500px] h-[500px] rounded-full 
          bg-gradient-radial from-cyan-500/10 via-transparent to-transparent blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 mb-12 mt-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 
            bg-clip-text text-transparent flex items-center gap-2">
            Multivers
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4k3nbDrC3GEsVjm0wkryqLPtNKhi2qM_KCg&s"
              alt="MultiversX Logo"
              className="w-12 h-12 object-contain rounded-full"
            />
            AI Assistant
          </h1>
        </div>

        {/* Powered by Box */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full 
            border border-blue-500/20 bg-blue-500/5 text-blue-400 text-sm">
            <span>Powered by AI & </span>
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4k3nbDrC3GEsVjm0wkryqLPtNKhi2qM_KCg&s"
              alt="MultiversX Logo"
              className="w-4 h-4 object-contain rounded-full"
            />
            <span>MultiversX</span>
          </div>
        </div>

        {/* Chat Container */}
        <div className="bg-black/40 border-2 border-blue-500/30 rounded-2xl p-6 h-[600px] 
          flex flex-col backdrop-blur-sm relative shadow-[inset_0_0_30px_rgba(59,130,246,0.1),_0_0_20px_rgba(59,130,246,0.15)]">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto mb-4 space-y-4 scrollbar-thin scrollbar-thumb-blue-500/20 
            scrollbar-track-transparent pr-4">
            {messages.length === 0 && (
              <div className="text-center text-gray-500 mt-8">
                Ask me anything about MultiversX blockchain, transactions, or smart contracts...
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
                    ? 'bg-blue-500/20 text-blue-200 shadow-blue-500/10' 
                    : 'bg-gray-800/80 text-gray-200 shadow-gray-900/50'
                }`}>
                  <div className="whitespace-pre-wrap">{message.content}</div>
                </div>
              </motion.div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-800/80 text-gray-200 rounded-2xl px-4 py-2 shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce [animation-delay:-.3s]" />
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce [animation-delay:-.5s]" />
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
              placeholder="Ask me anything about MultiversX..."
              className="w-full bg-black/40 border border-blue-500/20 rounded-xl py-4 px-6 pr-16
                text-gray-200 placeholder-gray-500 focus:outline-none focus:border-blue-500/50
                transition-all duration-300 shadow-[inset_0_0_10px_rgba(59,130,246,0.1)]"
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={isLoading}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-lg 
                bg-gradient-to-r from-blue-500 to-cyan-500 text-white 
                hover:opacity-90 transition-opacity disabled:opacity-50 shadow-lg"
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
        <footer className="border-t border-blue-500/20 pt-8 mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-white font-semibold mb-4">About</h3>
              <p className="text-gray-400 text-sm">
                MultiversX AI Assistant provides intelligent responses to your blockchain queries using 
                advanced language models and real-time data.
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

export default Chatbot;