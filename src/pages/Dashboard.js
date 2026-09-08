import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ResistorCalculator from '../components/ResistorCalculator';
import ResistorVisualizer from '../components/ResistorVisualizer';
import '../styles/Dashboard.css';

function Dashboard({ user, onLogout }) {
  const navigate = useNavigate();
  const [selectedBands, setSelectedBands] = useState({
    first: 'Marrom',
    second: 'Preto',
    multiplier: 'Preto',
    tolerance: 'Ouro',
  });

  const handleLogout = () => {
    onLogout();
    navigate('/login');
  };

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>⚡ Calculadora de Resistores</h1>
        <div className="user-info">
          <span>Bem-vindo, {user?.nome}!</span>
          <button onClick={handleLogout} className="btn-logout">Sair</button>
        </div>
      </header>

      <div className="dashboard-content">
        <div className="calculator-section">
          <ResistorCalculator onBandsChange={setSelectedBands} />
        </div>
        
        <div className="visualizer-section">
          <ResistorVisualizer bands={selectedBands} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
