import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Home from './components/Home.jsx'
import MultiversHome from './components/mutilvers/MultiversHome.jsx'
import Chatbot from './components/mutilvers/Chatbot.jsx'
import Foxsy from './components/Foxsy/Foxsy.jsx'
import Hatom from './components/Hatom/Hatom.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="multiverse" element={<MultiversHome />} />
          <Route path="chat" element={<Chatbot />} />
          <Route path="foxsy" element={<Foxsy />} />
          <Route path="hatom" element={<Hatom />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
