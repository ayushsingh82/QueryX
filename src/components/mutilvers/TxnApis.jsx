import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../common/Header';

const EXAMPLE_TXN = {
  nonce: 42,
  value: "100000000000000000",
  receiver: "erd1cux02zersde0l7hhklzhywcxk4u9n4py5tdxyx7vrvhnza2r4gmq4vw35r",
  sender: "erd1njqj2zggfup4nl83x0nfgqjkjserm7mjyxdx5vzkm8k0gkh40ezqtfz9lg",
  gasPrice: 1000000000,
  gasLimit: 70000,
  data: "Zm9vZCBmb3IgY2F0cw==",
  signature: "93207c579bf57be03add632b0e1624a73576eeda8a1687e0fa286f03eb1a17ffb125ccdb008a264c402f074a360442c7a034e237679322f62268b614e926d10f",
  chainId: "1",
  version: 1
};

const TxnApis = () => {
  const [txnHash, setTxnHash] = useState('');
  const [sender, setSender] = useState('');
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [txnData, setTxnData] = useState(EXAMPLE_TXN);

  const handleApiCall = async (endpoint, method = 'GET', body = null) => {
    setLoading(true);
    try {
      const baseUrl = 'https://gateway.multiversx.com/transaction';
      let url = baseUrl;
      
      if (endpoint === 'hash') {
        url += `/${txnHash}`;
      } else if (endpoint === 'status') {
        url += `/${txnHash}/status`;
      } else if (endpoint === 'process-status') {
        url += `/${txnHash}/process-status`;
      } else if (endpoint === 'pool') {
        url += `/pool${sender ? `?by-sender=${sender}` : ''}`;
      } else {
        url += `/${endpoint}`;
      }

      const options = {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        ...(body && { body: JSON.stringify(body) })
      };

      const response = await fetch(url, options);
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
          MultiversX Transaction APIs
        </h1>

        {/* Input Fields */}
        <div className="mb-8 space-y-4">
          <div>
            <label className="block text-gray-400 mb-2">Transaction Hash</label>
            <input
              type="text"
              value={txnHash}
              onChange={(e) => setTxnHash(e.target.value)}
              placeholder="Enter transaction hash..."
              className="w-full bg-black/40 border border-blue-500/20 rounded-xl py-3 px-4
                text-gray-200 placeholder-gray-500 focus:outline-none focus:border-blue-500/50
                transition-all duration-300 font-mono"
            />
          </div>
          <div>
            <label className="block text-gray-400 mb-2">Sender Address (for pool queries)</label>
            <input
              type="text"
              value={sender}
              onChange={(e) => setSender(e.target.value)}
              placeholder="Enter sender address..."
              className="w-full bg-black/40 border border-blue-500/20 rounded-xl py-3 px-4
                text-gray-200 placeholder-gray-500 focus:outline-none focus:border-blue-500/50
                transition-all duration-300 font-mono"
            />
          </div>
        </div>

        {/* API Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <ApiButton
            title="Send Transaction"
            description="Send a signed transaction to the blockchain"
            onClick={() => handleApiCall('send', 'POST', txnData)}
          />
          <ApiButton
            title="Send Multiple"
            description="Send multiple transactions in bulk"
            onClick={() => handleApiCall('send-multiple', 'POST', [txnData])}
          />
          <ApiButton
            title="Simulate Transaction"
            description="Simulate transaction execution"
            onClick={() => handleApiCall('simulate', 'POST', txnData)}
          />
          <ApiButton
            title="Estimate Cost"
            description="Estimate transaction cost in gas units"
            onClick={() => handleApiCall('cost', 'POST', txnData)}
          />
          <ApiButton
            title="Get Transaction"
            description="Get transaction details by hash"
            onClick={() => handleApiCall('hash')}
            disabled={!txnHash}
          />
          <ApiButton
            title="Get Status"
            description="Get transaction status"
            onClick={() => handleApiCall('status')}
            disabled={!txnHash}
          />
          <ApiButton
            title="Get Process Status"
            description="Get transaction process status"
            onClick={() => handleApiCall('process-status')}
            disabled={!txnHash}
          />
          <ApiButton
            title="Get Pool"
            description="Get transactions from pool"
            onClick={() => handleApiCall('pool')}
          />
        </div>

        {/* Transaction Data Editor */}
        <div className="mb-8">
          <h2 className="text-gray-400 mb-4">Transaction Data</h2>
          <div className="bg-black/40 border border-blue-500/20 rounded-xl p-6">
            <textarea
              value={JSON.stringify(txnData, null, 2)}
              onChange={(e) => {
                try {
                  setTxnData(JSON.parse(e.target.value));
                } catch (error) {
                  // Invalid JSON, ignore
                }
              }}
              className="w-full bg-transparent text-gray-300 font-mono text-sm focus:outline-none"
              rows={10}
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

export default TxnApis;