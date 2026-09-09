import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ResistorCalculator from '../components/ResistorCalculator';
import ResistorVisualizer from '../components/ResistorVisualizer';
import ElectricalCalculator from '../components/ElectricalCalculator';
import '../styles/Dashboard.css';

function Dashboard({ user, onLogout }) {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('resistor'); // 'resistor' ou 'electrical'
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
        <h1>⚡ Calculadora Elétrica</h1>
        <div className="user-info">
          <span>Bem-vindo, {user?.nome}!</span>
          <button onClick={handleLogout} className="btn-logout">Sair</button>
        </div>
      </header>

      {/* Abas de Navegação */}
      <div className="dashboard-tabs">
        <button
          className={`tab-button ${activeTab === 'resistor' ? 'active' : ''}`}
          onClick={() => setActiveTab('resistor')}
        >
          🔴 Calculadora de Resistores
        </button>
        <button
          className={`tab-button ${activeTab === 'electrical' ? 'active' : ''}`}
          onClick={() => setActiveTab('electrical')}
        >
          ⚡ Grandezas Elétricas
        </button>
      </div>

      {/* Conteúdo das Abas */}
      <div className="dashboard-content">
        {activeTab === 'resistor' && (
          <>
            <div className="calculator-section">
              <ResistorCalculator onBandsChange={setSelectedBands} />
            </div>
            
            <div className="visualizer-section">
              <ResistorVisualizer bands={selectedBands} />
            </div>
          </>
        )}

        {activeTab === 'electrical' && (
          <div className="electrical-full-width">
            <ElectricalCalculator />
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
