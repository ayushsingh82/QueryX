import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Home from './components/Home.jsx'

import MultiversHome from './components/mutilvers/MultiversHome.jsx'
import AddressesApis from './components/mutilvers/AddressesApis.jsx'
import TxnApis from './components/mutilvers/TxnApis.jsx'
import BlockApis from './components/mutilvers/BlockApis.jsx'
import Chatbot from './components/mutilvers/Chatbot.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
         
          <Route path="multiverse" element={<MultiversHome />} />
          <Route path="addresses" element={<AddressesApis />} />
          <Route path="txn" element={<TxnApis />} />
          <Route path="block" element={<BlockApis />} />
              <Route path='chat' element={<Chatbot/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
