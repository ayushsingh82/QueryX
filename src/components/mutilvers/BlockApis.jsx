import React, { useState } from 'react';
import { motion } from 'framer-motion';

const BlockApis = () => {
  const [nonce, setNonce] = useState('');
  const [hash, setHash] = useState('');
  const [shard, setShard] = useState('');
  const [withTxs, setWithTxs] = useState(false);
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleApiCall = async (endpoint) => {
    setLoading(true);
    try {
      let url = 'https://gateway.multiversx.com';
      
      switch (endpoint) {
        case 'hyperblock-nonce':
          url += `/hyperblock/by-nonce/${nonce}`;
          break;
        case 'hyperblock-hash':
          url += `/hyperblock/by-hash/${hash}`;
          break;
        case 'block-nonce':
          url += `/block${shard ? `/${shard}` : ''}/by-nonce/${nonce}${withTxs ? '?withTxs=true' : ''}`;
          break;
        case 'block-hash':
          url += `/block${shard ? `/${shard}` : ''}/by-hash/${hash}${withTxs ? '?withTxs=true' : ''}`;
          break;
        default:
          throw new Error('Invalid endpoint');
      }

      const response = await fetch(url);
      const data = await response.json();
      setResponse(data);
    } catch (error) {
      setResponse({ error: error.message });
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-black p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-8">
          MultiversX Block APIs
        </h1>

        {/* Input Fields */}
        <div className="mb-8 space-y-4">
          <div>
            <label className="block text-gray-400 mb-2">Block Nonce (height)</label>
            <input
              type="text"
              value={nonce}
              onChange={(e) => setNonce(e.target.value)}
              placeholder="Enter block nonce..."
              className="w-full bg-black/40 border border-blue-500/20 rounded-xl py-3 px-4
                text-gray-200 placeholder-gray-500 focus:outline-none focus:border-blue-500/50
                transition-all duration-300 font-mono"
            />
          </div>
          <div>
            <label className="block text-gray-400 mb-2">Block Hash</label>
            <input
              type="text"
              value={hash}
              onChange={(e) => setHash(e.target.value)}
              placeholder="Enter block hash..."
              className="w-full bg-black/40 border border-blue-500/20 rounded-xl py-3 px-4
                text-gray-200 placeholder-gray-500 focus:outline-none focus:border-blue-500/50
                transition-all duration-300 font-mono"
            />
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-gray-400 mb-2">Shard (optional)</label>
              <input
                type="number"
                value={shard}
                onChange={(e) => setShard(e.target.value)}
                placeholder="Enter shard number..."
                className="w-full bg-black/40 border border-blue-500/20 rounded-xl py-3 px-4
                  text-gray-200 placeholder-gray-500 focus:outline-none focus:border-blue-500/50
                  transition-all duration-300"
              />
            </div>
            <div className="flex items-center pt-8">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={withTxs}
                  onChange={(e) => setWithTxs(e.target.checked)}
                  className="form-checkbox h-5 w-5 text-blue-500 rounded border-blue-500/20
                    focus:ring-offset-0 focus:ring-0 bg-black/40"
                />
                <span className="text-gray-400">Include Transactions</span>
              </label>
            </div>
          </div>
        </div>

        {/* API Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="space-y-4">
            <h2 className="text-gray-400 font-semibold">Hyperblock APIs</h2>
            <ApiButton
              title="Get Hyperblock by Nonce"
              description="Query a Hyperblock by its nonce"
              onClick={() => handleApiCall('hyperblock-nonce')}
              disabled={!nonce}
            />
            <ApiButton
              title="Get Hyperblock by Hash"
              description="Query a Hyperblock by its hash"
              onClick={() => handleApiCall('hyperblock-hash')}
              disabled={!hash}
            />
          </div>
          
          <div className="space-y-4">
            <h2 className="text-gray-400 font-semibold">Block APIs</h2>
            <ApiButton
              title="Get Block by Nonce"
              description="Query a Shard Block by its nonce"
              onClick={() => handleApiCall('block-nonce')}
              disabled={!nonce}
            />
            <ApiButton
              title="Get Block by Hash"
              description="Query a Shard Block by its hash"
              onClick={() => handleApiCall('block-hash')}
              disabled={!hash}
            />
          </div>
        </div>

        {/* Response Display */}
        {loading ? (
          <div className="text-blue-400">Loading...</div>
        ) : response && (
          <div className="bg-black/40 border border-blue-500/20 rounded-xl p-6 overflow-x-auto">
            <pre className="text-gray-300 whitespace-pre-wrap">
              {JSON.stringify(response, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};

const ApiButton = ({ title, description, onClick, disabled }) => (
  <motion.button
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    onClick={onClick}
    disabled={disabled}
    className={`p-4 rounded-xl border text-left transition-all duration-300 w-full
      ${disabled 
        ? 'border-gray-700 bg-gray-900/50 cursor-not-allowed' 
        : 'border-blue-500/20 bg-blue-500/10 hover:border-blue-500/40'
      }`}
  >
    <h3 className="text-blue-400 font-semibold mb-2">{title}</h3>
    <p className="text-gray-400 text-sm">{description}</p>
  </motion.button>
);

export default BlockApis;