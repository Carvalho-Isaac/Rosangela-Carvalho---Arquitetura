import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/Home.jsx';
import Projetos from './pages/Projects.jsx';
import Contato from './pages/Contact.jsx';

const basename = process.env.NODE_ENV === 'production' 
  ? '/Rosangela-Carvalho---Arquitetura' 
  : '/';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router basename={basename}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projetos" element={<Projetos />} />
        <Route path="/Contato" element={<Contato />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  </StrictMode>
);