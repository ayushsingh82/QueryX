import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Header from '../common/Header';

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

const FloatingCircle = ({ className }) => (
  <motion.div
    className={`absolute rounded-full pointer-events-none ${className}`}
    animate={{
      y: [0, -40, 0],
      x: [0, 20, 0],
      opacity: [0.1, 0.3, 0.1],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
      times: [0, 0.5, 1],
    }}
  />
);

const MultiversHome = () => {
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    const newMessage = { type: 'user', content: query };
    setMessages(prev => [...prev, newMessage]);

    let responseMessage;

    try {
      if (query.toLowerCase().startsWith('/details ')) {
        const address = query.split(' ')[1];
        if (address) {
          const response = await fetch(`https://gateway.multiversx.com/address/${address}`);
          const data = await response.json();
          responseMessage = {
            type: 'system',
            content: `Address Details:\n${JSON.stringify(data.data, null, 2)}`
          };
        }
      } else if (query.toLowerCase().startsWith('/guardian-data ')) {
        const address = query.split(' ')[1];
        if (address) {
          const response = await fetch(`https://gateway.multiversx.com/address/${address}/guardian-data`);
          const data = await response.json();
          responseMessage = {
            type: 'system',
            content: `Guardian Data:\n${JSON.stringify(data.data, null, 2)}`
          };
        }
      } else if (query.toLowerCase().startsWith('/nonce ')) {
        const address = query.split(' ')[1];
        if (address) {
          const response = await fetch(`https://gateway.multiversx.com/address/${address}/nonce`);
          const data = await response.json();
          responseMessage = {
            type: 'system',
            content: `Address Nonce: ${data.data.nonce}`
          };
        }
      } else if (query.toLowerCase().startsWith('/balance ')) {
        const address = query.split(' ')[1];
        if (address) {
          const response = await fetch(`https://gateway.multiversx.com/address/${address}/balance`);
          const data = await response.json();
          
          if (data.data?.balance) {
            const balanceInEGLD = (Number(data.data.balance) / 10**18).toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2
            });
            responseMessage = {
              type: 'system',
              content: `Balance: ${balanceInEGLD} EGLD`
            };
          }
        }
      } else if (query.toLowerCase().startsWith('/username ')) {
        const address = query.split(' ')[1];
        if (address) {
          const response = await fetch(`https://gateway.multiversx.com/address/${address}/username`);
          const data = await response.json();
          responseMessage = {
            type: 'system',
            content: data.data.username ? 
              `Username: ${atob(data.data.username)}` : 
              'No username found for this address'
          };
        }
      } else if (query.toLowerCase().startsWith('/storage ')) {
        const parts = query.split(' ');
        const key = parts[1];
        const address = parts[2];
        if (key && address) {
          const response = await fetch(`https://gateway.multiversx.com/address/${address}/key/${key}`);
          const data = await response.json();
          responseMessage = {
            type: 'system',
            content: `Storage Value:\n${JSON.stringify(data.data, null, 2)}`
          };
        }
      } else if (query.toLowerCase() === '/help addresses') {
        responseMessage = {
          type: 'system',
          content: `I can help you with the following Address operations:

• Get Address Details     →  /details <address>
• Get Guardian Data      →  /guardian-data <address>
• Get Address Nonce     →  /nonce <address>
• Get Balance           →  /balance <address>
• Get Username          →  /username <address>
• Get Storage Value     →  /storage <key> <address>

Example: /balance erd1vtlpm6sxxvmgt43ldsrpswjrfcsudmradylpxn9jkp66ra3rkz4qruzvfw`
        };
      } else if (query.toLowerCase() === '/help transactions') {
        responseMessage = {
          type: 'system',
          content: `I can help you with the following Transaction operations:

• Get Transaction Status    →  /tx-status <hash>
• Get Transaction Details   →  /tx <hash>
• Get Transaction Pool     →  /tx-pool [sender_address]
• Send Transaction         →  /send-tx <tx_data>
• Send Multiple Txns       →  /send-multiple <tx_data_array>
• Simulate Transaction     →  /simulate-tx <tx_data>

Example: /tx fcd232fea3d7b3dd039c1153a6c93ecdce72506e222158bf94ead87883054853

Note: For send and simulate operations, transaction data should be in JSON format.`
        };
      } else if (query.toLowerCase() === '/help blocks') {
        responseMessage = {
          type: 'system',
          content: `I can help you with the following Block operations:

• Get Hyperblock by Nonce  →  /hyperblock <nonce>
• Get Hyperblock by Hash   →  /hyperblock-hash <hash>
• Get Block by Nonce      →  /block <nonce>
• Get Block by Hash       →  /block-hash <hash>

Example: /block 56959

Note: For block operations, you can add shard number (optional):
/block 56959 1  (for shard 1)
/block-hash <hash> 2  (for shard 2)`
        };
      } else if (query.toLowerCase().startsWith('/hyperblock ')) {
        const nonce = query.split(' ')[1];
        if (nonce) {
          try {
            const response = await fetch(`https://gateway.multiversx.com/hyperblock/by-nonce/${nonce}`);
            const data = await response.json();
            responseMessage = {
              type: 'system',
              content: `Hyperblock by Nonce:\n${JSON.stringify(data.data, null, 2)}`
            };
          } catch (error) {
            responseMessage = {
              type: 'system',
              content: 'Error: Failed to fetch hyperblock. Please try again later.'
            };
          }
        }
      } else if (query.toLowerCase().startsWith('/hyperblock-hash ')) {
        const hash = query.split(' ')[1];
        if (hash) {
          try {
            const response = await fetch(`https://gateway.multiversx.com/hyperblock/by-hash/${hash}`);
            const data = await response.json();
            responseMessage = {
              type: 'system',
              content: `Hyperblock by Hash:\n${JSON.stringify(data.data, null, 2)}`
            };
          } catch (error) {
            responseMessage = {
              type: 'system',
              content: 'Error: Failed to fetch hyperblock. Please try again later.'
            };
          }
        }
      } else if (query.toLowerCase().startsWith('/block ')) {
        const parts = query.split(' ');
        const nonce = parts[1];
        const shard = parts[2]; // optional
        if (nonce) {
          try {
            const response = await fetch(`https://gateway.multiversx.com/block${shard ? `/${shard}` : ''}/by-nonce/${nonce}`);
            const data = await response.json();
            responseMessage = {
              type: 'system',
              content: `Block by Nonce${shard ? ` (Shard ${shard})` : ''}:\n${JSON.stringify(data.data, null, 2)}`
            };
          } catch (error) {
            responseMessage = {
              type: 'system',
              content: 'Error: Failed to fetch block. Please try again later.'
            };
          }
        }
      } else if (query.toLowerCase().startsWith('/block-hash ')) {
        const parts = query.split(' ');
        const hash = parts[1];
        const shard = parts[2]; // optional
        if (hash) {
          try {
            const response = await fetch(`https://gateway.multiversx.com/block${shard ? `/${shard}` : ''}/by-hash/${hash}`);
            const data = await response.json();
            responseMessage = {
              type: 'system',
              content: `Block by Hash${shard ? ` (Shard ${shard})` : ''}:\n${JSON.stringify(data.data, null, 2)}`
            };
          } catch (error) {
            responseMessage = {
              type: 'system',
              content: 'Error: Failed to fetch block. Please try again later.'
            };
          }
        }
      } else if (query.toLowerCase().startsWith('/tx-status ')) {
        const hash = query.split(' ')[1];
        if (hash) {
          try {
            const response = await fetch(`https://gateway.multiversx.com/transaction/${hash}/status`);
            const data = await response.json();
            responseMessage = {
              type: 'system',
              content: `Transaction Status:\n${JSON.stringify(data.data, null, 2)}`
            };
          } catch (error) {
            responseMessage = {
              type: 'system',
              content: 'Error: Failed to fetch transaction status.'
            };
          }
        }
      } else if (query.toLowerCase().startsWith('/tx ')) {
        const hash = query.split(' ')[1];
        if (hash) {
          try {
            const response = await fetch(`https://gateway.multiversx.com/transaction/${hash}`);
            const data = await response.json();
            responseMessage = {
              type: 'system',
              content: `Transaction Details:\n${JSON.stringify(data.data, null, 2)}`
            };
          } catch (error) {
            responseMessage = {
              type: 'system',
              content: 'Error: Failed to fetch transaction details.'
            };
          }
        } else if (query.toLowerCase().startsWith('/tx-pool')) {
          const sender = query.split(' ')[1]; // optional sender address
          try {
            const url = `https://gateway.multiversx.com/transaction/pool${sender ? `?by-sender=${sender}` : ''}`;
            const response = await fetch(url);
            const data = await response.json();
            responseMessage = {
              type: 'system',
              content: `Transaction Pool${sender ? ` for ${sender}` : ''}:\n${JSON.stringify(data.data, null, 2)}`
            };
          } catch (error) {
            responseMessage = {
              type: 'system',
              content: 'Error: Failed to fetch transaction pool.'
            };
          }
        } else if (query.toLowerCase().startsWith('/send-tx ')) {
          try {
            const txData = JSON.parse(query.substring(9)); // Remove '/send-tx ' and parse JSON
            const response = await fetch('https://gateway.multiversx.com/transaction/send', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(txData)
            });
            const data = await response.json();
            responseMessage = {
              type: 'system',
              content: `Transaction Sent:\n${JSON.stringify(data.data, null, 2)}`
            };
          } catch (error) {
            responseMessage = {
              type: 'system',
              content: 'Error: Failed to send transaction. Please check your transaction data format.'
            };
          }
        } else if (query.toLowerCase().startsWith('/send-multiple ')) {
          try {
            const txDataArray = JSON.parse(query.substring(14)); // Remove '/send-multiple ' and parse JSON
            const response = await fetch('https://gateway.multiversx.com/transaction/send-multiple', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(txDataArray)
            });
            const data = await response.json();
            responseMessage = {
              type: 'system',
              content: `Multiple Transactions Sent:\n${JSON.stringify(data.data, null, 2)}`
            };
          } catch (error) {
            responseMessage = {
              type: 'system',
              content: 'Error: Failed to send transactions. Please check your transaction data format.'
            };
          }
        } else if (query.toLowerCase().startsWith('/simulate-tx ')) {
          try {
            const txData = JSON.parse(query.substring(12)); // Remove '/simulate-tx ' and parse JSON
            const response = await fetch('https://gateway.multiversx.com/transaction/simulate', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(txData)
            });
            const data = await response.json();
            responseMessage = {
              type: 'system',
              content: `Transaction Simulation:\n${JSON.stringify(data.data, null, 2)}`
            };
          } catch (error) {
            responseMessage = {
              type: 'system',
              content: 'Error: Failed to simulate transaction. Please check your transaction data format.'
            };
          }
        }
      }
    } catch (error) {
      responseMessage = {
        type: 'system',
        content: `Error: ${error.message}. Please try again later.`
      };
    }

    if (responseMessage) {
      setMessages(prev => [...prev, responseMessage]);
    }

    setQuery('');
  };

  const handleQuickCommand = (command) => {
    setQuery(command);
    handleSubmit({ preventDefault: () => {}, target: null });
  };

  return (
    <div className="min-h-screen bg-black p-8 relative overflow-hidden">
      <Header />
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
      <div className="flex flex-col items-center gap-4 mb-12 mt-16">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 
          bg-clip-text text-transparent flex items-center gap-2">
          Multivers
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4k3nbDrC3GEsVjm0wkryqLPtNKhi2qM_KCg&s"
            alt="MultiversX Logo"
            className="w-12 h-12 object-contain rounded-full"
          />
          Query Tool
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

      {/* Description */}
      <div className="text-center mb-8">
        <p className="text-gray-400 text-xl mx-auto max-w-2xl">
          Seamlessly query and analyze MultiversX blockchain data using natural language
        </p>
      </div>

      {/* Chat Container */}
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-black/40 border-2 border-blue-500/30 rounded-2xl p-6 h-[600px] flex flex-col
            shadow-[inset_0_0_30px_rgba(59,130,246,0.1),_0_0_20px_rgba(59,130,246,0.15)] 
            backdrop-blur-sm relative overflow-hidden"
        >
          {/* Floating Background Elements */}
          <FloatingCircle className="w-64 h-64 bg-blue-500/20 blur-2xl top-10 right-10 z-0" />
          <FloatingCircle className="w-72 h-72 bg-cyan-500/20 blur-2xl bottom-20 -left-20 z-0" />
          <FloatingCircle className="w-56 h-56 bg-blue-400/20 blur-2xl top-40 left-20 z-0" />

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto mb-4 space-y-4 relative z-20 scrollbar-thin 
            scrollbar-thumb-blue-500/20 scrollbar-track-transparent pr-4">
            {messages.length === 0 && (
              <div className="text-center text-gray-500 mt-8">
                Ask me anything about MultiversX blockchain, transactions, or smart contracts...
              </div>
            )}
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2 shadow-lg ${
                    message.type === 'user'
                      ? 'bg-blue-500/20 text-blue-200 shadow-blue-500/10'
                      : 'bg-gray-800/80 text-gray-200 shadow-gray-900/50'
                  }`}
                >
                  <div className="whitespace-pre-line">{message.content}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="relative z-20">
            <form onSubmit={handleSubmit} className="relative">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type your query here..."
                className="w-full bg-black/40 border border-blue-500/20 rounded-xl py-4 px-6 pr-16
                  text-gray-200 placeholder-gray-500 focus:outline-none focus:border-blue-500/50
                  transition-all duration-300 shadow-[inset_0_0_10px_rgba(59,130,246,0.1)]"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-lg 
                  bg-gradient-to-r from-blue-500 to-cyan-500 text-white 
                  hover:opacity-90 transition-opacity shadow-lg"
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

          {/* Quick Commands */}
          <div className="mt-4 flex gap-2 flex-wrap relative z-20">
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => handleQuickCommand('/help addresses')}
              className="text-sm bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full
                border border-blue-500/20 hover:border-blue-500/40 transition-colors"
            >
              Addresses
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => handleQuickCommand('/help transactions')}
              className="text-sm bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full
                border border-blue-500/20 hover:border-blue-500/40 transition-colors"
            >
              Transactions
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => handleQuickCommand('/help blocks')}
              className="text-sm bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full
                border border-blue-500/20 hover:border-blue-500/40 transition-colors"
            >
              Blocks
            </motion.button>
          </div>
        </motion.div>
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
            © 2024 QueryX. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MultiversHome;

// address for testing : erd1vtlpm6sxxvmgt43ldsrpswjrfcsudmradylpxn9jkp66ra3rkz4qruzvfw

// txn hash  -- fcd232fea3d7b3dd039c1153a6c93ecdce72506e222158bf94ead87883054853

// block testing values
// block hash -- d51f6d6a7d2470a67a2d17532190311b3e75a5a93d9b7d2208fcb12ce8a70364
// nonce -- 56959


