import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../common/Header';

const EXAMPLE_ADDRESSES = [
  {
    address: 'erd1vtlpm6sxxvmgt43ldsrpswjrfcsudmradylpxn9jkp66ra3rkz4qruzvfw',
    description: '183,866.24 EGLD'
  },
  {
    address: 'erd16xta8867juxzm0sqmfevpa5karkd3l5k9cspns6zj28auv7nugqqpph374',
    description: '162,487.1 EGLD'
  },
  {
    address: 'erd1sxhameujglefnrzxyj8eha6uxqtclezmjz3t27s3e9tew0ufhqqqkxz37g',
    description: '157,070.27 EGLD'
  }
];

const AddressesApis = () => {
  const [bech32Address, setBech32Address] = useState('');
  const [key, setKey] = useState('');
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleApiCall = async (endpoint) => {
    setLoading(true);
    try {
      const baseUrl = 'https://gateway.multiversx.com/address';
      let url = `${baseUrl}/${bech32Address}`;
      
      if (endpoint) {
        url += `/${endpoint}`;
      }
      if (endpoint === 'key') {
        url += `/${key}`;
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
      <Header />
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-8">
          MultiversX Address APIs
        </h1>

        {/* Example Addresses */}
        <div className="mb-8">
          <h2 className="text-gray-400 mb-4">Example Addresses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {EXAMPLE_ADDRESSES.map((item, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setBech32Address(item.address)}
                className="p-4 rounded-xl border border-blue-500/20 bg-blue-500/10 
                  hover:border-blue-500/40 text-left"
              >
                <div className="text-blue-400 font-mono text-sm mb-2 truncate">
                  {item.address}
                </div>
                <div className="text-gray-400 text-sm">
                  Balance: {item.description}
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Input Fields */}
        <div className="mb-8 space-y-4">
          <div>
            <label className="block text-gray-400 mb-2">Bech32 Address</label>
            <input
              type="text"
              value={bech32Address}
              onChange={(e) => setBech32Address(e.target.value)}
              placeholder="Enter bech32 address..."
              className="w-full bg-black/40 border border-blue-500/20 rounded-xl py-3 px-4
                text-gray-200 placeholder-gray-500 focus:outline-none focus:border-blue-500/50
                transition-all duration-300 font-mono"
            />
          </div>
          <div>
            <label className="block text-gray-400 mb-2">Storage Key (hex-encoded, optional)</label>
            <input
              type="text"
              value={key}
              onChange={(e) => setKey(e.target.value)}
              placeholder="Enter storage key..."
              className="w-full bg-black/40 border border-blue-500/20 rounded-xl py-3 px-4
                text-gray-200 placeholder-gray-500 focus:outline-none focus:border-blue-500/50
                transition-all duration-300"
            />
          </div>
        </div>

        {/* API Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <ApiButton
            title="Get Address"
            description="Retrieve basic information about an Address"
            onClick={() => handleApiCall('')}
          />
          <ApiButton
            title="Get Guardian Data"
            description="Retrieve the guardian data of an Address"
            onClick={() => handleApiCall('guardian-data')}
          />
          <ApiButton
            title="Get Address Nonce"
            description="Retrieve the nonce of an Address"
            onClick={() => handleApiCall('nonce')}
          />
          <ApiButton
            title="Get Balance"
            description="Retrieve the balance of an Address"
            onClick={() => handleApiCall('balance')}
          />
          <ApiButton
            title="Get Username"
            description="Retrieve the username/herotag of an Address"
            onClick={() => handleApiCall('username')}
          />
          <ApiButton
            title="Get Storage Value"
            description="Retrieve a specific storage value (requires key)"
            onClick={() => handleApiCall('key')}
            disabled={!key}
          />
          <ApiButton
            title="Get All Storage"
            description="Retrieve all key-value pairs stored under the address"
            onClick={() => handleApiCall('keys')}
          />
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
    className={`p-4 rounded-xl border text-left transition-all duration-300
      ${disabled 
        ? 'border-gray-700 bg-gray-900/50 cursor-not-allowed' 
        : 'border-blue-500/20 bg-blue-500/10 hover:border-blue-500/40'
      }`}
  >
    <h3 className="text-blue-400 font-semibold mb-2">{title}</h3>
    <p className="text-gray-400 text-sm">{description}</p>
  </motion.button>
);

export default AddressesApis;


// address for testing : erd1vtlpm6sxxvmgt43ldsrpswjrfcsudmradylpxn9jkp66ra3rkz4qruzvfw

// txn hash  -- fcd232fea3d7b3dd039c1153a6c93ecdce72506e222158bf94ead87883054853

// block testing values
// block hash -- d51f6d6a7d2470a67a2d17532190311b3e75a5a93d9b7d2208fcb12ce8a70364
// nonce -- 56959